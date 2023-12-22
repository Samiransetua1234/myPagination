import React, { useState } from 'react'
import { FaLock } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";

const Setpass = (props) => {
    const {setShowLogin, isPassValid, setIsPassValid, passwordRegex} = props.data
    const[showPass1, setShowPass1] = useState(false)
    const[showPass2, setShowPass2] = useState(false)
    const [isPassValid2, setIsPassValid2] = useState(false)
    const[password, setPassword] = useState("")
    const[password2, setPassword2] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();

    }
    // console.log(password);
    // console.log(password2);
  return (
    <div className={`flex flex-col gap-4 w-[90vw] p-6 bg-white justify-center text-center shadow-md shadow-gray-400 rounded-lg sm:w-2/3 md:w-2/3 xl:w-1/2`}>
    <span className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 font-bold mb-4'>Set up a Password</span>
    <form action="" className='flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
    
    <label htmlFor="pass1" className={`flex items-center justify-start gap-1 ${password==="" ? 'border-gray-500': isPassValid? 'border-green-600': 'border-red-600'} border-2  rounded-lg p-2`} >
        <FaLock className={`text-xl text-black}`}/>
    <input type={showPass1?"text":"password"} id='pass1' placeholder='Password' value={password} className='outline-none  w-full placeholder:text-black' onChange={e => {setPassword(e.target.value)
                                                                                setIsPassValid((passwordRegex.test(e.target.value)))}}/>
    <span onClick={()=> setShowPass1(!showPass1)}>{showPass1? <AiFillEyeInvisible className='text-xl'/>:<IoEye className='text-xl'/>}</span>
    
    </label>
    <label htmlFor="pass2" className={`flex items-center justify-start gap-1 ${password2==="" ? 'border-gray-500': isPassValid2? 'border-green-600': 'border-red-600'} border-2  rounded-lg p-2`} >
        <FaLock className={`text-xl text-black`}/>
    <input type={showPass2?"text":"password"} id='pass2' placeholder='Confirm Password' value={password2} className='outline-none  w-full placeholder:text-black' onChange={e => {setPassword2(e.target.value)
                                                setIsPassValid2(password === e.target.value)}}/>
    <span onClick={()=> setShowPass2(!showPass2)}>{showPass2? <AiFillEyeInvisible className='text-xl'/>:<IoEye className='text-xl'/>}</span>
    
    </label>
    <button className='p-3 mt-3 bg-gradient-to-r from-purple-500 via-blue-600 to-blue-500 rounded-md text-white font-semibold'>Submit</button>
    </form>
    
</div>
  )
}

export default Setpass
