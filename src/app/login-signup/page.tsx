"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js
import { useForm } from 'react-hook-form';
import SignUp from './signup';

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginSignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [isLogin, setIsLogin] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const router = useRouter(); // Initialize the useRouter hook

  const handleAgreeTermsChange = () => {
    setAgreedTerms(!agreedTerms);
  };

  const handleLogin = (data: LoginFormInputs) => {
    if (!agreedTerms) {
      alert('You must agree to the terms and conditions to log in.');
      return;
    }

    // Dummy authentication check (replace with real authentication logic)
    if (data.username === 'priyanshi jain' && data.password === 'priyanshi') {
      // Log the data to console
      console.log('Login Data:', data);

      // Store username in localStorage
      localStorage.setItem('username', data.username);
      // Optional: Store a token or some identifier if needed
      // localStorage.setItem('authToken', 'some-auth-token');

      // Redirect to dashboard
      alert('Login success');
      const url = {
        pathname: '/dashboard',
        query: {
          isLogin: true,
          username: data.username,
        },
      };

      router.push(`${url.pathname}?isLogin=${url.query.isLogin}&username=${url.query.username}`);
    } else {
      alert('Invalid username or password');
    }
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
          <form className="w-full transition-all duration-300" onSubmit={handleSubmit(handleLogin)}>
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
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
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
                {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
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
          <SignUp />
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
