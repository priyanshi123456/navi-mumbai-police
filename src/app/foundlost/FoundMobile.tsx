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
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
            <div className="relative mb-6">
                <label htmlFor="make" className="absolute left-3 -top-3 bg-white px-1 text-gray-700 text-sm">
                    Make & Manufacturer
                </label>
                <Controller
                    name="make"
                    control={control}
                    rules={{ required: 'Make is required' }}
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
                    <span className="text-red-500 text-sm">{errors.make.message}</span>
                )}
            </div>

            <div className="relative mb-6">
                <label htmlFor="model" className="absolute left-3 -top-3 bg-white px-1 text-gray-700 text-sm">
                    Model
                </label>
                <Controller
                    name="model"
                    control={control}
                    rules={{ required: 'Model is required' }}
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
                    <span className="text-red-500 text-sm">{errors.model.message}</span>
                )}
            </div>

            <div className="relative mb-6">
                <label htmlFor="color" className="absolute left-3 -top-3 bg-white px-1 text-gray-700 text-sm">
                    Color
                </label>
                <Controller
                    name="color"
                    control={control}
                    rules={{ required: 'Color is required' }}
                    render={({ field }) => (
                        <input
                            {...field}
                            id="color"
                            type="text"
                            className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 ${errors.color ? 'border-red-500' : 'focus:border-blue-500'}`}
                        />
                    )}
                />
                {errors.color && (
                    <span className="text-red-500 text-sm">{errors.color.message}</span>
                )}
            </div>

            <div className="relative mb-6">
                <label htmlFor="imei" className="absolute left-3 -top-3 bg-white px-1 text-gray-700 text-sm">
                    IMEI No
                </label>
                <Controller
                    name="imei"
                    control={control}
                    rules={{ required: 'IMEI No is required' }}
                    render={({ field }) => (
                        <input
                            {...field}
                            id="imei"
                            type="text"
                            className={`shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 ${errors.imei ? 'border-red-500' : 'focus:border-blue-500'}`}
                        />
                    )}
                />
                {errors.imei && (
                    <span className="text-red-500 text-sm">{errors.imei.message}</span>
                )}
            </div>
            <div className="flex items-center mt-4">
                <input
                    type="file"
                    id="bill-upload"
                    className="hidden"

                    multiple
                />
                <FontAwesomeIcon
                    icon={faCamera}
                    className="text-gray-700 mr-2 cursor-pointer"
                    onClick={() => document.getElementById('bill-upload')?.click()}
                />
                <h5 className="text-lg text-gray-700">Bill Invoice Copy of the Items (if present)</h5>
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
