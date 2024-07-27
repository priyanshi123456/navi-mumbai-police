import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLocationDot, faCar, faCheckCircle, faPaperclip, faCamera, faBook, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
const CommercialForm = () => {
    const [selectedBox, setSelectedBox] = useState(null);
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
        alert("hello")
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
                            {...register('nearestPoliceStation', { required: true })}
                            id="nearestPoliceStation"
                            className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        >
                            <option value="APMC">APMC</option>
                            <option value="Vashi">Vashi</option>
                            <option value="Nerul">Nerul</option>
                            <option value="Belapur">Belapur</option>
                        </select>
                        {errors.nearestPoliceStation && <p className="text-red-500 text-xs">This field is required.</p>}
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="tenantsName"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Tenant's Name
                        </label>
                        <input
                            {...register('tenantsName', { required: true })}
                            id="tenantsName"
                            type="text"
                            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.tenantsName && <p className="text-red-500 text-xs">This field is required.</p>}
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="tenantsContactNo"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Tenant's Contact No
                        </label>
                        <input
                            {...register('tenantsContactNo', { required: true })}
                            id="tenantsContactNo"
                            type="tel"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.tenantsContactNo && <p className="text-red-500 text-xs">This field is required.</p>}
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
                            {...register('permanentAddress', { required: true })}
                            id="permanentAddress"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        />
                        {errors.permanentAddress && <p className="text-red-500 text-xs">This field is required.</p>}
                    </div>
                    <div className="relative mb-4 mt-8">
                        <label
                            htmlFor="previousResidentialAddress"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Previous Residential Address
                        </label>
                        <input
                            {...register('previousResidentialAddress')}
                            id="previousResidentialAddress"
                            type="text"
                            className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
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
                                {...register('leaseStartDate', { required: true })}
                                id="leaseStartDate"
                                type="date"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.leaseStartDate && <p className="text-red-500 text-xs">This field is required.</p>}
                        </div>
                        <div className="relative mb-4 w-1/2">
                            <label
                                htmlFor="leaseEndDate"
                                className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                            >
                                End Date
                            </label>
                            <input
                                {...register('leaseEndDate', { required: true })}
                                id="leaseEndDate"
                                type="date"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.leaseEndDate && <p className="text-red-500 text-xs">This field is required.</p>}
                        </div>
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
                        {...register('landlordName', { required: true })}
                        id="landlordName"
                        type="text"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.landlordName && <p className="text-red-500 text-xs">This field is required.</p>}
                </div>


                <div className="relative mb-4 mt-8">
                    <label
                        htmlFor="landlordAddress"
                        className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                    >
                        Landlord's Address
                    </label>
                    <input
                        {...register('landlordAddress', { required: true })}
                        id="landlordAddress"
                        type="text"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    {errors.landlordAddress && <p className="text-red-500 text-xs">This field is required.</p>}
                </div>

                <div className="relative mb-4 mt-8">
                    <label
                        htmlFor="agreementType"
                        className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                    >
                        Agreement Type
                    </label>
                    <select
                        {...register('agreementType')}
                        id="agreementType"
                        className="appearance-none border w-full py-5 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                    >
                        <option value="fixedTerm">Fixed Term</option>
                        <option value="periodic">Periodic</option>
                        <option value="indefinite">Indefinite</option>
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
                        {...register('brokerName')}
                        id="brokerName"
                        type="text"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                     {errors.brokerName && <p className="text-red-500 text-xs">This field is required.</p>}
                </div>
                <div className="relative mb-4 mt-8">
                    <label
                        htmlFor="brokerContactNo"
                        className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                    >
                        Broker's Contact No
                    </label>
                    <input
                        {...register('brokerContactNo')}
                        id="brokerContactNo"
                        type="tel"
                        className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                      {errors.brokerContactNo && <p className="text-red-500 text-xs">This field is required.</p>}
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



            </form>
        </div>
    );
};

export default CommercialForm;
