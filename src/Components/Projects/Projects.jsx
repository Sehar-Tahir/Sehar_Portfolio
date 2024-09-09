import React from 'react'
import ProjectCard from './ProjectCard'
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project4 from '../../assets/Project4.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'

// import Project7 from '../../assets/Project7.png'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white md:mt-8'>
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>

      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">

        <ProjectCard title='Nexcent' imgsrc={Project2} tec='React Js, Tailwind Css' desc="Nexcent is a Company's Responsive Landing Page built 
        with React + Vite and Tailwind CSS used for stunning and visually appealing interface!" git='https://github.com/Sehar-Tahir/Nexcent-REACT_Landing_Page' demo='https://nexcent-react-landing-page.vercel.app/' />

        <ProjectCard title='Tailwind Project' imgsrc={Project3} tec='Html, CSS, Tailwind Css' desc='A stunning and Responsive Landing Page 
        Dev.Learnings created by Html, CSS and Tailwind Css. Responsive landing page design across all devices.' git='https://github.com/Sehar-Tahir/Responsive_Landing_Page-TailwindCss' demo='https://responsive-landing-page-tailwind-css.vercel.app/' />

        <ProjectCard title='Task Tracker' imgsrc={Project4} tec='React Js' desc='Task Tracker is web app to create and manage tasks & also add reminder for important tasks.React hooks are used to build it.' git='https://github.com/Sehar-Tahir/Task_Tracker' demo='https://task-tracker-ebon-eight.vercel.app/' />

        <ProjectCard title='Web Dev Site' imgsrc={Project5} tec='React Js, Material UI' desc='
                        Web Dev Site is a community platform where web developers connect, share, 
                        and learn from each other. Built with Material UI components.' git='https://github.com/Sehar-Tahir/Web_Dev_Site' demo='https://web-dev-site-ten.vercel.app/' />


        <ProjectCard title='Promptify' imgsrc={Project1} tec='Next Js, Tailwind Css' desc='Promtify is a AI-powered platform to generate innovative ideas and inspiration, Discover, share, and collaborate
                on prompts with Promptify!' git='' demo='' />

        <ProjectCard title='Bootstrap Project' imgsrc={Project6} tec='Html, CSS, Bootstrap' desc='Dev Learnings is a  responsive landing page created by html,
         CSS and bootstrap components are used to built this landing page.' git='https://github.com/Sehar-Tahir/Responsive_Landing_page' demo='https://responsive-landing-page-alpha.vercel.app/' />
      </div>
    </div>
  )
}

export default Projects
