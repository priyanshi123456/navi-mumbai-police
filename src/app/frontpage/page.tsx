"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const FrontPage: React.FC = () => {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push('/login-signup');
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-sm">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <Image
          src="/police_img.png" // Path to the image
          alt="Police Image" // Alt text for accessibility
          layout="fill" // This makes the image fill the container
          objectFit="cover" // This applies the object-cover behavior
          className="rounded-lg" // You can also apply custom classes if needed
        />
      </div>

      {/* Centered Logo with Border and Border Radius */}
      <div
        className="relative flex flex-col items-center justify-center h-full cursor-pointer"
        onClick={navigateToDashboard}
      >
        <div className="relative w-32 h-32"> {/* Set size for the logo image */}
          <Image
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Icon"
            layout="intrinsic" // Use intrinsic layout for logo image for better control
            width={128} // Define width for logo
            height={128} // Define height for logo
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Text descriptions */}
        <p className="md:hidden mt-4 text-center font-md text-lg sm:text-xl lg:text-xs text-white">
          Mobile app for Navi Mumbai Police
        </p>
        <p className="hidden md:block mt-4 text-center font-md text-sm sm:text-sm lg:text-xs text-white">
          Mobile app for Navi Mumbai Police (Desktop Version)
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
