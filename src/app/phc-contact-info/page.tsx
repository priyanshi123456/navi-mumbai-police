"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot, faShareAlt, faUser, faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const InfoPanel = () => {


    return (
        <div className="mx-auto max-w-screen-lg px-4 md:px-0"> {/* Added padding for mobile */}
            <div className="info flex items-center h-12 w-semifull bg-gray-100 rounded-3xl mt-8">
                <div className="infologo">
                    <img
                        src="https://i.pinimg.com/564x/44/ab/70/44ab7074255f48d58f8f11e69ae0bb30.jpg"
                        alt="logo"
                        className="h-12 w-[63px] rounded-l-full"
                    />
                </div>
                <p className="text-lg text-purple-800 font-bold pl-2">Phc Contact Info</p>
                <i className="fas fa-angle-left pl-20 text-blue-800"></i>
            </div>
            <div className="flex justify-between items-center mt-8">
                <div className="flex items-center">
                    <div className="dot bg-blue-500"></div>
                    <p className="text-blue-600 ml-2 font-bold">Police Station</p>
                </div>
                <div className="flex items-center">
                    <div className="dot bg-blue-500"></div>
                    <p className="ml-2 font-bold">ACP</p>
                </div>
                <div className="flex items-center">
                    <div className="dot bg-blue-500"></div>
                    <p className="ml-2 font-bold">DCP</p>
                </div>
                <div className="flex items-center">
                    <div className="dot bg-blue-500"></div>
                    <p className="ml-2 font-bold">CP</p>
                </div>
            </div>
            <hr className='mt-6' />
            <div className="mb-8 flex items-center relative mt-8">
                <label

                    className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                >
                    Select Police Station
                </label>
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <select
                    id="nearestPoliceStation"
                    className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"

                >
                    <option value="APMC">Kalambolo</option>
                    <option value="Vashi">Belanpur</option>
                    <option value="Nerul">APOMC</option>
                    <option value="Belapur">LKHANDESHWAR</option>
                </select>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-right font-semibold text-lg text-gray-800">Contact Info</span>
                    <FontAwesomeIcon icon={faShareAlt} className="text-gray-600" />
                </div>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">Rajendra Kadam</span>
                </div>
                <div className="flex items-start mb-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">Sector 02 near fire brigade , Mumbra Road,Kolomboli</span>
                </div>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faMobileAlt} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">27838963</span>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">email@mahapolice.gov.in</span>
                </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-right font-semibold text-lg text-gray-800">Cyber Police</span>
                    <FontAwesomeIcon icon={faShareAlt} className="text-gray-600 text-xl" />
                </div>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">Gajanand Kadam</span>
                </div>
                <div className="flex items-start mb-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">Sawali Bldg 1st floor , sector 5,near Dy patil Hospital , Navi Mumbai</span>
                </div>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faMobileAlt} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">27578309</span>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-3 text-xl" />
                    <span className="text-gray-800 text-lg">email@mahapolice.gov.in</span>
                </div>
            </div>











        </div>
    );
};

export default InfoPanel;
