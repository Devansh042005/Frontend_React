import React, {useState} from 'react'
import { FaArrowRight } from "react-icons/fa";

function MiniProj () {

   const[val, setVal] =  useState(false);
  return (
    <div>
        <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
            <div className='relative w-60 h-32 bg-zinc-500 flex overflow-hidden'>
                <img className={`shrink-0 transition-transform duration-700 ${val === false? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full w-full object-cover`} src="https://images.unsplash.com/photo-1745770998338-eb50b0c89b16?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className={`shrink-0 transition-transform duration-700 ${val === false? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full w-full object-cover`} src="https://images.unsplash.com/photo-1745770998560-8bac0aaac77b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span onClick={()=> setVal(()=> !val)} className='w-8 h-8 bg-[#dadada7b] flex bg-zinc-200 bottom-[0%] rounded-full items-center justify-center absolute botton-10 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <FaArrowRight size={".7em"} />
                </span>
            </div>
        </div>
    </div>
  )
}

export default MiniProj
