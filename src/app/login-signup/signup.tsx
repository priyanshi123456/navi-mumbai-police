"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

type Inputs = {
    username: string;
    password: string;
    mobile: string;
    email?: string;
    resident?: boolean;
    nearestPoliceStation: string;
    terms: boolean;
};

const SignUp = () => {
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm<Inputs>();
    const [agreedTerms, setAgreedTerms] = useState(false);

    const handleAgreeTermsChange = () => {
        setAgreedTerms(!agreedTerms);
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('Signup Data:', data);
        alert('Signup functionality will be implemented');
    };

    console.log(watch("username")); // watch input value by passing the name of it

    return (
        <div>
            <form className="w-full transition-all duration-300" onSubmit={handleSubmit(onSubmit)}>
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
                        {...register('username', {
                            required: 'Username is required',
                            minLength: {
                                value: 5,
                                message: 'Username must be more than 4 characters long',
                            },
                        })}
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
                        type="number"
                        className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        {...register('mobile', {
                            required: 'Mobile No is required',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Mobile No must be 10 digits',
                            },
                        })}
                    />
                    {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
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
                        {...register('resident')}
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
                    <Controller
                        name="nearestPoliceStation"
                        control={control}
                        defaultValue="APMC"
                        render={({ field }) => (
                            <select
                                id="nearestPoliceStation"
                                className="appearance-none border  w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                {...field}
                            >
                                <option value="APMC">APMC</option>
                                <option value="Vashi">Vashi</option>
                                <option value="Nerul">Nerul</option>
                                <option value="CBD Belapur">CBD Belapur</option>
                            </select>
                        )}
                    />
                </div>
                <div className="mb-4">
                    <div className="flex items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            className="mr-2 leading-tight focus:outline-none"
                            {...register('terms', { required: 'You must agree to the terms and conditions' })}
                        />
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="terms">
                            I agree to all the terms and conditions
                        </label>
                    </div>
                    {errors.terms && <span className="text-red-500 text-sm">{errors.terms.message}</span>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mt-6"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp;
