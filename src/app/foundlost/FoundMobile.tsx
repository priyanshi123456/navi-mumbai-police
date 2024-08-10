import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCamera } from '@fortawesome/free-solid-svg-icons';

type FormValues = {
    make: string;
    model: string;
    color: string;
    imei: string;
    photographs: FileList;
};

const FoundMobile: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        alert("form is submitted")
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
            {/* Make & Manufacturer */}
            <div className="relative mb-4">
                <label htmlFor="make" className="block text-md font-bold leading-6 text-gray-900">
                    Make & Manufacturer
                </label>
                <div className="mt-2">
                    <Controller
                        name="make"
                        control={control}
                        rules={{ required: 'Make is required' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                id="make"
                                type="text"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.make && <p className="text-red-500 text-sm">{errors.make.message}</p>}
                </div>
            </div>

            {/* Model */}
            <div className="relative mb-4 mt-6">
                <label htmlFor="model" className="block text-md font-bold leading-6 text-gray-900">
                    Model
                </label>
                <div className="mt-2">
                    <Controller
                        name="model"
                        control={control}
                        rules={{ required: 'Model is required' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                id="model"
                                type="text"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.model && <p className="text-red-500 text-sm">{errors.model.message}</p>}
                </div>
            </div>

            {/* Color */}
            <div className="relative mb-4 mt-6">
                <label htmlFor="color" className="block text-md font-bold leading-6 text-gray-900">
                    Color
                </label>
                <div className="mt-2">
                    <Controller
                        name="color"
                        control={control}
                        rules={{ required: 'Color is required' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                id="color"
                                type="text"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.color && <p className="text-red-500 text-sm">{errors.color.message}</p>}
                </div>
            </div>

            {/* IMEI No */}
            <div className="relative mb-4 mt-6">
                <label htmlFor="imei" className="block text-md font-bold leading-6 text-gray-900">
                    IMEI No
                </label>
                <div className="mt-2">
                    <Controller
                        name="imei"
                        control={control}
                        rules={{ required: 'IMEI No is required' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                id="imei"
                                type="text"
                                className="shadow appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.imei && <p className="text-red-500 text-sm">{errors.imei.message}</p>}
                </div>
            </div>

            <div className="flex items-center justify-center mt-8 mb-4">
                <button
                    type="submit"
                    className="w-full md:w-auto bg-yellow-500 text-black font-bold py-2 px-8 lg:py-4 lg:px-32 rounded-full focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default FoundMobile;
