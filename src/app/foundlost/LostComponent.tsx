import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCamera, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import LostOthers from './LostOthers'; // Importing LostOthers

type FormValues = {
    vehicleType: string;
    make: string;
    model: string;
    year: number;
    color: string;
    licensePlateNo: string;
    location: string;
    tenantsName: string; // Include tenantsName in FormValues
};

const LostComponent: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>();
    const [showVehicleForm, setShowVehicleForm] = useState(false);
    const [showOthersForm, setShowOthersForm] = useState(false);
    const [photos, setPhotos] = useState<File[]>([]);
    const [rcBookCopy, setRcBookCopy] = useState<File | null>(null);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        // Handle form submission logic here
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
                    <div className="relative mb-4">
                        <label htmlFor="make" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Make & Manufacturer
                        </label>
                        <Controller
                            name="make"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="make"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.make ? 'border-red-500' : 'focus:border-blue-500'}`}
                                />
                            )}
                        />
                        {errors.make && (
                            <span className="text-red-500 text-sm">Make is required</span>
                        )}
                    </div>

                    {/* Model */}
                    <div className="relative mb-4">
                        <label htmlFor="model" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Model
                        </label>
                        <Controller
                            name="model"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="model"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.model ? 'border-red-500' : 'focus:border-blue-500'}`}
                                />
                            )}
                        />
                        {errors.model && (
                            <span className="text-red-500 text-sm">Model is required</span>
                        )}
                    </div>

                    {/* Year */}
                    <div className="relative mb-4">
                        <label htmlFor="year" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Year
                        </label>
                        <Controller
                            name="year"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="year"
                                    type="number"
                                    className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.year ? 'border-red-500' : 'focus:border-blue-500'}`}
                                />
                            )}
                        />
                        {errors.year && (
                            <span className="text-red-500 text-sm">Year is required</span>
                        )}
                    </div>

                    {/* Color */}
                    <div className="relative mb-4">
                        <label htmlFor="color" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Color
                        </label>
                        <Controller
                            name="color"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="color"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.color ? 'border-red-500' : 'focus:border-blue-500'}`}
                                />
                            )}
                        />
                        {errors.color && (
                            <span className="text-red-500 text-sm">Color is required</span>
                        )}
                    </div>

                    {/* License Plate Number */}
                    <div className="relative mb-4">
                        <label htmlFor="licensePlateNo" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            License Plate No
                        </label>
                        <Controller
                            name="licensePlateNo"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="licensePlateNo"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.licensePlateNo ? 'border-red-500' : 'focus:border-blue-500'}`}
                                />
                            )}
                        />
                        {errors.licensePlateNo && (
                            <span className="text-red-500 text-sm">License Plate No is required</span>
                        )}
                    </div>

                    {/* Location */}
                    <div className="relative mb-4">
                        <label htmlFor="location" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
                            Location from where lost?
                        </label>
                        <Controller
                            name="location"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="location"
                                    type="text"
                                    className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.location ? 'border-red-500' : 'focus:border-blue-500'}`}
                                />
                            )}
                        />
                        {errors.location && (
                            <span className="text-red-500 text-sm">Location is required</span>
                        )}
                    </div>

                    {/* Photographs of the Vehicle */}
                    <div className="flex items-center mt-4">
                        <label className="mr-2">Photographs of the Vehicle:</label>
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
                            <img key={index} src={URL.createObjectURL(photo)} alt="Uploaded" className="w-32 h-32 object-cover mr-2" />
                        ))}
                    </div>

                    {/* RC Book/Card Copy */}
                    <div className="flex items-center mt-4">
                        <label className="mr-2">Upload RC Book/Card Copy:</label>
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
                    <div className="mt-2">
                        {rcBookCopy && (
                            <img src={URL.createObjectURL(rcBookCopy)} alt="RC Book" className="w-32 h-32 object-cover mr-2" />
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center mt-8 mb-32">
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4"
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
