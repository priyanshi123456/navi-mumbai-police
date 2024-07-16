import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

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

const LostOthers: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>();
    const [showVehicleForm, setShowVehicleForm] = useState(false);
    const [photoFiles, setPhotoFiles] = useState<File[]>([]);
    const [billFiles, setBillFiles] = useState<File[]>([]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        // Handle form submission logic here
    };

    const handleVehicleSelect = (value: string) => {
        setValue('vehicleType', value);
        setShowVehicleForm(value === 'Vehicle');
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPhotoFiles([...photoFiles, ...Array.from(e.target.files)]);
        }
    };

    const handleBillUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setBillFiles([...billFiles, ...Array.from(e.target.files)]);
        }
    };

    return (
        <div className="mx-auto max-w-screen-lg px-4 md:px-8 lg:px-16">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                {/* Make & Manufacturer */}
                <div className="relative mb-6">
                    <label htmlFor="make" className="absolute left-3 -top-3 bg-white px-1 text-gray-700 text-sm ">
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
                                className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 ${errors.make ? 'border-red-500' : 'focus:border-blue-500'}`}
                            />
                        )}
                    />
                    {errors.make && (
                        <span className="text-red-500 text-sm">Make is required</span>
                    )}
                </div>

                {/* Model */}
                <div className="relative mb-6">
                    <label htmlFor="model" className="absolute left-3 -top-3 bg-white px-1 text-gray-700 text-sm">
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
                                className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 ${errors.model ? 'border-red-500' : 'focus:border-blue-500'}`}
                            />
                        )}
                    />
                    {errors.model && (
                        <span className="text-red-500 text-sm">Model is required</span>
                    )}
                </div>

                {/* Year */}
                <div className="relative mb-6">
                    <label htmlFor="year" className="absolute left-3 -top-3 bg-white px-1 text-gray-700 text-sm ">
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
                                className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 ${errors.year ? 'border-red-500' : 'focus:border-blue-500'}`}
                            />
                        )}
                    />
                    {errors.year && (
                        <span className="text-red-500 text-sm">Year is required</span>
                    )}
                </div>

                <div className="flex items-center mt-4">
                    <input
                        type="file"
                        id="photo-upload"
                        className="hidden"
                        onChange={handlePhotoUpload}
                        multiple
                    />
                    <FontAwesomeIcon
                        icon={faCamera}
                        className="text-gray-700 mr-2 cursor-pointer"
                        onClick={() => document.getElementById('photo-upload')?.click()}
                    />
                    <h5 className="text-lg text-gray-700">Photographs of the Item</h5>
                </div>

                <div className="flex items-center mt-4">
                    <input
                        type="file"
                        id="bill-upload"
                        className="hidden"
                        onChange={handleBillUpload}
                        multiple
                    />
                    <FontAwesomeIcon
                        icon={faCamera}
                        className="text-gray-700 mr-2 cursor-pointer"
                        onClick={() => document.getElementById('bill-upload')?.click()}
                    />
                    <h5 className="text-lg text-gray-700">Bill Invoice Copy of the Items (if present)</h5>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center mt-8 mb-4">
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-yellow-500 text-black font-bold py-2 px-8 lg:py-4 lg:px-32 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LostOthers;
