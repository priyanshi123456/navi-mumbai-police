import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot, faCar, faCheckCircle, faPaperclip, faCamera, faBook, faFileContract } from '@fortawesome/free-solid-svg-icons';

const CommercialForm = () => {
    const [selectedBox, setSelectedBox] = useState(null);
    const [formState, setFormState] = useState({
        purposeOfbusiness: '',
        nearestPoliceStation: 'APMC', // Default value
        tenantsName: '',
        tenantsContactNo: '',
        permanentAddress: '',
        previousResidentialAddress: '',
        leaseStartDate: '',
        leaseEndDate: '',
        totalFamilyMembers: '',
        landlordName: '',
        landlordAddress: '',
        agreementType: 'fixedTerm', // Default value
        brokerName: '',
        brokerContactNo: ''
    });

    const handleBoxClick = (box: any) => {
        setSelectedBox(box);
    };

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Perform form validation here if needed
        // Example: Check if required fields are filled

        // Example of form submission logic (dummy implementation)
        console.log('Form data:', formState);
        // Reset form after submission
        setFormState({
            purposeOfbusiness: '',
            nearestPoliceStation: 'APMC',
            tenantsName: '',
            tenantsContactNo: '',
            permanentAddress: '',
            previousResidentialAddress: '',
            leaseStartDate: '',
            leaseEndDate: '',
            totalFamilyMembers: '',
            landlordName: '',
            landlordAddress: '',
            agreementType: 'fixedTerm',
            brokerName: '',
            brokerContactNo: ''
        });
        setSelectedBox(null); // Reset selected box state
    };

    return (
        <div>
            <div className="mt-8">
                <p className="text-sm sm:text-lg mt-4 ">
                    <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
                    <span className="font-bold">Form Commercial</span>
                </p>
                <hr className="mt-4" />
            </div>

            <form onSubmit={handleSubmit}>
                <div className="relative mt-8">
                    <div className="relative">
                        <select
                            id="purposeOfStay"
                            className="appearance-none border w-full py-5 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                            value={formState.purposeOfbusiness}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Industries</option>
                            <option value="Employment">Hotel</option>
                            <option value="Education">office building</option>
                            <option value="Education">Multifamily</option>
                            <option value="Education">office space</option>
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
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <select
                            id="nearestPoliceStation"
                            className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.nearestPoliceStation}
                            onChange={handleChange}
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
                            Tenant's Name
                        </label>
                        <input
                            id="tenantsName"
                            type="text"
                            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.tenantsName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="tenantsContactNo"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Tenant's Contact No
                        </label>
                        <input
                            id="tenantsContactNo"
                            type="tel"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.tenantsContactNo}
                            onChange={handleChange}
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
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.permanentAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="previousResidentialAddress"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Previous Residential Address
                        </label>
                        <input
                            id="previousResidentialAddress"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.previousResidentialAddress}
                            onChange={handleChange}
                        />
                    </div>

                    <h4 className="mt-8 mb-4 font-bold">Period of Lease</h4>
                    <div className="flex space-x-4">
                        <div className="relative mb-4 w-1/2">
                            <label
                                htmlFor="leaseStartDate"
                                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                            >
                                Start Date
                            </label>
                            <input
                                id="leaseStartDate"
                                type="date"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                value={formState.leaseStartDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative mb-4 w-1/2">
                            <label
                                htmlFor="leaseEndDate"
                                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                            >
                                End Date
                            </label>
                            <input
                                id="leaseEndDate"
                                type="date"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                value={formState.leaseEndDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>





                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="landlordName"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Landlord's Name
                        </label>
                        <input
                            id="landlordName"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.landlordName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="landlordAddress"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Landlord's Address
                        </label>
                        <input
                            id="landlordAddress"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.landlordAddress}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="agreementType"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Agreement Type
                        </label>
                        <select
                            id="agreementType"
                            className="appearance-none border w-full py-5 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                            value={formState.agreementType}
                            onChange={handleChange}
                        >
                            <option value="fixedTerm">Fixed Term</option>
                            <option value="openEnded">Open Ended</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                    </div>

                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="brokerName"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Broker's Name
                        </label>
                        <input
                            id="brokerName"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.brokerName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="brokerContactNo"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Broker's Contact No
                        </label>
                        <input
                            id="brokerContactNo"
                            type="tel"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            value={formState.brokerContactNo}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative mb-4 mt-8">

                        <div className="flex flex-col gap-4">
                            <div className="text-gray-900 dark:text-gray-100">
                                <div className="flex items-center space-x-2">
                                    <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                                    <h3 className="text-xl font-bold">Assignment</h3>
                                </div>
                                <hr className="border-gray-500 dark:border-gray-400 mt-2" />
                            </div>


                            {/* Upload contract */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Upload contract</span>
                            </div>

                            {/* Latest agreement bills */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Latest agreement bills</span>
                            </div>

                            {/* Owner's Aadhaar card */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Owner's Aadhaar card</span>
                            </div>
                            {/* Tenant's Aadhaar card */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Tenant's Aadhaar card</span>
                            </div>

                            {/* Roommate's Aadhaar card */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Roommate's Aadhaar card</span>
                            </div>

                            {/* Company Employee ID */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Company Employee ID</span>
                            </div>

                            {/* Company Bonafide Certificate */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Company Bonafide Certificate</span>
                            </div>

                            {/* Student ID Card */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Student ID Card</span>
                            </div>

                            {/* Photographs of owner */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Photographs of owner </span>
                            </div>

                            {/* Photographs of tenants */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Photographs of tenants </span>
                            </div>

                            {/* Signature of owner */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faCamera} className="h-4 w-8" />

                                <span className="ml-2">Signature of owner</span>
                            </div>

                            {/* Signature of tenant */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Signature of tenant</span>
                            </div>


                            {/* Photographs of owner and tenant */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faCamera} className="h-4 w-8" />
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Photographs of owner </span>
                            </div>
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faCamera} className="h-4 w-8" />
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Photographs of tenants </span>
                            </div>
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faCamera} className="h-4 w-8" />
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Photographs of roomate </span>
                            </div>

                            {/* Signature of owner */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faCamera} className="h-4 w-8" />
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Signature of owner</span>
                            </div>

                            {/* Signature of tenant */}
                            <div className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                <FontAwesomeIcon icon={faCamera} className="h-4 w-8" />
                                <FontAwesomeIcon icon={faFileContract} className="h-4 w-8" />
                                <span className="ml-2">Signature of tenant</span>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-center mt-8 mb-32">
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4"
                        >
                            Submit
                        </button>
                    </div>


                </div>
            </form>
        </div>
    );
};

export default CommercialForm;
