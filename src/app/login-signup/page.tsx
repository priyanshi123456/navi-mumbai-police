"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [nearestPoliceStation, setNearestPoliceStation] = useState('APMC');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter(); // Initialize the useRouter hook

  const handlePoliceStationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNearestPoliceStation(e.target.value);
  };

  const handleAgreeTermsChange = () => {
    setAgreedTerms(!agreedTerms);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pathname = '/dashboard';
    const query = {
      isLogin: true,
      username: 'Priyanshi',
    };

    if (username === 'priyanshi jain' && password === 'priyanshi') {
      // Redirect to dashboard
      alert('Login success');
      const url = {
        pathname,
        query,
      };
      router.push(`${url.pathname}?isLogin=${url.query.isLogin}&username=${url.query.username}`);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle signup logic here
    alert('Signup functionality will be implemented');
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-all duration-300" style={{ minHeight: '520px' }}>
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome</h1>
          <p className="text-base md:text-sm font-semibold">Please login or sign up to continue with the application</p>
        </div>
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 px-4 py-2 mr-2 rounded-full border-2 ${isLogin ? 'bg-blue-500 text-white border-transparent' : 'bg-white text-blue-500 border-blue-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 px-4 py-2 rounded-full border-2 ${!isLogin ? 'bg-blue-500 text-white border-transparent' : 'bg-white text-blue-500 border-blue-500'}`}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form className="w-full transition-all duration-300" onSubmit={handleLogin}>
            <div className="relative mb-4 mt-8">
              <label
                htmlFor="username"
                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm flex items-center"
              >
                <span className="text-red-500 mr-1">*</span>
                Username
              </label>
              <input
                id="username"
                type="text"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative mb-4 mt-8">
              <label
                htmlFor="password"
                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
              >
                <span className="text-red-500 mr-1">*</span>
                Password
              </label>

              <input
                id="password"
                type="password"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="mr-2 leading-tight focus:outline-none"
                onChange={handleAgreeTermsChange}
                checked={agreedTerms}
              />
              <label className="block text-gray-700 text-sm font-bold" htmlFor="terms">
                I agree to all the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mt-6"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="w-full transition-all duration-300" onSubmit={handleSignup}>
            <div className="relative mb-4 mt-8">
              <label
                htmlFor="username"
                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
              >
                <span className="text-red-500 mr-1">*</span>
                Username
              </label>
              <input
                id="username"
                type="text"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            </div>
            <div className="relative mb-4 mt-8">
              <label
                htmlFor="password"
                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
              >
                <span className="text-red-500 mr-1">*</span>
                Password
              </label>
              <input
                id="password"
                type="password"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            </div>
            <div className="relative mb-4 mt-8">
              <label
                htmlFor="mobile"
                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
              >
                <span className="text-red-500 mr-1">*</span>
                Mobile No
              </label>
              <input
                id="mobile"
                type="text"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            </div>
            <div className="relative mb-4 mt-8">
              <label
                htmlFor="email"
                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
              >
                Email Id
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              />
            </div>
            <div className="flex items-center my-4 py-2 mt-4 mx-auto sm:ml-4 md:ml-8 lg:ml-32">
              <input
                type="checkbox"
                id="resident-navimumbai"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <label
                htmlFor="resident-navimumbai"
                className="ml-2 block text-sm text-gray-900"
              >
                <span className="font-bold ml-2">Location Selection</span> <br />
                <span className='ml-2'>Resident of Navimumbai</span>
              </label>
            </div>

            <div className="mb-8 flex items-center relative mt-8">
              <label
                htmlFor="nearestPoliceStation"
                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
              >
                Nearest Police Station
              </label>
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <select
                id="nearestPoliceStation"
                className="appearance-none border  w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                value={nearestPoliceStation}
                onChange={handlePoliceStationChange}
              >
                <option value="APMC">APMC</option>
                <option value="Vashi">Vashi</option>
                <option value="Nerul">Nerul</option>
                <option value="CBD Belapur">CBD Belapur</option>
              </select>
            </div>

            <div className="mb-4 flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="mr-2 leading-tight focus:outline-none"
                onChange={handleAgreeTermsChange}
                checked={agreedTerms}
              />
              <label className="block text-gray-700 text-sm font-bold" htmlFor="terms">
                I agree to all the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mt-6"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
