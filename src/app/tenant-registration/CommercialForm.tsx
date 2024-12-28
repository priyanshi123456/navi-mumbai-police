import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot, faCar, faCheckCircle, faPaperclip, faCamera, faBook, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Dropdown from '@/components/Dropdown';
const CommercialForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
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
        }
    });

    const onSubmit = (data: any) => {
        alert("form submitted")
        console.log('Form data:', data);
        reset(); // Reset form after submission
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
                <p className="text-sm sm:text-lg mt-4 ">
                    <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
                    <span className="font-bold">Form Commercial</span>
                </p>
                <hr className="mt-4" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mt-8">
                    <div className="relative">
                        <select
                            {...register('purposeOfbusiness', { required: true })}
                            id="purposeOfbusiness"
                            className="appearance-none border w-full py-5 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                        >
                            <option value="" disabled>Industries</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Office Building">Office Building</option>
                            <option value="Multifamily">Multifamily</option>
                            <option value="Office Space">Office Space</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                    </div>
                    <Dropdown
                        label="Nearest Police Station"
                        options={["APMC", "Vashi", "Nerul", "Belapur"]}
                        register={register}
                        name="nearestPoliceStation"
                        required={true}
                    />

                    <div className="relative mb-4 mt-6">
                        <label htmlFor="tenantsName" className="block text-md font-bold leading-6 text-gray-900">
                            Tenants Name
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('tenantsName', { required: "tenant name is required" })}
                                id="tenantsName"
                                type="text"
                                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.tenantsName && <p className="text-red-500 text-sm">{errors.tenantsName.message}</p>}
                        </div>
                    </div>
                    <div className="relative mb-4 mt-6">
                        <label htmlFor="tenantsContactNo" className="block text-md font-bold leading-6 text-gray-900">
                            Tenants Contact No
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('tenantsContactNo', { required: "tenant contact's name is required" })}
                                id="tenantsContactNo"
                                type="tel"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.tenantsContactNo && <p className="text-red-500 text-sm">{errors.tenantsContactNo.message}</p>}
                        </div>
                    </div>

                    <div className="relative mb-4 mt-6">
                        <label htmlFor="permanentAddress" className="block text-md font-bold leading-6 text-gray-900">
                            Permanent Address
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('permanentAddress', { required: "Permanent address is required" })}
                                type="text"
                                id="permanentAddress"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.permanentAddress && <p className="text-red-500 text-sm">{errors.permanentAddress.message}</p>}
                        </div>
                    </div>

                    <div className="relative mb-4 mt-6">
                        <label htmlFor="previousResidentialAddress" className="block text-md font-bold leading-6 text-gray-900">
                            Previous Residential Address
                        </label>
                        <div className="mt-2">
                            <input
                                {...register('previousResidentialAddress', { required: "previous residential address address is required" })}
                                id="previousResidentialAddress"
                                type="text"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.previousResidentialAddress && <p className="text-red-500 text-sm">{errors.previousResidentialAddress.message}</p>}
                        </div>
                    </div>
                    <h4 className="mt-8 mb-4 font-bold text-xl leading-7">Period of Lease</h4>
                    <div className="flex space-x-4">
                        <div className="relative mb-4 w-1/2">
                            <label htmlFor="leaseStartDate" className="block text-md font-bold leading-6 text-gray-900">
                                Start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('leaseStartDate', { required: "lease Start Date address is required" })}
                                    id="leaseStartDate"
                                    type="date"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                                {errors.leaseStartDate && <p className="text-red-500 text-sm">{errors.leaseStartDate.message}</p>}
                            </div>
                        </div>
                        <div className="relative mb-4 w-1/2">
                            <label htmlFor="leaseEndDate" className="block text-md font-bold leading-6 text-gray-900">
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('leaseEndDate', { required: "lease End Date address is required" })}
                                    id="leaseEndDate"
                                    type="date"
                                    className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                                />
                                {errors.leaseEndDate && <p className="text-red-500 text-sm">{errors.leaseEndDate.message}</p>}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative mb-4 mt-6">
                    <label htmlFor="landlordName" className="block text-md font-bold leading-6 text-gray-900">
                        Landlord Name
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('landlordName', { required: "landlordName address is required" })}
                            id="landlordName"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.landlordName && <p className="text-red-500 text-sm">{errors.landlordName.message}</p>}
                    </div>
                </div>
                <div className="relative mb-4 mt-6">
                    <label htmlFor="landlordAddress" className="block text-md font-bold leading-6 text-gray-900">
                        Landlord Address
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('landlordAddress', { required: "landlord Address address is required" })}
                            id="landlordAddress"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.landlordAddress && <p className="text-red-500 text-sm">{errors.landlordAddress.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4 mt-6">
                    <label
                        htmlFor="agreementType"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Agreement Type
                    </label>
                    <div className="mt-2">
                        <select
                            {...register('agreementType', { required: "agreementType address is required" })}
                            id="agreementType"
                            className="appearance-none shadow border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
                        >
                            <option value="fixedTerm">Fixed Term</option>
                            <option value="periodic">Periodic</option>
                            <option value="indefinite">Indefinite</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                        </div>
                        {errors.agreementType && <p className="text-red-500 text-sm">{errors.agreementType.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4 mt-6">
                    <label
                        htmlFor="brokerName"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Brokers Name
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('brokerName', { required: "broker Name address is required" })}
                            id="brokerName"
                            type="text"
                            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.brokerName && <p className="text-red-500 text-sm">{errors.brokerName.message}</p>}
                    </div>
                </div>

                <div className="relative mb-4 mt-6">
                    <label
                        htmlFor="brokerContactNo"
                        className="block text-md font-bold leading-6 text-gray-900"
                    >
                        Brokers Contact No
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('brokerContactNo', { required: "broker Contact No address is required" })}
                            id="brokerContactNo"
                            type="tel"
                            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.brokerContactNo && <p className="text-red-500 text-sm">{errors.brokerContactNo.message}</p>}
                    </div>
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
                        className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto sm:mb-32 mb-20"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommercialForm;
