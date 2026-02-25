import { BiArrowToRight, BiLink } from 'react-icons/bi'
import { BiCode } from 'react-icons/bi'


// const ProjectCard = ({ title, tec, desc, imgsrc, demo, git , type}) => {
const ProjectCard = ({ title, tec, imgsrc, demo, git, type, desc }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-96 md:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out'>

      <img className='p-1 mt-3' src={imgsrc} alt="Project Img" />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal mt-4'>{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 flex items-center justify-start gap-2 bg-slate-900 rounded-xl mt-4 mb-1"><BiArrowToRight />{tec}</p>
      <p className="px-2 text-sm md:text-[12px] py-1 text-center mt-3  w-[50%] mx-auto rounded-xl border-[#465697] border-t-2 border-b-2 text-yellow-200">{type}</p>
      <p className=" leading-tight text-sm md:text-md py-4 px-6">{desc}</p>

      <div className="p-2 flex items-center gap-5 justify-center">
        <a href={demo} target='_blank' className='flex justify-center items-center'><button className='mt-3 text-white py-1 px-6 text-sm md:text-lg md:px-4 
        hover:opacity-85 duration-300 hover:scale-105 font:semibold rounded-3xl bg-[#465697] flex items-center gap-2 font-serif'>
          Demo <BiLink /></button></a>

        <a href={git} target='_blank' className='flex justify-center items-center'><button className='mt-3 text-white py-0.5 px-6 text-sm md:text-lg md:px-4 
        hover:opacity-85 duration-300 hover:scale-105 font:semibold rounded-xl border-[#465697] border-t-2 border-b-2 flex 
        items-center gap-2 font-serif'>Code <BiCode /></button></a>
      </div>
    </div>
  )
}


// PropTypes validation - used to ensure correct prop types are passed to the component
import PropTypes from 'prop-types'

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tec: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default ProjectCard
