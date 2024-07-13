import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const InfoPanel = () => {
    return (
        <div className="mx-auto max-w-screen-lg px-4 md:px-0"> {/* Added padding for mobile */}
            <div className="info flex items-center h-12 w-semifull bg-gray-100 rounded-3xl mt-8">
                <div className="infologo">
                    <img
                        src="https://i.pinimg.com/564x/99/d5/d6/99d5d641adba95c6f5203c4cb9abc60a.jpg"
                        alt="logo"
                        className="h-12 w-[63px] rounded-l-full"
                    />
                </div>
                <p className="text-lg text-purple-800 font-bold pl-2">Tenant Registration</p>
                <i className="fas fa-angle-left pl-20 text-gray-400"></i>
            </div>

            <div className="relative mt-8">
                <div className="relative">
                    <select
                        id="propertyType"
                        className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                    >
                        <option value="" disabled selected>Select Property Type</option>
                        <option value="Residential" className='py-6'>Residential</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-8">
            <p className="text-sm sm:text-lg mt-4"><span className='font-bold'>Form Residential</span> (only filled by the owner)</p>
            <hr className='mt-4'/>
        </div>
            <div className="relative mt-8">
                <div className="relative">
                    <select
                        id="purposeOfStay"
                        className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                    >
                        <option value="" disabled selected>Purpose of stay</option>
                        <option className='py-6'>Employment</option>
                        <option>Education</option>
                        <option>Employment</option>
                        <option>Education</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                    </div>
                 
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
                        className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    >
                        <option value="APMC">APMC</option>
                        <option value="Vashi">Vashi</option>
                        <option value="Nerul">Nerul</option>
                        <option value="Belapur">Belapur</option>
                    </select>
                </div>
                <div className="relative mb-4 mt-8">
                    <label
                        htmlFor="tenantsName"
                        className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                    >
                        <span className="text-red-500 mr-1">*</span>
                        Tenant's Name
                    </label>
                    <input
                        id="tenantsName"
                        type="text"
                        className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                </div>
                <div className="relative mb-4 mt-8">
                    <label
                        htmlFor="tenantsContactNo"
                        className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                    >
                        <span className="text-red-500 mr-1">*</span>
                        Tenant's Contact No
                    </label>
                    <input
                        id="tenantsContactNo"
                        type="tel"
                        className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                </div>
                <div className="relative mb-4 mt-8">
                    <label
                        htmlFor="permanentAddress"
                        className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                    >
                        <span className="text-red-500 mr-1">*</span>
                        Permanent Address
                    </label>
                    <input
                        id="permanentAddress"
                        type="text"
                        className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                </div>
                <div className="relative mb-4 mt-8">
                    <label
                        htmlFor="previousResidentialAddress"
                        className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                    >
                        <span className="text-red-500 mr-1">*</span>
                        Previous Residential Address
                    </label>
                    <input
                        id="previousResidentialAddress"
                        type="text"
                        className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoPanel;
