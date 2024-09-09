import React from 'react'
import { BiArrowToRight, BiLink } from 'react-icons/bi'
import { BiCode } from 'react-icons/bi'


const ProjectCard = ({ title, tec, desc, imgsrc, demo, git }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>

      <img className='p-1 mt-3' src={imgsrc} alt="Project Img" />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal mt-4'>{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 flex items-center justify-start gap-2 bg-slate-900 rounded-xl mt-4 mb-3"><BiArrowToRight />{tec}</p>
      <p className=" leading-tight py-2 px-4">{desc}</p>

      <div className="p-2 flex items-center gap-5 justify-center">

        <a href={demo} target='_blank'><button className='md:mt-10 text-white py-2 px-6 text-sm md:text-lg md:py-2 md:px-4 
        hover:opacity-85 duration-300 hover:scale-105 font:semibold rounded-3xl bg-[#465697] flex items-center gap-2'>
          Demo <BiLink /></button></a>

        <a href={git} target='_blank'><button className='md:mt-10 text-white py-2 px-6 text-sm md:text-lg md:py-2 md:px-4 
        hover:opacity-85 duration-300 hover:scale-105 font:semibold rounded-3xl border-[#465697] border-t-2 border-b-2 flex 
        items-center gap-2'>Code <BiCode /></button></a>
      </div>
    </div>
  )
}

export default ProjectCard
