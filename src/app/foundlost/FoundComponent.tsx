"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import FoundMobile from './FoundMobile';
import FoundVehicle from './FoundVehicle';
import FoundOthers from './FoundOthers';

const FoundComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative mt-8">
      <select
        id="foundPropertyType"
        className="appearance-none border w-full py-4 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md select-arrow text-lg"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled hidden>
          Select...
        </option>
        <option value="Mobile" className="py-2">
          Mobile
        </option>
        <option value="Vehicle" className="py-2">
          Vehicle
        </option>
        <option value="Others" className="py-2">
          Others
        </option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FontAwesomeIcon icon={faAngleDown} className="text-gray-600 h-4 w-8" />
      </div>
      <div className="mt-4">
        {selectedOption === 'Mobile' && <FoundMobile />}
        {selectedOption === 'Vehicle' && <FoundVehicle />}
        {selectedOption === 'Others' && <FoundOthers />}
      </div>
    </div>
  );
};

export default FoundComponent;
