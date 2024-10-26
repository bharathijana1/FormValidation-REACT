import React from 'react';
import { ValidationSchemaLoginForm } from './ValidationFormSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LableIndex from './LabelIndex';
import { LoginFormObject } from './FormObject';
import { Link, useNavigate } from 'react-router-dom';


export default function SignupForm( { title } ) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ValidationSchemaLoginForm),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission data here
    navigate("/homepage")
  };

  return (
    <div className='flex justify-center items-center flex-col h-dvh	'>
      <h1 className='text-center font-bold text-xl md:text-2xl p-3 md:p-7'>{title}</h1>
      <div className="shadow-md sm:shadow-orange-300  md:w-3/4 xl:w-3/5 mx-auto md:p-3 ">
        <div className="flex justify-center items-center mx-auto">
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className='w-full md:w-3/2 xl:w-3/4 lg:w-3/4 mx-auto p-5 '
          >
            {
              LoginFormObject.map((item, index) => (
                <LableIndex 
                  key={index}
                  labelFor={item.labelFor}
                  labelClassName={item.labelClassName}
                  labelText={item.labelText}
                  inputClassName={item.inputClassName}
                  inputType={item.inputType}
                  inputPlaceholder={item.inputPlaceholder}
                  regist={item.registerName} // Pass the correct field name
                  errors={errors} // Pass errors for validation
                  register={register} // Pass the register function
                />
              ))
            }
            <Link to={"/forgotpassword"}><h2 className='text-center text-blue-700 underline p-1'>Forgot password</h2></Link>
            

            <div className="btn text-center mt-4">
              <input 
                type='submit' 
                className='text-center rounded px-7 py-2 bg-purple-800 text-white text-xl capitalize cursor-pointer' 
                value="Login"
              />
            </div>

            <div className="signupconnect flex flex-row justify-center pt-6 p-3">
            <p>Already have an account?</p>
            <Link to={"/signup"} className='px-3 underline text-blue-700'>Signup</Link>
            </div>
            

          </form>
        </div>
      </div>
    </div>
  );
}
