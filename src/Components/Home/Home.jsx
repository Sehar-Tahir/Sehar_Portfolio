import React from 'react'
import TextChange from '../TextChange'
import { BiDownload } from 'react-icons/bi'
import { LuContact } from 'react-icons/lu'



const Home = () => {

    return (
        <div id='Home' className='text-white flex w-full justify-center items-start p-10 md:p-20 md:mb-12 mt-20'>
            <div className='md:w-2/4 md:pt-8'>
                <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                    <TextChange />
                </h1>
                <p className='text-sm md:text-2xl tracking-tight mt-3'>A passionate Frontened Developer from Pakistan. Reach out if you'd like to know more!</p>

                <div className='flex flex-col items-center mt-6 mb-4 md:mb-0'>

                    <a href="Sehar_Tahir_Resume.pdf" download='Sehar_Tahir_Resume.pdf' className='w-full'>
                        <button className='w-full mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] flex items-center justify-center 
                gap-2'>My Resume <BiDownload /></button>
                    </a>

                    <a href="#Contact" className='w-full'>
                        <button className='w-full mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
                duration-300 hover:scale-105 font-semibold rounded-3xl border-[#465697] border-t-2 border-b-2 flex items-center 
                justify-center gap-2'>Contact Me <LuContact /></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
