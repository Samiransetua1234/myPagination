import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";

const Log = (props) => {
    const{email, setShowLogin, setEmail, emailRegex, passwordRegex, isEmailValid, isPassValid, setIsEmailValid, setIsPassValid}= props.data
    // console.log(props.data);
    const[showPass, setShowPass] = useState(false)
    const[password, setPassword] = useState("")
    



    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/", {
            method: "POST",
            mode: 'no-cors',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password
            }),
            
          });
    };
    
      
    // console.log(props);
  return (
<div className={`flex flex-col gap-4 w-[90vw] p-6 bg-white justify-center text-center shadow-md shadow-gray-400 rounded-lg sm:w-2/3 md:w-2/3 xl:w-1/2`}>
                        <span className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 font-bold mb-4'>Login</span>
                        <form action="" className='flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
                        <label htmlFor="email" className={`flex items-center justify-start gap-1 border-2 rounded-lg p-2 ${email==="" ? 'border-gray-500': isEmailValid? 'border-green-600': 'border-red-600'}`} >
                            <MdEmail className={`text-xl text-black`}/>
                        <input type="email" id='email' placeholder='Email Id' value={email} className='outline-none  w-full placeholder:text-black' onChange={e => {setEmail(e.target.value)
                                                                    setIsEmailValid(emailRegex.test(e.target.value))}}/>
                        </label>
                        <label htmlFor="pass" className={`flex items-center justify-start gap-1 ${password==="" ? 'border-gray-500': isPassValid? 'border-green-600': 'border-red-600'} border-2  rounded-lg p-2`} >
                            <FaLock className={`text-xl text-black}`}/>
                        <input type={showPass?"text":"password"} id='pass' placeholder='Password' value={password} className='outline-none  w-full placeholder:text-black' onChange={e => {setPassword(e.target.value)
                                                                                                    setIsPassValid((passwordRegex.test(e.target.value)))}}/>
                        <span onClick={()=> setShowPass(!showPass)}>{showPass? <AiFillEyeInvisible className='text-xl'/>:<IoEye className='text-xl'/>}</span>
                        
                        </label>
                        <button className='p-3 mt-3 bg-gradient-to-r from-purple-500 via-blue-600 to-blue-500 rounded-md text-white font-semibold'>Login</button>
                        </form>
                        <p className='text-xs'>Don't Have An Account? <span className='text-blue-500 font-bold cursor-pointer' onClick={()=>setShowLogin("Signup")}>Create One</span></p>
                    </div>
  )
}

export default Log
