import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface DropdownProps {
    label: string;
    options: string[];
    register: any; // Adjust this type according to your form library, e.g., React Hook Form
    name: string;
    required?: boolean;
    errors?: any; // Adjust this type according to your form library, e.g., React Hook Form
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, register, name, required, errors }) => {
    return (
        <div className="relative mb-4 mt-6">
            <label htmlFor={name} className="block text-md font-bold leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2 relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <select
                    {...register(name, { required })}
                    id={name}
                    className="appearance-none shadow border w-full py-4 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {errors && errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
            </div>
        </div>
    );
};

export default Dropdown;
