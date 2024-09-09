import React from 'react'
import { FaCss3, FaHtml5, FaReact, FaJs } from 'react-icons/fa'
import { DiBootstrap, DiMaterializecss } from 'react-icons/di'
import { SiMui } from 'react-icons/si'

const Skills = () => {
  return (
    <div id='Skills' className='p-10 md:mt-28'>
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Skills</h1>
      <div className="flex flex-wrap items-center justify-center md:w-5/5 mt-10 md:mt-24 gap-10">

        <div className='flex flex-col items-center gap-3 hover:scale-110 duration-300'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color='#E34F26' size={50} /></span>
          <h1 className='text-white font-bold'>HTML</h1>
        </div>

        <div className='flex flex-col items-center gap-3 hover:scale-110 duration-300'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color='#1572b6' size={50} /></span>
          <h1 className='text-white font-bold'>CSS</h1>
        </div>

        <div className='flex flex-col items-center gap-3 hover:scale-110 duration-300'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiBootstrap color='#A020F0' size={50} /></span>
          <h1 className='text-white font-bold'>Bootstrap</h1>
        </div>

        <div className='flex flex-col items-center gap-3 hover:scale-110 duration-300'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            {/* <DiMaterializecss color='#87CEEB' size={50} /></span> */}
            <DiMaterializecss color='#35bcf3' size={50} /></span>
          <h1 className='text-white font-bold'>Tailwind Css</h1>
        </div>

        <div className='flex flex-col items-center gap-3 hover:scale-110 duration-300'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color='#F7DF1E' size={50} /></span>
          <h1 className='text-white font-bold'>JavaScript</h1>
        </div>

        <div className='flex flex-col items-center gap-3 hover:scale-110 duration-300'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color='#61DAFB' size={50} /></span>
          <h1 className='text-white font-bold'>React</h1>
        </div>

        <div className='flex flex-col items-center gap-3 hover:scale-110 duration-300'>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMui color='#0073e6' size={50} /></span>
          <h1 className='text-white font-bold'>Material UI</h1>
        </div>
      </div>
    </div>
  )
}

export default Skills
