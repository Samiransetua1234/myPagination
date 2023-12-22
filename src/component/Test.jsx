import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import {useForm} from 'react-hook-form'

const Test = (props) => {

    const{email, setShowLogin, setEmail, emailRegex, passwordRegex, isEmailValid, isPassValid, setIsEmailValid, setIsPassValid}= props.data

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    const [userLoginInfo, setUserLoginInfo] = useState("")
    // console.log(props.data);
    const[showPass, setShowPass] = useState(false)
    const[password, setPassword] = useState("")


    const onSubmit =  (data) => {
        
        setUserLoginInfo(data)
        console.log(data)

    };
    


  return (
    <div
      className={`flex flex-col gap-4 w-3/4 p-6 bg-white justify-center text-center shadow-md shadow-gray-400 rounded-lg md:w-1/2`}
    >
      <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 font-bold mb-4">
        Test Page
      </span>
      <form
        
        className="flex flex-col gap-3 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="email"
          className={`flex items-center justify-start gap-1 border-2 rounded-lg p-2 border-gray-500`}
        >
          <MdEmail className={`text-xl text-black`} />
          <input
            type="email"
            id="email"
            placeholder="Email Id"
            className="outline-none  w-full placeholder:text-black"
            {...register("email", {
                required: true,
                pattern: emailRegex,
              })}
          />
          
        </label>
        {errors.email?.type === "required" && <p className='text-red-600 text-xs'>** Email is required</p>}
            {errors.email?.type === "pattern" &&
              <p className='text-red-600 text-xs '>Entered email is in wrong format</p>}
        <label
          htmlFor="pass"
          className={`flex items-center justify-start gap-1 border-gray-500
          } border-2  rounded-lg p-2`}
        >
          <FaLock className={`text-xl text-black}`} />
          <input
            type={showPass ? "text" : "password"}
            id="pass"
            placeholder="Password"
            className="outline-none  w-full placeholder:text-black"
            {...register('pass',{
                required:true,
                pattern:passwordRegex
            })}
          />
          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <AiFillEyeInvisible className="text-xl" />
            ) : (
              <IoEye className="text-xl" />
            )}
          </span>
        </label>
        {errors.pass?.type === "required" && <p className='text-red-600 text-xs'>** Password is required</p>}
            {errors.pass?.type === "pattern" &&
              <p className='text-red-600 text-xs '>Invalid Password, enter correct password</p>}
        <button className="p-3 mt-3 bg-gradient-to-r from-purple-500 via-blue-600 to-blue-500 rounded-md text-white font-semibold">
          Login
        </button>
      </form>
      <p className="text-xs">
        Don't Have An Account?{" "}
        <span
          className="text-blue-500 font-bold cursor-pointer"
          onClick={() => setShowLogin("Signup")}
        >
          Create One
        </span>
      </p>
    </div>
  );
};

export default Test;
