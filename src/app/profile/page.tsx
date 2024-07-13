import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera, faLocationDot, faHouse, faShuffle, faBars, faPen } from '@fortawesome/free-solid-svg-icons';

const ProfileComponent = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden w-full px-6 py-8">
                <div className="flex flex-col items-center justify-center mb-6">
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
                    <div className="relative">
                        <label
                            htmlFor="username"
                            className="absolute left-3 -top-4 bg-white px-1 text-gray-700 text-sm flex items-center"
                        >
                            Username
                        </label>
                        <div className="border border-gray-300 rounded-md flex items-center">
                            <input
                                id="username"
                                type="text"
                                className="shadow appearance-none border-0 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faPen} className="text-gray-700 w-4 h-4" />
                            </span>
                        </div>
                    </div>
                    {/* Password Input */}
                    <div className="relative mt-4">
                        <label
                            htmlFor="Password"
                            className="absolute left-3 -top-4 bg-white px-1 text-gray-700 text-sm flex items-center"
                        >
                            Password
                        </label>
                        <div className="border border-gray-300 rounded-md flex items-center">
                            <input
                                id="Password"
                                type="text"
                                className="shadow appearance-none border-0 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faPen} className="text-gray-700 w-4 h-4" />
                            </span>
                        </div>
                    </div>
                    {/* First Name Input */}
                    <div className="relative mt-4">
                        <label
                            htmlFor="firstname"
                            className="absolute left-3 -top-4 bg-white px-1 text-gray-700 text-sm flex items-center"
                        >
                            Firstname
                        </label>
                        <div className="border border-gray-300 rounded-md flex items-center">
                            <input
                                id="firstname"
                                type="text"
                                className="shadow appearance-none border-0 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faPen} className="text-gray-700 w-4 h-4" />
                            </span>
                        </div>
                    </div>
                    {/* Last Name Input */}
                    <div className="relative mt-4">
                        <label
                            htmlFor="Lastname"
                            className="absolute left-3 -top-4 bg-white px-1 text-gray-700 text-sm flex items-center"
                        >
                            Lastname
                        </label>
                        <div className="border border-gray-300 rounded-md flex items-center">
                            <input
                                id="Lastname"
                                type="text"
                                className="shadow appearance-none border-0 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faPen} className="text-gray-700 w-4 h-4" />
                            </span>
                        </div>
                    </div>
                    {/* Email ID Input */}
                    <div className="relative mt-4">
                        <label
                            htmlFor="EmailId"
                            className="absolute left-3 -top-4 bg-white px-1 text-gray-700 text-sm flex items-center"
                        >
                            Email ID
                        </label>
                        <div className="border border-gray-300 rounded-md flex items-center">
                            <input
                                id="EmailId"
                                type="text"
                                className="shadow appearance-none border-0 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faPen} className="text-gray-700 w-4 h-4" />
                            </span>
                        </div>
                    </div>
                    {/* Mobile No Input */}
                    <div className="relative mt-4">
                        <label
                            htmlFor="MobileNo"
                            className="absolute left-3 -top-4 bg-white px-1 text-gray-700 text-sm flex items-center"
                        >
                            Mobile No
                        </label>
                        <div className="border border-gray-300 rounded-md flex items-center">
                            <input
                                id="MobileNo"
                                type="text"
                                className="shadow appearance-none border-0 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faPen} className="text-gray-700 w-4 h-4" />
                            </span>
                        </div>
                    </div>
                    {/* Nearest Police Station Select */}
                    <div className="relative mt-4">
                        <label
                            htmlFor="nearestPoliceStation"
                            className="absolute left-3 -top-4 bg-white px-1 text-gray-700 text-sm"
                        >
                            Nearest Police Station
                        </label>
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} className="text-gray-700 w-4 h-4" />
                        </span>
                        <select
                            id="nearestPoliceStation"
                            className="appearance-none border w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        >
                            <option value="APMC">APMC</option>
                            <option value="Vashi">Vashi</option>
                            <option value="Nerul">Nerul</option>
                            <option value="Belapur">Belapur</option>
                        </select>
                    </div>
                    {/* Save Changes Button */}
                    <div className="mt-6">
                        <button
                            className="bg-yellow-500 text-white px-8 py-2 rounded-full shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 w-full"
                        >
                            Save Changes
                        </button>
                    </div>
                    {/* Additional Links */}
                    <div className="flex justify-around mt-6">
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faHouse} className="text-gray-700 w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-sm font-bold">Home</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faShuffle} className="text-gray-700 w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-sm font-bold">Track Request</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faBars} className="text-gray-700 w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-sm font-bold">Menu</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faUser} className="text-gray-700 w-4 h-4" />
                            </div>
                            <span className="text-gray-700 text-sm font-bold">Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
