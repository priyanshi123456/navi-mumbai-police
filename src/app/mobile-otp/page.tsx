"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setResendDisabled(false);
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(60);
    setResendDisabled(true);
    // Add your resend OTP logic here
  };

  const handleVerify = () => {
    // Add your verify OTP logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto md:h-auto lg:h-auto xl:h-auto">
    <h2 className="text-xl font-bold mb-4 text-blue-900">
  Mobile OTP Verification
</h2>


      <div className="relative mb-6 mt-8">
        <label
          htmlFor="otp"
          className="absolute left-3 -top-2 bg-white px-1 text-gray-700 text-sm"
        >
          <span className="text-red-500 mr-1">*</span>
          Enter OTP sent on mobile number
        </label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full py-4 px-3 border border-gray-300 rounded-md shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          placeholder="----"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Time remaining: {timeLeft}s</span>
          <button
            onClick={handleResend}
            className={`text-blue-500 ${resendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={resendDisabled}
          >
            <FontAwesomeIcon icon={faRedoAlt} className="mr-1" />
            Resend OTP
          </button>
        </div>
      </div>
      <button
        onClick={handleVerify}
        className="w-full bg-yellow-300 hover:bg-yellow-400 text-black rounded-full py-3 font-bold mt-8 transition-colors duration-300"
      >
        Verify OTP
      </button>
    </div>
  </div>
  
  );
};

export default OTPVerification;
