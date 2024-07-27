import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot, faCar, faCheckCircle, faPaperclip, faFileContract, faBook, faCamera } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller } from 'react-hook-form'
type Inputs = {
    purposeOfStay: string;
    tenantsName: string;
    leaseStartDate: string;
    email?: string;
    tenantsContactNo?: string;
    nearestPoliceStation: string;
    permanentAddress: string;
    landlordName: string;
    brokerName: string;
    leaseEndDate: string;
    terms: boolean;
    agreement: string;
    resident: boolean;
    totalFamilyMembers: number;
    previousResidentialAddress: string;
    brokerContactNo: string;
    agreementType: string;
    landlordAddress: any;
};

const ResidentialForm = () => {
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm<Inputs>();
    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (box: any) => {
        setSelectedBox(box);
    };

    const onSubmit = (data: any) => {
        alert("Form is Submitted")
        console.log('Form data:', data);
        setSelectedBox(null); // Reset selected box state
    };
    const fileInputIds = [
        "upload-contract",
        "latest-agreement-bills",
        "owner-aadhaar",
        "tenant-aadhaar",
        "roommate-aadhaar",
        "employee-id",
        "bonafide-certificate",
        "student-id",
        "owner-photos",
        "tenant-photos",
        "owner-signature",
        "tenant-signature",
        "owner-tenant-photos",
        "roommate-photos",
    ];

    const fileLabels = [
        "Upload contract",
        "Latest agreement bills",
        "Owner's Aadhaar card",
        "Tenant's Aadhaar card",
        "Roommate's Aadhaar card",
        "Company Employee ID",
        "Company Bonafide Certificate",
        "Student ID Card",
        "Photographs of owner",
        "Photographs of tenants",
        "Signature of owner",
        "Signature of tenant",
        "Photographs of owner and tenant",
        "Photographs of roommate",
    ];
    return (
        <div>
            <div className="mt-8">
                <p className="text-sm sm:text-lg mt-4">
                    <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
                    <span className='font-bold'>Form Residential</span> (only filled by the owner)
                </p>
                <hr className='mt-4' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mt-8">
                    <div className="relative">
                        <select
                            {...register("purposeOfStay", { required: "Purpose of stay is required" })}
                            className="appearance-none border w-full py-5 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                        >
                            <option value="" disabled>Select Purpose of stay</option>
                            <option value="Employment">Employment</option>
                            <option value="Education">Education</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                        {errors.purposeOfStay && <p className="text-red-500 text-sm">{errors.purposeOfStay.message}</p>}
                    </div>
                    <div className="mb-8 flex items-center relative mt-8">
                        <label htmlFor="nearestPoliceStation" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Nearest Police Station
                        </label>
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <select
                            {...register("nearestPoliceStation")}
                            className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        >
                            <option value="APMC">APMC</option>
                            <option value="Vashi">Vashi</option>
                            <option value="Nerul">Nerul</option>
                            <option value="Belapur">Belapur</option>
                        </select>
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="tenantsName" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Tenant's Name
                        </label>
                        <input
                            {...register("tenantsName", { required: "Tenant's name is required" })}
                            type="text"
                            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.tenantsName && <p className="text-red-500 text-sm">{errors.tenantsName.message}</p>}
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="tenantsContactNo" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Tenant's Contact No
                        </label>
                        <input
                            {...register("tenantsContactNo", {
                                required: "Tenant's contact number is required",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Invalid contact number"
                                }
                            })}
                            type="tel"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.tenantsContactNo && <p className="text-red-500 text-sm">{errors.tenantsContactNo.message}</p>}
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="permanentAddress" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            <span className="text-red-500 mr-1">*</span>
                            Permanent Address
                        </label>
                        <input
                            {...register("permanentAddress", { required: "Permanent address is required" })}
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.permanentAddress && <p className="text-red-500 text-sm">{errors.permanentAddress.message}</p>}
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="previousResidentialAddress" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Previous Residential Address
                        </label>
                        <input
                            {...register("previousResidentialAddress")}
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                    </div>

                    <h4 className="mt-8 mb-4 font-bold">Period of Lease</h4>
                    <div className="flex space-x-4">
                        <div className="relative mb-4 w-1/2">
                            <label htmlFor="leaseStartDate" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                                Start Date
                            </label>
                            <input
                                {...register("leaseStartDate", { required: "Lease start date is required" })}
                                type="date"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.leaseStartDate && <p className="text-red-500 text-sm">{errors.leaseStartDate.message}</p>}
                        </div>
                        <div className="relative mb-4 w-1/2">
                            <label htmlFor="leaseEndDate" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                                End Date
                            </label>
                            <input
                                {...register("leaseEndDate", { required: "Lease end date is required" })}
                                type="date"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.leaseEndDate && <p className="text-red-500 text-sm">{errors.leaseEndDate.message}</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center space-x-4 mt-8">
                        {['Family', 'Sharing', 'Bachelors'].map((box, index) => (
                            <div
                                key={index}
                                className={`w-32 border border-gray-300 rounded-2xl p-4 flex items-center justify-between cursor-pointer sm:w-auto ${index === 2 ? 'mt-4 sm:mt-0' : ''}`}
                                style={{ maxWidth: '10rem' }} // Adjust max-width as needed
                                onClick={() => handleBoxClick(box)}
                            >
                                <span className="text-sm mr-2">{box}</span>
                                <FontAwesomeIcon
                                    icon={selectedBox === box ? faCheckCircle : faCar}
                                    className="text-gray-700 h-5 w-5 sm:h-6 sm:w-6"
                                />
                            </div>
                        ))}
                    </div>
                    {selectedBox === 'Family' && (
                        <div className="mt-8">
                            <div className="relative mb-4">
                                <label htmlFor="totalFamilyMembers" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                                    Total Family Members
                                </label>
                                <input
                                    {...register("totalFamilyMembers", { required: "Total family members is required" })}
                                    type="number"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                                {errors.totalFamilyMembers && <p className="text-red-500 text-sm">{errors.totalFamilyMembers.message}</p>}
                            </div>
                       </div>
                    )}
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
                            {...register("landlordName", { required: "Landlord's Name is required" })}
                        />
                        {errors.landlordName && <span className="text-red-500 text-sm">{errors.landlordName.message}</span>}
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
                            {...register("landlordAddress", { required: "Landlord's Address is required" })}
                        />
                        {errors.landlordAddress && typeof errors.landlordAddress.message === 'string' && (
                            <span className="text-red-500 text-sm">{errors.landlordAddress.message}</span>
                        )}
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
                            {...register("agreementType", { required: "Agreement Type is required" })}
                        >
                            <option value="fixedTerm">Fixed Term</option>
                            <option value="openEnded">Open Ended</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                        {errors.agreementType && <span className="text-red-500 text-sm">{errors.agreementType.message}</span>}
                    </div>

                    <div className="relative mb-4 mt-8">
                        <label htmlFor="brokerName" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"> Broker's Name </label>
                        <input
                            id="brokerName"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            {...register("brokerName", {
                                required: "Broker's name is required",
                                minLength: { value: 3, message: "Broker's name must be at least 3 characters" }
                            })}
                        />
                        {errors.brokerName && <p className="text-red-500 text-sm">{errors.brokerName.message}</p>}
                    </div>

                    <div className="relative mb-4 mt-8">
                        <label htmlFor="brokerContactNo" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"> Broker's Contact No </label>
                        <input
                            id="brokerContactNo"
                            type="tel"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            {...register("brokerContactNo", {
                                required: "Broker's contact number is required",
                                pattern: { value: /^[0-9]+$/, message: "Invalid contact number" }
                            })}
                        />
                        {errors.brokerContactNo && <p className="text-red-500 text-sm">{errors.brokerContactNo.message}</p>}
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
                            {fileInputIds.map((id, index) => (
                                <div key={id} className="flex items-center py-3 px-3 bg-white text-gray-700 rounded-lg shadow-md">
                                    <input type="file" id={id} className="hidden" />
                                    <FontAwesomeIcon
                                        icon={faFileContract}
                                        className="h-4 w-8 mr-2 cursor-pointer"
                                        onClick={() => document.getElementById(id)?.click()}
                                    />
                                    {index >= fileInputIds.length - 4 && (
                                        <FontAwesomeIcon
                                            icon={faCamera}
                                            className="h-4 w-8 mr-2 cursor-pointer"
                                            onClick={() => document.getElementById(id)?.click()}
                                        />
                                    )}
                                    <span className="ml-2">{fileLabels[index]}</span>
                                </div>
                            ))}
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

export default ResidentialForm;
