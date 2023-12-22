import React from 'react'

const Card = ({name}) => {
  return (
    <div className='flex items-center text-center justify-center bg-slate-500 h-36 w-36'>
      <h1 className='font-bold text-center text-red-600 text-3xl'>{name}</h1>
    </div>
  )
}

export default Card
