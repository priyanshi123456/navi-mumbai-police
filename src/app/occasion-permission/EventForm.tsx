import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLocationDot, faPaperclip } from '@fortawesome/free-solid-svg-icons';

interface EventFormProps {
  eventType: string;
  onSubmit: (formData: any) => void;
}

const EventForm: React.FC<EventFormProps> = ({ eventType, onSubmit }) => {
  const [formState, setFormState] = useState({
    eventType: eventType,
    loudSpeakerPermission: false,
    nearestPoliceStation: 'APMC',
    associationName: '',
    contactPerson: '',
    contactNumber: '',
    numberOfPeopleExpected: '',
    location: '',
    startLocation: '',
    endLocation: '',
    street: '',
    date: '',
    startTime: '',
    endTime: '',
    vipOrCelebrityAttending: false,
    nameOfVIPCelebrity: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    const checked = event.target instanceof HTMLInputElement && event.target.type === 'checkbox' ? event.target.checked : undefined;
    setFormState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Event:', eventType); // Log the event itself
    console.log('Form State:', formState); // Log the current form state
    onSubmit(formState); // Call onSubmit function with formState
  };

  return (
    <div>
      <div className="mb-4">
        <p className="text-sm sm:text-lg">
          <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
          <span className="font-bold">Event Form</span>
        </p>
        <hr className="mb-8 mt-2 border-gray-300" />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="eventType" value={formState.eventType} />

        {/* Loud Speaker Permission */}
        <div className="flex items-center my-4 py-2 mx-auto sm:ml-4 md:ml-8 lg:ml-[300px]">
          <input
            type="checkbox"
            id="loudSpeakerPermission"
            name="loudSpeakerPermission"
            className="form-checkbox h-4 w-4 text-indigo-600 ml-4"
            checked={formState.loudSpeakerPermission}
            onChange={handleChange}
          />
          <label
            htmlFor="loudSpeakerPermission"
            className="ml-2 block text-sm sm:text-base text-gray-900"
            style={{ marginLeft: '20px' }}
          >
            <span className='font-bold'>Loud Speaker Permission</span> <br />
            <span>Select this checkbox in case you intend to use a</span><br />
            <span>loud speaker for this event</span>
          </label>
        </div>

        {/* Nearest Police Station */}
        <div className="mb-8 flex items-center relative mt-8">
          <label
            htmlFor="nearestPoliceStation"
            className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
          >
            Nearest Police Station
          </label>
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <select
            id="nearestPoliceStation"
            name="nearestPoliceStation"
            className="appearance-none border w-full py-2 pl-10 pr-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.nearestPoliceStation}
            onChange={handleChange}
          >
            <option value="APMC">APMC</option>
            <option value="Vashi">Vashi</option>
            <option value="Nerul">Nerul</option>
            <option value="Belapur">Belapur</option>
          </select>
        </div>

        {/* Association/Company Name */}
        <div className="relative mb-4">
          <label htmlFor="associationName" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Association/Company Name
          </label>
          <input
            id="associationName"
            type="text"
            name="associationName"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.associationName}
            onChange={handleChange}
          />
        </div>

        {/* Contact Person */}
        <div className="relative mb-4">
          <label htmlFor="contactPerson" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Contact Person
          </label>
          <input
            id="contactPerson"
            type="text"
            name="contactPerson"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.contactPerson}
            onChange={handleChange}
          />
        </div>

        {/* Contact Number */}
        <div className="relative mb-4">
          <label htmlFor="contactNumber" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="text"
            name="contactNumber"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.contactNumber}
            onChange={handleChange}
          />
        </div>

        {/* Number of People Expected */}
        <div className="relative mb-4">
          <label htmlFor="numberOfPeopleExpected" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Number of People Expected
          </label>
          <input
            id="numberOfPeopleExpected"
            type="text"
            name="numberOfPeopleExpected"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.numberOfPeopleExpected}
            onChange={handleChange}
          />
        </div>

        {/* Location */}
        <div className="relative mb-4">
          <label htmlFor="location" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.location}
            onChange={handleChange}
          />
        </div>

        <div className='mt-8 mb-8'>
          <h4 className='font-bold'>Specify Route (In case of event within a location)</h4>
        </div>

        {/* Start Location */}
        <div className="relative mb-4">
          <label htmlFor="startLocation" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Start Location
          </label>
          <input
            id="startLocation"
            type="text"
            name="startLocation"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.startLocation}
            onChange={handleChange}
          />
        </div>

        {/* End Location */}
        <div className="relative mb-4">
          <label htmlFor="endLocation" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            End Location
          </label>
          <input
            id="endLocation"
            type="text"
            name="endLocation"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.endLocation}
            onChange={handleChange}
          />
        </div>

        {/* Street */}
        <div className="relative mb-4">
          <label htmlFor="street" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Street
          </label>
          <input
            id="street"
            type="text"
            name="street"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.street}
            onChange={handleChange}
          />
        </div>

        {/* Date */}
        <div className="relative mb-4">
          <label htmlFor="date" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Date
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.date}
            onChange={handleChange}
          />
        </div>

        {/* Start Time */}
        <div className="relative mb-4">
          <label htmlFor="startTime" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Start Time
          </label>
          <input
            id="startTime"
            type="time"
            name="startTime"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.startTime}
            onChange={handleChange}
          />
        </div>

        {/* End Time */}
        <div className="relative mb-4">
          <label htmlFor="endTime" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            End Time
          </label>
          <input
            id="endTime"
            type="time"
            name="endTime"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.endTime}
            onChange={handleChange}
          />
        </div>

        {/* VIP/Celebrity Attending */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="vipOrCelebrityAttending"
            name="vipOrCelebrityAttending"
            className="form-checkbox h-4 w-4 text-indigo-600 ml-4"
            checked={formState.vipOrCelebrityAttending}
            onChange={handleChange}
          />
          <label htmlFor="vipOrCelebrityAttending" className="ml-2 block text-sm sm:text-base text-gray-900">
            VIP/Celebrity Attending
          </label>
        </div>

        {/* Name of VIP/Celebrity */}
        {formState.vipOrCelebrityAttending && (
          <div className="relative mb-4">
            <label htmlFor="nameOfVIPCelebrity" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
              Name of VIP/Celebrity
            </label>
            <input
              id="nameOfVIPCelebrity"
              type="text"
              name="nameOfVIPCelebrity"
              className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              value={formState.nameOfVIPCelebrity}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="flex items-center my-4 py-2 mx-auto sm:ml-4 md:ml-8 lg:ml-[300px]">
          <input
            type="checkbox"
            id="resident-navimumbai"
            className="form-checkbox h-4 w-4 text-indigo-600 ml-4"
          />
          <label
            htmlFor="resident-navimumbai"
            className="ml-2 block text-sm sm:text-base text-gray-900"
            style={{ marginLeft: '20px' }}
          >
            <span className='font-bold'>Vip or Celebrities attending (if any)</span> <br />
            <span>Select this checkbox in case pf VIP or a </span><br />
            <span>celebrity attlending this event</span>
          </label>
        </div>

        {/* Name of VIP or Celebrity */}
        {formState.vipOrCelebrityAttending && (
          <div className="relative mb-4">
            <label htmlFor="nameOfVIPCelebrity" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
              Name of VIP or Celebrity
            </label>
            <input
              id="nameOfVIPCelebrity"
              type="text"
              name="nameOfVIPCelebrity"
              className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              value={formState.nameOfVIPCelebrity}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="relative mb-4">
          <label htmlFor="location" className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm">
            Name of VIP or Celebrity
          </label>
          <input
            id="Celebrity"
            type="text"
            name="Celebrity"
            className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={formState.location}
            onChange={handleChange}
          />
        </div>
        <div className="relative mb-4 mt-8">

          <div className="flex flex-col gap-4">
            <div className="text-gray-900 dark:text-gray-100">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 dark:text-gray-400 text-xl font-bold" />
                <h3 className="text-xl font-bold">Assignment</h3>
              </div>
              <hr className="border-gray-500 dark:border-gray-400 mt-2" />
            </div>

            <div className="flex items-center mt-4">
              <input
                type="file"
                id="bill-upload"
                className="hidden"

                multiple
              />
              <FontAwesomeIcon
                icon={faBook}
                className="text-gray-700 mr-2 cursor-pointer"
                onClick={() => document.getElementById('bill-upload')?.click()}
              />
              <h5 className="text-lg text-gray-700">Application signed copy (on organization letter head)</h5>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="file"
                id="bill-upload"
                className="hidden"

                multiple
              />
              <FontAwesomeIcon
                icon={faBook}
                className="text-gray-700 mr-2 cursor-pointer"
                onClick={() => document.getElementById('bill-upload')?.click()}
              />
              <h5 className="text-lg text-gray-700">NOC of Traffic Police (In case of Mobile event)</h5>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="file"
                id="bill-upload"
                className="hidden"

                multiple
              />
              <FontAwesomeIcon
                icon={faBook}
                className="text-gray-700 mr-2 cursor-pointer"
                onClick={() => document.getElementById('bill-upload')?.click()}
              />
              <h5 className="text-lg text-gray-700">NOC of Navi Mumbai Munciple Corporation</h5>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 mb-32">
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold py-4 px-32 rounded-full focus:outline-none focus:shadow-outline mb-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
