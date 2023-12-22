import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";

const Signup = (props) => {
    
    const {setShowLogin, email, setEmail, emailRegex, isEmailValid, setIsEmailValid} = props.data
    const handleCreate = e =>{
        e.preventDefault();
        if(email != "" && isEmailValid == true){
        setShowLogin('OTP')

        }
    }
  return (
    <div className={`flex flex-col gap-4 w-[90vw] p-6 bg-white justify-center text-center shadow-md shadow-gray-400 rounded-lg sm:w-2/3 md:w-2/3 xl:w-1/2`}>
                        <span className=' bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-600 font-bold mb-4'>Signup</span>
                        <form action="" className='flex flex-col gap-3 w-full' onSubmit={handleCreate}>
                        <label htmlFor="email" className={`flex items-center justify-start gap-1 border-2 rounded-lg p-2 ${email==="" ? 'border-gray-400': isEmailValid? 'border-green-600': 'border-red-600'}`} >
                            <MdEmail className={`text-xl text-black`}/>
                        <input type="email" id='email' placeholder='Email Id' value={email} className='outline-none  w-full placeholder:text-black' onChange={e =>{ setEmail(e.target.value)
                                                                    setIsEmailValid(emailRegex.test(e.target.value))}}/>
                        </label>
                        <button className='p-3 mt-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-white font-semibold'>Get an OTP</button>
                        </form>
                        <p className='text-xs'>Already Have An Account? <span className='text-blue-500 font-bold cursor-pointer' onClick={()=>setShowLogin('Login')}>Login</span></p>
                    </div>
  )
}

export default Signup
