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
    alert("form is submitted")
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
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
    

      <div className="flex items-center justify-center mt-8 mb-32">
                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4 w-full sm:w-auto sm:mb-32 mb-20"
                >
                    Submit
                </button>
            </div>

    </form>
  );
};

export default FoundOthers;
