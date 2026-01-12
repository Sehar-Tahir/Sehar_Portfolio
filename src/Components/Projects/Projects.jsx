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

        <ProjectCard title='Nexcent' imgsrc={Project2} type='Fellowship Project' tec='React Js, Tailwind Css' desc="Nexcent is a Company's Responsive Landing Page built 
        with React + Vite and Tailwind CSS used for stunning and visually appealing interface!" git='https://github.com/Sehar-Tahir/Nexcent-REACT_Landing_Page' demo='https://nexcent-react-landing-page.vercel.app/' />

        <ProjectCard title='Tailwind Project' imgsrc={Project3} type='Fellowship Project' tec='Html, CSS, Tailwind Css' desc='A stunning and Responsive Landing Page 
        Dev.Learnings created by Html, CSS and Tailwind Css. Responsive landing page design across all devices.' git='https://github.com/Sehar-Tahir/Responsive_Landing_Page-TailwindCss' demo='https://responsive-landing-page-tailwind-css.vercel.app/' />

        <ProjectCard title='Portfolio' imgsrc={Portfolio} type='Portfolio Project' tec='React, Email.js, Chatbot' desc='This is my portfolio Project, build with React and Tailwind CSS. Email.js is used to add Email Functionality. Chatbot is added to enhance user interaction.' git='https://github.com/Sehar-Tahir/Sehar_Portfolio' demo='https://sehar-portfolio.vercel.app/' />

        <ProjectCard title='Web Dev Site' imgsrc={Project5} type='Fellowship Project' tec='React Js, Material UI' desc='
        Web Dev Site is a community platform where web developers connect, share, 
        and learn from each other. Built with Material UI components.' git='https://github.com/Sehar-Tahir/Web_Dev_Site' demo='https://web-dev-site-ten.vercel.app/' />

        <ProjectCard title='UniGradeBook' imgsrc={Project7} type='Task Project' tec='React Js, Tailwind Css' desc='UniGradeBook is a website created for students to select their favourite professor for studies. and they can also see the results of their previous students.' git='https://github.com/Sehar-Tahir/UniGradebook' demo='https://uni-gradebook.vercel.app/' />

        <ProjectCard title='Bootstrap Project' imgsrc={Project6} type='Fellowship Project' tec='Html, CSS, Bootstrap' desc='Dev Learnings is a  responsive landing page created by html,
         CSS and bootstrap components are used to built this landing page.' git='https://github.com/Sehar-Tahir/Responsive_Landing_page' demo='https://responsive-landing-page-alpha.vercel.app/' />

        <ProjectCard title='Amazon Clone' imgsrc={Amazon} type='Personal Project' tec='Html, CSS' desc='Amazon Website is a responsive e-commerce website inspired by Amazon’s UI, replicating the core layout, product sections, and navigation to practice real-world website structure and responsive design.  ' git='https://github.com/Sehar-Tahir/Amazon-Clone' demo='https://amazon-clone-five-ashy.vercel.app/' />
        <ProjectCard title='Shopify Clone' imgsrc={Spotify} type='Personal Project' tec='Html, CSS' desc='Shopify Website is a modern e-commerce website inspired by Shopify’s design, featuring clean layouts, product sections, and smooth navigation for a professional shopping experience. ' git='https://github.com/Sehar-Tahir/Spotify-Clone' demo='https://spotify-clone-bay-chi.vercel.app/' />

        <ProjectCard title='Creamy Fun' imgsrc={CreamyFun} type='Task Project' tec='Html, CSS' git='https://github.com/Sehar-Tahir/Creamy_Fun' demo='https://creamy-fun.vercel.app/' />
        <ProjectCard title='MERN Auth' imgsrc={Auth} type='Personal Project' tec='MERN - Frontend' git='https://github.com/Sehar-Tahir/MERN-Auth/tree/main/frontend' demo='https://mern-auth-frontend-ecru.vercel.app/' />
        <ProjectCard title='MERN Auth' imgsrc={Auth} type='Personal Project' tec='MERN - Backend' git='https://github.com/Sehar-Tahir/MERN-Auth/tree/main/backend' demo='https://mern-auth-backend-navy.vercel.app/' />
        <ProjectCard title='Weather Now' imgsrc={Weather} type='Internship Project' tec='Html, CSS, Javascript' git='https://github.com/Sehar-Tahir/WeatherNOW' demo='https://weather-now-steel.vercel.app/' />
        <ProjectCard title='Task Tracker' imgsrc={Task} type='Fellowship Project' tec='Html, CSS, Js, React' git='https://github.com/Sehar-Tahir/Task_Tracker' demo='https://task-tracker-ebon-eight.vercel.app/' />
        <ProjectCard title='Registration Form' imgsrc={Form} type='Task Project' tec='Html, CSS, Js' git='https://github.com/Sehar-Tahir/Registration-Form' demo='https://registration-form-two-sand.vercel.app/' />
        <ProjectCard title='Password Generator' imgsrc={Password} type='Personal Project' tec='Html, CSS, Javascript, React' git='https://github.com/Sehar-Tahir/Password-Generator' demo='https://password-generator-inky-eta.vercel.app/' />
        <ProjectCard title='EasyDo' imgsrc={EasyDo} type='Fellowship Project' tec='Html, CSS, Javascript, React' git='https://github.com/Sehar-Tahir/EasyDo' demo='https://easy-do.vercel.app/' />
        <ProjectCard title='ChatBOT' imgsrc={chatbot} type='Client Project' tec='No Code' git='https://drive.google.com/file/d/19oS3s1n63m9uC42ZnRiWRtgE_AOLlypQ/view?usp=drivesdk' demo='https://drive.google.com/file/d/19oS3s1n63m9uC42ZnRiWRtgE_AOLlypQ/view?usp=drivesdk' />

      </div>
    </div>
  )
}

export default Projects
