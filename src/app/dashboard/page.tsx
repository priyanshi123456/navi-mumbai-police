"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Dashboard: React.FC = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        const authData = localStorage.getItem('username');
        if (authData) {
            setIsLogin(true);
            setUsername(authData);
        }
    }, []);

    const handleNavigation = (path: string) => {
        if (isLogin) {
            router.push(path);
        } else {
            console.log("You must be logged in to access this section.");
        }
    };

    const handleTenantOccaionperClick = () => handleNavigation('/occasion-permission');
    const handlephcContactClick = () => handleNavigation('/phc-contact-info');
    const handlefoundlost = () => handleNavigation('/foundlost');
    const handleTenantRegistrationClick = () => handleNavigation('/tenant-registration');
    const handleMobilePhoneClick = () => handleNavigation('/mobilelost');

    const items = [
        { id: 1, imgSrc: "https://cdn-icons-png.freepik.com/256/1781/1781490.png?semt=ais_hybrid", text: "Phone Lost", onClick: handleMobilePhoneClick },
        { id: 2, imgSrc: "https://cdn-icons-png.freepik.com/256/7679/7679843.png?semt=ais_hybrid", text: "Tenant Intimation", onClick: handleTenantRegistrationClick },
        { id: 3, imgSrc: "https://cdn-icons-png.freepik.com/256/14380/14380643.png?semt=ais_hybrid", text: "Occasion Permission", onClick: handleTenantOccaionperClick },
        { id: 4, imgSrc: "https://cdn-icons-png.freepik.com/256/1055/1055644.png?semt=ais_hybrid", text: "Reporting" },
        { id: 5, imgSrc: "https://cdn-icons-png.freepik.com/256/1329/1329041.png?semt=ais_hybrid", text: "Lost and Found", onClick: handlefoundlost },
        { id: 6, imgSrc: "https://cdn-icons-png.freepik.com/256/7572/7572613.png?semt=ais_hybrid", text: "Cyber Awareness" },
        { id: 7, imgSrc: "https://cdn-icons-png.freepik.com/256/3881/3881318.png?semt=ais_hybrid", text: "Quick Links" },
        { id: 8, imgSrc: "https://cdn-icons-png.freepik.com/256/3649/3649505.png?semt=ais_hybrid", text: "Phc Contact Info", onClick: handlephcContactClick },
        { id: 9, imgSrc: "https://cdn-icons-png.freepik.com/256/773/773818.png?semt=ais_hybrid", text: "Pcc Overseas Employment" },
        { id: 10, imgSrc: "https://cdn-icons-png.freepik.com/256/2980/2980855.png?semt=ais_hybrid", text: "Pcc Domestic (General)" },
    ];

    return (
        <div className=" from-gray-100 via-gray-200 to-gray-300 min-h-screen">
            <Header />
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 lg:p-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center h-36 cursor-pointer hover:bg-gray-50 border border-gray-200"
                        onClick={item.onClick}
                    >
                     <Image
          src={item.imgSrc}  // Source for the image
          alt="Icon"
          layout="fill"  // Fills the container
          objectFit="cover"  // Ensures the image covers the container without distortion
          className="rounded-full"
        />
                        <span className="text-base sm:text-lg font-semibold text-gray-800 text-center" dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                ))}
            </div>


            {/* Mobile Menu Component */}
            {/* <div className="sm:hidden">
                <MobileMenu isLogin={isLogin} />
            </div> */}
        </div>
    );
};

export default Dashboard;
