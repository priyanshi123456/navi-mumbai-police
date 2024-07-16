"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGears, faHouse, faShuffle, faChartColumn, faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '@/components/MobileMenu';
const Dashboard: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isLogin = searchParams.get('isLogin') === 'true';
    const username = searchParams.get('username');

    console.log(isLogin)
    console.log(username)

    const handleNavigation = (path: string) => {
        if (isLogin) {
            router.push(path);
        } else {
            console.log("You must be logged in to access this section.");
            // Optionally, show a notification or redirect to a login page
        }
    };
    
    const handleLoginSignupClick =()=>{
        router.push("./login-signup")
    }
    const handleTenantOccaionperClick = () => handleNavigation('/occasion-permission');
    const handlephcContactClick = () => handleNavigation('/phc-contact-info');
    const handlefoundlost = () => handleNavigation('/foundlost');
    const handleTenantRegistrationClick = () => handleNavigation('/tenant-registration');
    
    return (
        <div className="min-h-screen sm:px-8">
            {/* Logo Section */}
            <header className="w-full flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
                {/* Logo and Welcome Text */}
                <div className="flex items-center">
                    <img src="/logo.jpeg" alt="Police Logo" className="w-12 h-12 mr-2" />
                    {
                        isLogin ? (
                            <div>
                                <h1 className="text-sm sm:text-base">Welcome</h1>

                                <h2 className="text-sm sm:text-base">Hello, {username}</h2>
                            </div>
                        ) : (
                            <div>
                                <h1 className="text-sm sm:text-base">Welcome to,</h1>
                                <h2 className="text-sm sm:text-base font-bold">Navi Mumbai Police App</h2>
                            </div>

                        )
                    }

                </div>
                {isLogin ? (
                    /* Desktop Version Header Items */
                    <div className="hidden sm:flex items-center justify-between mt-2 p-2">
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faHouse} />
                            <FontAwesomeIcon icon={faShuffle} />
                            <FontAwesomeIcon icon={faBars} />
                            <a href="/profile" className="text-sm sm:text-base font-semibold px-3 py-2 rounded hover:bg-gray-200">Profile</a>
                        </div>
                        {/* Optionally add more icons or components here */}

                    </div>) : (
                    /* Login/Signup Section for Mobile */
                    <div
                        className={`flex items-center mt-2 sm:mt-0 ${isLogin ? 'hidden' : 'sm:flex'} p-2 cursor-pointer  rounded-lg hover:bg-gray-100 transition duration-200`}
                        onClick={handleLoginSignupClick}
                    >
                        <p className="text-base sm:text-md m-0 text-gray-700 font-medium sm:text-lg">Login/Sign up</p>
                        <FontAwesomeIcon icon={faUser} className="h-4 w-4 sm:h-5 sm:w-5 ml-2 text-gray-700" />
                    </div>

                )}

            </header>

            {/* Services Section */}
            <div className={`mt-10 md:mt-20 lg:mt-8 mx-auto p-2 md:p-3 rounded-full flex items-center max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-2xl ${isLogin ? 'bg-blue-50' : 'bg-yellow-400'}`}>
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
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer" onClick={handleTenantOccaionperClick}>
                    <img src="https://i.pinimg.com/564x/22/f5/d4/22f5d43ac5de324837fb6018d35f0bb0.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Occasion Permission</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/b1/7c/e2/b17ce25a82484b00c4c66a840abd9cde.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Reporting</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer" onClick={handlefoundlost}>
                    <img src="https://i.pinimg.com/236x/6a/99/8a/6a998ac647c7b8d917839514ad3377a0.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-4 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Lost and <br/> Found</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/8e/61/18/8e61188ccca61fd6ebf4f17fe7384a33.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Cyber Awareness</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/b7/2e/7c/b72e7c1440a5e3b55fb07a269176fec6.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Quick Links</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer" onClick={handlephcContactClick}>
                    <img src="https://i.pinimg.com/564x/44/ab/70/44ab7074255f48d58f8f11e69ae0bb30.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Phc Contact Info</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/44/ab/70/44ab7074255f48d58f8f11e69ae0bb30.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Pcc Overseas<br/> Employment</span>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 flex items-center justify-center h-28 sm:h-36 cursor-pointer">
                    <img src="https://i.pinimg.com/564x/8e/61/18/8e61188ccca61fd6ebf4f17fe7384a33.jpg" alt="Icon" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-2 sm:mr-4" />
                    <span className="text-sm sm:text-lg font-semibold">Pcc Domestic (General)</span>
                </div>
            </div>
            {/* Mobile Menu Component */}
            <div className="sm:hidden">
                <MobileMenu isLogin={isLogin} />
            </div>
        </div>
    );
};

export default Dashboard;
