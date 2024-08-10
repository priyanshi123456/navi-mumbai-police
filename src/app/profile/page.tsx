"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera, faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '@/components/MobileMenu';
import Header2 from '@/components/Header2';

const ProfileComponent = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        alert('Changes saved!');
        console.log(data);
        reset(); // Reset the form fields
    };
    const getErrorMessage = (error: any) => {
        if (error) {
            return error.message ? error.message.toString() : 'This field is required';
        }
        return null;
    };
    return (
        <>
        <Header2 />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 mt-4">
                <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden w-full px-6 py-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-center justify-center mb-4">
                            <h2 className="mb-2 text-xl font-bold">Profile</h2>
                            <div className="relative rounded-full overflow-hidden w-16 h-16 mb-2 flex items-center justify-center">
                                <FontAwesomeIcon icon={faUser} className="text-gray-700 w-8 h-8" />
                                <div className="absolute inset-0 flex items-center justify-center ml-8 mt-8">
                                    <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCamera} className="text-gray-700 w-4 h-4 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-4">
                            {/* Username Input */}
                            <div className="relative mb-4 ">
                                <label htmlFor="username" className="block text-md font-bold leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        {...register('username', { required: true })}
                                        type="text"
                                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                    />
                                    {errors.username && (
                                        <p className="text-red-500 text-sm mt-1">Username is required</p>
                                    )}
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="relative mb-4">
                                <label htmlFor="password" className="block text-md font-bold leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2 relative">
                                    <input
                                        id="password"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters long',
                                            },
                                        })}
                                        type="password"
                                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.password)}</p>
                                    )}
                                </div>
                            </div>

                            {/* First Name Input */}
                            <div className="relative mb-4">
                                <label htmlFor="firstname" className="block text-md font-bold leading-6 text-gray-900">
                                    Firstname
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="firstname"
                                        {...register('firstname', { required: true })}
                                        type="text"
                                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                    />
                                    {errors.firstname && (
                                        <p className="text-red-500 text-sm mt-1">Firstname is required</p>
                                    )}
                                </div>
                            </div>

                            {/* Last Name Input */}
                            <div className="relative mb-4">
                                <label htmlFor="lastname" className="block text-md font-bold leading-6 text-gray-900">
                                    Lastname
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastname"
                                        {...register('lastname', { required: true })}
                                        type="text"
                                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                    />
                                    {errors.lastname && (
                                        <p className="text-red-500 text-sm mt-1">Lastname is required</p>
                                    )}
                                </div>
                            </div>

                            {/* Email ID Input */}
                            <div className="relative mb-4">
                                <label htmlFor="email" className="block text-md font-bold leading-6 text-gray-900">
                                    Email ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        {...register('email', {
                                            required: 'Email ID is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: 'Enter a valid email address',
                                            },
                                        })}
                                        type="email"
                                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.email)}</p>
                                    )}
                                </div>
                            </div>

                            {/* Mobile No Input */}
                            <div className="relative mb-4">
                                <label htmlFor="mobile" className="block text-md font-bold leading-6 text-gray-900">
                                    Mobile No
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mobile"
                                        {...register('mobile', {
                                            required: 'Mobile No is required',
                                            validate: value => value.length === 10 || 'Mobile No must be 10 digits long',
                                        })}
                                        type="text"
                                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-sm mt-1">{getErrorMessage(errors.mobile)}</p>
                                    )}
                                </div>
                            </div>

                            <div className="relative mb-4">
                                <label
                                    htmlFor="nearestPoliceStation"
                                    className="block text-md font-bold leading-6 text-gray-900"
                                >
                                    Nearest Police Station
                                </label>
                                <div className="mt-2 relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-700 w-4 h-4" />
                                    </span>
                                    <select
                                        id="nearestPoliceStation"
                                        {...register('nearestPoliceStation', { required: true })}
                                        className="shadow appearance-none border w-full py-4 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                                    >
                                        <option value="APMC">APMC</option>
                                        <option value="Vashi">Vashi</option>
                                        <option value="Nerul">Nerul</option>
                                        <option value="Turbhe">Turbhe</option>
                                        <option value="Ghansoli">Ghansoli</option>
                                    </select>
                                    {errors.nearestPoliceStation && (
                                        <p className="text-red-500 text-sm mt-1">This field is required</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-center ">
                                <button
                                    className="bg-yellow-500 text-white px-8 py-2 rounded-full shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 w-full"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="sm:hidden w-full">
                <MobileMenu isLogin={true} />
            </div>

        </>
    );
};

export default ProfileComponent;
