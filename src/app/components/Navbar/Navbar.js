import React from 'react'
import "./style.css"
import { Image } from 'next/image';


function Navbar() {
  return (
    <div className='bg-indigo-700 w-[4em] transition-all h-screen fixed grid-rows-3 flex justify-center items-center flex-col py-2' >
      <div className=' h-1/3 w-full flex justify-start items-center flex-col gap-3 '>
      <a href="/" > <img className='bg-slate-100  rounded-full ' src="/assets/CHU.svg" /> </a>
      </div>
      <div className=' h-1/3 w-full flex justify-center items-center flex-col gap-3'>
        <a href="#" > <img className='bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2' src="/assets/settings.svg" /> </a>
        <a href="#" > <img className='bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2' src="/assets/Users.svg" /> </a>
        <a href="#" > <img className='bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2' src="/assets/Export Pdf.svg" /> </a>
        <a href="#" > <img className='bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2' src="/assets/Error.svg" /> </a>
      </div>
      <div className=' h-1/3 w-full flex justify-end items-center flex-col  '>
      <a href="/auth/connexion" > <img className='bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2' src="/assets/Logout.svg" /> </a>
      </div>
    
    </div>
  )
}

export default Navbar