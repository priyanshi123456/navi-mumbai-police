import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

type FormValues = {
  make: string;
  model: string;
  photographs: FileList;
};

const FoundOthers: React.FC = () => {
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

      <div className="flex items-center mt-4">
        <input
          type="file"
          id="photographs-upload"
          className="hidden"
          multiple
          {...control.register('photographs', { required: 'Photographs are required' })}
        />
        <FontAwesomeIcon
          icon={faCamera}
          className="text-gray-700 mr-2 cursor-pointer"
          onClick={() => document.getElementById('photographs-upload')?.click()}
        />
        <h5 className="text-lg text-gray-700">Photographs of the Item</h5>
      </div>
      {errors.photographs && (
        <span className="text-red-500 text-sm">{errors.photographs.message}</span>
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
  );
};

export default FoundOthers;
