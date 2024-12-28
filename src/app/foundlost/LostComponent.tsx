import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCamera, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import LostOthers from './LostOthers';
import Image from 'next/image';

type FormValues = {
    vehicleType: string;
    make: string;
    model: string;
    year: number;
    color: string;
    licensePlateNo: string;
    location: string;
    tenantsName: string;
};

const LostComponent: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>();
    const [showVehicleForm, setShowVehicleForm] = useState(false);
    const [showOthersForm, setShowOthersForm] = useState(false);
    const [photos, setPhotos] = useState<File[]>([]);
    const [rcBookCopy, setRcBookCopy] = useState<File | null>(null);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    const handleVehicleSelect = (value: string) => {
        setValue('vehicleType', value);
        setShowVehicleForm(value === 'Vehicle');
        setShowOthersForm(value === 'others');
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPhotos([...photos, ...Array.from(e.target.files)]);
        }
    };

    const handleRcBookUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setRcBookCopy(e.target.files[0]);
        }
    };

    return (
        <div className="mx-auto max-w-screen-lg px-4 md:px-0">
            <div className="relative mt-8">
                <div className="relative">
                    <select
                        id="vehicleType"
                        className="appearance-none border w-full py-5 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow"
                        defaultValue=""
                        onChange={(e) => handleVehicleSelect(e.target.value)}
                    >
                        <option value="" disabled>Select Vehicle Type...</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="others">others</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
                    </div>
                </div>
            </div>

            {showVehicleForm && (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    {/* Select Vehicle Type */}
                    <div className="mb-8 flex items-center relative mt-8">
                        <label
                            htmlFor="nearestPoliceStation"
                            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
                        >
                            Select Vehicle..
                        </label>
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <select
                            id="nearestPoliceStation"
                            className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        >
                            <option value="4 vehicle Car">4 vehicle Car</option>
                            <option value="4 vehicle (Temp/Truck)">4 vehicle (Temp/Truck)</option>
                            <option value="3 vehicle">3 vehicle (Auto)</option>
                            <option value="2 vehicle">2 vehicle(Motorcycle)</option>
                        </select>
                    </div>

                    {/* Make & Manufacturer */}
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="make" className="block text-md font-bold leading-6 text-gray-900">
                            Make & Manufacturer
                        </label>
                        <div className="mt-2">
                            <input
                                id="make"
                                type="text"
                                {...register('make', { required: true })}
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.make && (
                                <p className="text-red-500 text-sm">Make is required</p>
                            )}
                        </div>
                    </div>

                    {/* Model */}
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="model" className="block text-md font-bold leading-6 text-gray-900">
                            Model
                        </label>
                        <div className="mt-2">
                            <input
                                id="model"
                                type="text"
                                {...register('model', { required: true })}
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.model && (
                                <p className="text-red-500 text-sm">Model is required</p>
                            )}
                        </div>
                    </div>

                    {/* Year */}
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="year" className="block text-md font-bold leading-6 text-gray-900">
                            Year
                        </label>
                        <div className="mt-2">
                            <input
                                id="year"
                                type="number"
                                {...register('year', { required: true })}
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.year && (
                                <p className="text-red-500 text-sm">Year is required</p>
                            )}
                        </div>
                    </div>

                    {/* Color */}
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="color" className="block text-md font-bold leading-6 text-gray-900">
                            Color
                        </label>
                        <div className="mt-2">
                            <input
                                id="color"
                                type="text"
                                {...register('color', { required: true })}
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.color && (
                                <p className="text-red-500 text-sm">Color is required</p>
                            )}
                        </div>
                    </div>

                    {/* License Plate Number */}
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="licensePlateNo" className="block text-md font-bold leading-6 text-gray-900">
                            License Plate No
                        </label>
                        <div className="mt-2">
                            <input
                                id="licensePlateNo"
                                type="text"
                                {...register('licensePlateNo', { required: true })}
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.licensePlateNo && (
                                <p className="text-red-500 text-sm">License Plate No is required</p>
                            )}
                        </div>
                    </div>

                    {/* Location */}
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="location" className="block text-md font-bold leading-6 text-gray-900">
                            Location from where lost?
                        </label>
                        <div className="mt-2">
                            <input
                                id="location"
                                type="text"
                                {...register('location', { required: true })}
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                            {errors.location && (
                                <p className="text-red-500 text-sm">Location is required</p>
                            )}
                        </div>
                    </div>

                    {/* Photographs of the Vehicle */}
                    <div className="flex items-center mt-4">
                        <label className="mr-2 text-md font-bold">Photographs of the Vehicle:</label>
                        <label className="cursor-pointer">
                            <FontAwesomeIcon icon={faCamera} className="text-gray-600" />
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handlePhotoUpload}
                            />
                        </label>
                    </div>

                    {/* Uploaded Photographs */}
                    <div className="mt-2">
      {photos.map((photo, index) => (
        <div key={index} className="relative w-32 h-32 mr-2">
          <Image
            src={URL.createObjectURL(photo)}  // Using object URL for local file preview
            alt="Uploaded"
            layout="fill"  // Ensures the image fills the container
            objectFit="cover"  // Ensures the image covers the container without distortion
            className="rounded-md"
          />
        </div>
      ))}
    </div>

                    {/* RC Book/Card Copy */}
                    <div className="flex items-center mt-4">
                        <label className="mr-2 text-md font-bold">RC Book/Card Copy:</label>
                        <label className="cursor-pointer">
                            <FontAwesomeIcon icon={faCamera} className="text-gray-600" />
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleRcBookUpload}
                            />
                        </label>
                    </div>

                    {/* Uploaded RC Book/Card Copy */}
                    {rcBookCopy && (
        <div className="mt-2 relative w-32 h-32">
          <Image
            src={URL.createObjectURL(rcBookCopy)}  // Using object URL for local file preview
            alt="RC Book Copy"
            layout="fill"  // Makes the image fill the container
            objectFit="cover"  // Ensures the image covers the container without distortion
            className="rounded-md"
          />
        </div>
                    )}

<div className="flex items-center justify-center mt-8 mb-4">
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-yellow-500 text-black font-bold py-2 px-8 lg:py-4 lg:px-32 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
                </form>
            )}

            {showOthersForm && <LostOthers />}
        </div>
    );
};

export default LostComponent;
