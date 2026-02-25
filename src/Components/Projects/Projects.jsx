import ProjectCard from './ProjectCard'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'
import Project7 from '../../assets/Project7.png'
import Portfolio from '../../assets/Portfolio.png'
import Amazon from '../../assets/Amazon.png'
import CreamyFun from '../../assets/CreamyFun.png'
import Spotify from '../../assets/Spotify.png'
import Auth from '../../assets/Auth.png'
import Weather from '../../assets/Weather.png'
import Task from '../../assets/Task.png'
import Form from '../../assets/Form.png'
import Password from '../../assets/Password.png'
import chatbot from '../../assets/chatbot.png'
import EasyDo from '../../assets/EasyDo.png'

const Projects = () => {
  return (
    <div id='Projects' className='md:p-24 px-2 text-white mt-10'>
      <h1 className="text-2xl md:text-4xl transition-all duration-300 bg-white text-[#465697] dark:bg-[#171d32] dark:text-whitetext-[] dark:text-white font-bold text-center">Projects</h1>
      <div className="border-[#465697] border-b-2 w-40 mx-auto mt-3 dark:border-white"></div>

      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">

        <ProjectCard title='Nexcent' imgsrc={Project2} type='Fellowship Project' tec='React Js, Tailwind Css' desc="A professional company landing page designed with a clean structure, clear content flow, and a modern layout to represent a strong digital brand presence." git='https://github.com/Sehar-Tahir/Nexcent-REACT_Landing_Page' demo='https://nexcent-react-landing-page.vercel.app/' />

        <ProjectCard title='Tailwind Project' imgsrc={Project3} type='Fellowship Project' tec='Html, CSS, Tailwind Css' desc='A responsive landing page built with well-organized sections, consistent spacing, and a minimal design approach for a smooth user experience.' git='https://github.com/Sehar-Tahir/Responsive_Landing_Page-TailwindCss' demo='https://responsive-landing-page-tailwind-css.vercel.app/' />

        <ProjectCard title='Portfolio' imgsrc={Portfolio} type='Portfolio Project' tec='React, Email.js, Chatbot' desc='A personal portfolio website created to showcase my projects, journey, and growth while reflecting my design style and professional identity.' git='https://github.com/Sehar-Tahir/Sehar_Portfolio' demo='https://sehar-portfolio.vercel.app/' />

        <ProjectCard title='Web Dev Site' imgsrc={Project5} type='Fellowship Project' tec='React Js, Material UI' desc='A community-focused platform concept designed to connect developers, encourage collaboration, and create a shared space for learning and growth.' git='https://github.com/Sehar-Tahir/Web_Dev_Site' demo='https://web-dev-site-ten.vercel.app/' />

        <ProjectCard title='UniGradeBook' imgsrc={Project7} type='Task Project' tec='React Js, Tailwind Css' desc='A student-centered platform that helps users explore and select professors based on preferences, improving academic decision-making.' git='https://github.com/Sehar-Tahir/UniGradebook' demo='https://uni-gradebook.vercel.app/' />

        <ProjectCard title='Bootstrap Project' imgsrc={Project6} type='Fellowship Project' tec='Html, CSS, Bootstrap' desc='A structured landing page focused on clean alignment, responsive layout, and balanced visual presentation for a professional look.' demo='https://responsive-landing-page-alpha.vercel.app/' />

        <ProjectCard title='Amazon Clone' imgsrc={Amazon} type='Personal Project' tec='Html, CSS' desc='A detailed e-commerce homepage replica designed to mirror marketplace layouts with organized product sections and navigation flow.' git='https://github.com/Sehar-Tahir/Amazon-Clone' demo='https://amazon-clone-five-ashy.vercel.app/' />

        <ProjectCard title='Shopify Clone' imgsrc={Spotify} type='Personal Project' tec='Html, CSS' desc='An e-commerce inspired storefront layout demonstrating structured product displays and a clean, conversion-focused design approach.' git='https://github.com/Sehar-Tahir/Spotify-Clone' demo='https://spotify-clone-bay-chi.vercel.app/' />

        <ProjectCard title='Creamy Fun' imgsrc={CreamyFun} type='Task Project' tec='Html, CSS' desc='A visually engaging website concept created with attractive sections, playful structure, and an easy-to-navigate layout.' git='https://github.com/Sehar-Tahir/Creamy_Fun' demo='https://creamy-fun.vercel.app/' />

        <ProjectCard title='MERN Auth' imgsrc={Auth} type='Personal Project' tec='MERN - Frontend' desc='A user authentication interface designed to provide a smooth registration and login experience with clear interaction flow.' git='https://github.com/Sehar-Tahir/MERN-Auth/tree/main/frontend' demo='https://mern-auth-frontend-ecru.vercel.app/' />

        <ProjectCard title='MERN Auth' imgsrc={Auth} type='Personal Project' tec='MERN - Backend' desc='A secure authentication system developed to manage user access, validation processes, and protected data handling.' git='https://github.com/Sehar-Tahir/MERN-Auth/tree/main/backend' demo='https://mern-auth-backend-navy.vercel.app/' />

        <ProjectCard title='Weather Now' imgsrc={Weather} type='Internship Project' tec='Html, CSS, Javascript' desc='A dynamic weather application that presents real-time weather information in a clear, structured, and user-friendly format.' git='https://github.com/Sehar-Tahir/WeatherNOW' demo='https://weather-now-steel.vercel.app/' />

        <ProjectCard title='Task Tracker' imgsrc={Task} type='Fellowship Project' tec='Html, CSS, Js, React' desc='A productivity-driven application designed to help users organize, manage, and track daily tasks efficiently.' git='https://github.com/Sehar-Tahir/Task_Tracker' demo='https://task-tracker-ebon-eight.vercel.app/' />

        <ProjectCard title='Registration Form' imgsrc={Form} type='Task Project' tec='Html, CSS, Js' desc='A structured and user-friendly form designed with validation features to ensure accurate and secure data submission.' git='https://github.com/Sehar-Tahir/Registration-Form' demo='https://registration-form-two-sand.vercel.app/' />

        <ProjectCard title='Password Generator' imgsrc={Password} type='Personal Project' tec='Html, CSS, Javascript, React' desc='An interactive utility tool created to generate strong and customizable passwords for improved digital security.' git='https://github.com/Sehar-Tahir/Password-Generator' demo='https://password-generator-inky-eta.vercel.app/' />

        <ProjectCard title='EasyDo' imgsrc={EasyDo} type='Fellowship Project' tec='Html, CSS, Javascript, React' desc='A task management application built to simplify daily planning and improve productivity through organized task handling.' git='https://github.com/Sehar-Tahir/EasyDo' demo='https://easy-do.vercel.app/' />

        <ProjectCard title='ChatBOT' imgsrc={chatbot} type='Client Project' tec='No Code' desc='A client project where a no-code chatbot solution was integrated into a web application for automated user interaction.' git='https://drive.google.com/file/d/19oS3s1n63m9uC42ZnRiWRtgE_AOLlypQ/view?usp=drivesdk' demo='https://drive.google.com/file/d/19oS3s1n63m9uC42ZnRiWRtgE_AOLlypQ/view?usp=drivesdk' />


      </div>
    </div>
  )
}

export default Projects
