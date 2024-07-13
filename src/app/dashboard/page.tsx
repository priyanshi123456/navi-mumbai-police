"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGears, faHouse, faShuffle, faChartColumn, faBars } from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
    const router = useRouter();

    const handleLoginSignupClick = () => {
        router.push('/login-signup'); // Adjust the path to your login/signup component
    };

    const handleTenantRegistrationClick = () => {
        router.push('/tenant-registration');
    };

    return (
        <div className="min-h-screen sm:px-8">
            {/* Logo Section */}
            <header className="w-full flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
                {/* Logo and Welcome Text */}
                <div className="flex items-center">
                    <img src="/logo.jpeg" alt="Police Logo" className="w-12 h-12 mr-2" />
                    <div>
                        <h1 className="text-sm sm:text-base">Welcome to,</h1>
                        <h2 className="text-sm sm:text-base font-bold">Navi Mumbai Police App</h2>
                    </div>
                </div>

                {/* Login and Signup Section */}
                <div className="flex items-center mt-2 sm:mt-0 sm:hidden p-2 cursor-pointer" onClick={handleLoginSignupClick}>
                    <p className="text-xs sm:text-md m-0">Login/Sign up</p>
                    <FontAwesomeIcon icon={faUser} className="h-2 w-2 sm:h-3 sm:w-3 ml-1 sm:ml-2" />
                </div>

                {/* Desktop Version */}
                <div className="hidden sm:flex items-center mt-2 sm:mt-0 p-2 cursor-pointer" onClick={handleLoginSignupClick}>
                    <p className="text-sm sm:text-base font-semibold m-0">Login/Sign up</p>
                    <FontAwesomeIcon icon={faUser} className="h-2 w-2 sm:h-3 sm:w-3 ml-1 sm:ml-2" />
                </div>
            </header>

            {/* Services Section */}
            <div className="mt-2 md:mt-8 lg:mt-8 mx-auto p-2 md:p-3 rounded-full flex items-center max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-2xl" style={{ backgroundColor: '#FFDF00', marginTop: '40px' }}>
                <FontAwesomeIcon icon={faGears} className="h-3 w-4 sm:h-5 sm:w-5 ml-3 sm:ml-4 md:ml-6" />
                <h2 className="text-base sm:text-lg font-bold ml-1 sm:ml-3">Services</h2>
            </div>

            {/* Grid Section */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/8e/61/18/8e61188ccca61fd6ebf4f17fe7384a33.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Phone Lost</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer" onClick={handleTenantRegistrationClick}>
                    <img src="https://i.pinimg.com/564x/99/d5/d6/99d5d641adba95c6f5203c4cb9abc60a.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Tenant Intimation</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/22/f5/d4/22f5d43ac5de324837fb6018d35f0bb0.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Occasion Permission</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/b1/7c/e2/b17ce25a82484b00c4c66a840abd9cde.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Reporting</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/236x/6a/99/8a/6a998ac647c7b8d917839514ad3377a0.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Lost and Found</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/8e/61/18/8e61188ccca61fd6ebf4f17fe7384a33.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Cyber Awareness</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/b7/2e/7c/b72e7c1440a5e3b55fb07a269176fec6.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Quick Links</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/44/ab/70/44ab7074255f48d58f8f11e69ae0bb30.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Phc Contact Info</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/44/ab/70/44ab7074255f48d58f8f11e69ae0bb30.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Pcc Overseas Employment</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/8e/61/18/8e61188ccca61fd6ebf4f17fe7384a33.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Pcc Domestic (General)</span>
                </div>
            </div>


            {/* Menu Section */}
            <div className="bg-gray-100 flex items-center justify-center sm:hidden">
                <div className="flex justify-around w-full p-4 rounded-md bg-blue-50">
                    <div className="flex flex-col items-center">
                        <div className="mb-2">
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <span className="text-gray-700 text-sm font-bold">Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-2">
                            <FontAwesomeIcon icon={faShuffle} />
                        </div>
                        <span className="text-gray-700 text-sm font-bold">Track Request</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-2">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <span className="text-gray-700 text-sm font-bold">Menu</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
