
import React from 'react'
import { useState } from 'react'
import Card from './card'

const Pagination = () => {
    const [data, setData] = useState([
        {name:"page0"},
        {name:"page1"},
        {name:"page2"},
        {name:"page3"},
        {name:"page4"},
        {name:"page5"},
        {name:"page6"},
        {name:"page7"},
        {name:"page8"},
        {name:"page9"}
])


const [startIndex, setStartIndex] = useState(0)
const [endIndex, setEndIndex] = useState(data.length)
const [currentPage, setCurrentPage] = useState(0)

console.log(endIndex)
const handlePrevious =()=>{
    if(startIndex-3 >0){
        setStartIndex(startIndex-3)
        setCurrentPage(startIndex-3)
    }
    else{
        setStartIndex(0)
        setCurrentPage(0)
    }
}

const handleNext =()=>{
    if(startIndex+3 < data.length-3){
        setStartIndex(startIndex+3)
        setCurrentPage(startIndex+3)
    
    }else{
        setStartIndex(data.length-3)
        setCurrentPage(data.length-3)
    }
}
  return (
    <div className='flex flex-col items-center gap-8'>
        <Card name = {data[currentPage].name}/>
        <div className='flex flex-row gap-4'>
        <button className='bg-blue-500 p-4 text-lg font-bold' onClick={handlePrevious}>Previous</button>
        <button className='bg-slate-600 p-4 text-lg font-bold' onClick={()=>setCurrentPage(startIndex)}>{startIndex}</button>
        <button className='bg-slate-600 p-4 text-lg font-bold' onClick={()=>setCurrentPage(startIndex+1)}>{startIndex+1}</button>
        <button className='bg-slate-600 p-4 text-lg font-bold' onClick={()=>setCurrentPage(startIndex+2)}>{startIndex+2}</button>
        <button className='bg-blue-500 p-4 text-lg font-bold' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Pagination
