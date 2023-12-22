import React, { useRef, useState } from 'react'

const Otp = (props) => {
  const {setShowLogin, email} = props.data
  const[In1, setIn1] = useState("")
  const[In2, setIn2] = useState("")
  const[In3, setIn3] = useState("")
  const[In4, setIn4] = useState("")

  const inRef1 = useRef(null)
  const inRef2 = useRef(null)
  const inRef3 = useRef(null)
  const inRef4 = useRef(null)

  const handleInputChange=(e, setInput ,nextInRef, prevInRef)=>{
      
      const inputValue = e.target.value;
  
      setInput(inputValue);
  
  if (inputValue.length ===1 && nextInRef.current) {
      
    nextInRef.current.focus();
  }
  if (inputValue.length === 0 && prevInRef.current) {
      
      prevInRef.current.focus();
    }

  }
  
  const handleSubmit = e =>{
      e.preventDefault();
      setShowLogin('Setpass')
  }
  return (
    <div className={`flex flex-col gap-4 w-[90vw] p-6 bg-white justify-center text-center shadow-md shadow-gray-400 rounded-lg sm:w-1/3 md:w-2/3 xl:w-1/2`}>
    <span className=' bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-600 font-bold mb-4'>Enter OTP Sent To <br /> {email}</span>
    <form action="" className='flex-col gap-3 w-full grid justify-items-stretch ..."' onSubmit={handleSubmit}>
    <div className='flex flex-row justify-around px-1'>
    <input type="number" className='w-10 md:w-12 md:h-12 h-10 px-4 py-2 outline-none border-2 border-gray-500 remove-arrow rounded-md' onChange={(e)=> handleInputChange(e, setIn1, inRef2, null)} ref={inRef1} autoFocus/>
    <input type="number" className='w-10 md:w-12 md:h-12 h-10 px-4 py-2 outline-none border-2 border-gray-500 remove-arrow rounded-md' onChange={(e)=> handleInputChange(e, setIn2, inRef3, inRef1)} ref={inRef2}/>
    <input type="number" className='w-10 h-10 md:w-12 md:h-12 px-4 py-2 outline-none border-2 border-gray-500 remove-arrow rounded-md' onChange={(e)=> handleInputChange(e, setIn3, inRef4, inRef2)} ref={inRef3}/>
    <input type="number" className='w-10 h-10 md:w-12 md:h-12 px-4 py-2 outline-none border-2 border-gray-500 remove-arrow rounded-md' onChange={(e)=> handleInputChange(e, setIn4, null, inRef3)} ref={inRef4}/>
    </div>
    <p className='text-xs justify-self-end ...'>Didn't Receive OTP ? <span className='text-blue-500 font-bold cursor-pointer' onClick={()=> handleResend }>Resend</span></p>
    <button className='p-3 mt-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-white font-semibold'>Submit</button>
    </form>
    <p className='text-xs'>Already Have An Account? <span className='text-blue-500 font-bold cursor-pointer' onClick={()=>setShowLogin('Login')}>Login</span></p>
</div>
  )
}

export default Otp
