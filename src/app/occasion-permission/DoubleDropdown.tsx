"use client";
import { useState } from 'react';
import EventForm from './EventForm';

const DynamicDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const categories: { [key: string]: string[] } = {
    "Social Event": ["Bike Rally", "Car Rally", "Marathon", "Party"],
    "Religious Event": ["Public Service", "Satsang", "Julus", "Pilgrimage"],
    "Political Event": ["Party Campaign", "Election Advertising", "Others"]
  };

  const handleCategoryChange = (event:any) => {
    const value = event.target.value;
    setSelectedCategory(value);
    setSelectedOption(''); // Reset the option when the category changes
  };

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const options = selectedCategory ? categories[selectedCategory] : Object.keys(categories);

  const handleSubmit = (formData:any) => {
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="p-6">
        <div className="mb-4">
          <select
            className="block w-full px-3 py-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={selectedCategory ? selectedOption : selectedCategory}
            onChange={selectedCategory ? handleOptionChange : handleCategoryChange}
          >
            <option value="">{selectedCategory ? 'Select an option' : 'Select a category'}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      {(selectedCategory === "Social Event" || selectedCategory === "Religious Event" || selectedCategory === "Political Event") && selectedOption && (
        <EventForm eventType={selectedOption} onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default DynamicDropdown;
