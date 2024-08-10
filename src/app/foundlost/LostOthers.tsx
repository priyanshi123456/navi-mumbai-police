import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';

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
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [photoFiles, setPhotoFiles] = useState<File[]>([]);
    const [billFiles, setBillFiles] = useState<File[]>([]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        alert("form is submitted")
        console.log(data);
        // Handle form submission logic here
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
                <div className="relative mb-4 mt-8">
                    <label htmlFor="make" className="block text-md font-bold leading-6 text-gray-900">
                        Make & Manufacturer
                    </label>
                    <div className="mt-2">
                        <input
                            {...register('make', { required: 'Make is required' })}
                            id="make"
                            type="text"
                            className={`shadow appearance-none border w-full py-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.make ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.make && (
                            <p className="text-red-500 text-sm">{errors.make.message}</p>
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
                            {...register('model', { required: 'Model is required' })}
                            id="model"
                            type="text"
                            className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.model ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.model && (
                            <p className="text-red-500 text-sm">{errors.model.message}</p>
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
                            {...register('year', { required: 'Year is required' })}
                            id="year"
                            type="number"
                            className={`shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.year ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.year && (
                            <p className="text-red-500 text-sm">{errors.year.message}</p>
                        )}
                    </div>
                </div>

                {/* Photo Upload */}
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
                    <h5 className="text-md font-bold text-gray-700">Photographs of the Item</h5>
                </div>

                {/* Bill Upload */}
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
                    <h5 className="text-md font-bold text-gray-700">Bill Invoice Copy of the Items (if present)</h5>
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
