import React, { useState } from 'react';

export default function LableIndex({
  labelFor,
  labelClassName,
  labelText,
  inputClassName,
  inputType,
  inputPlaceholder,
  regist,
  errors,
  register,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-start md:justify-between flex-wrap w-full md:p-2">
      <label htmlFor={labelFor} className={`${labelClassName} w-full md:w-1/4 py-2 text-lg md:text-xl`}>
        {labelText} <span className='text-red-600'>*</span>
      </label>
      <div className="flex flex-col w-full md:w-3/4 relative">
        <input
          {...register(regist)} // Register the input
          className={`${inputClassName} border-2 border-gray-300 rounded w-full p-1 px-2 md:px-3 md:text-lg`}
          type={inputType === 'password' && !showPassword ? 'password' : 'text'} // Show/hide password
          placeholder={inputPlaceholder}
        />
        {inputType === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/3 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <img src='https://cdn-icons-png.flaticon.com/128/10866/10866348.png' width="30px" /> : <img src='https://cdn-icons-png.flaticon.com/128/14355/14355849.png' width="30px"  />}
          </button>
        )}
        {errors[regist] && (
          <p className="text-red-500 md:my-1">{errors[regist].message}</p>
        )} {/* Display error message */}
      </div>
    </div>
  );
}



