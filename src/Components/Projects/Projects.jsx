import ProjectCard from './ProjectCard'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'
import Project7 from '../../assets/Project7.png'
import Portfolio from '../../assets/Portfolio.png'

const Projects = () => {
  return (
    <div id='Projects' className='md:p-24 px-2 text-white md:mt-8'>
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>

      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">

        <ProjectCard title='Nexcent' imgsrc={Project2} tec='React Js, Tailwind Css' desc="Nexcent is a Company's Responsive Landing Page built 
        with React + Vite and Tailwind CSS used for stunning and visually appealing interface!" git='https://github.com/Sehar-Tahir/Nexcent-REACT_Landing_Page' demo='https://nexcent-react-landing-page.vercel.app/' />

        <ProjectCard title='Tailwind Project' imgsrc={Project3} tec='Html, CSS, Tailwind Css' desc='A stunning and Responsive Landing Page 
        Dev.Learnings created by Html, CSS and Tailwind Css. Responsive landing page design across all devices.' git='https://github.com/Sehar-Tahir/Responsive_Landing_Page-TailwindCss' demo='https://responsive-landing-page-tailwind-css.vercel.app/' />

        <ProjectCard title='Portfolio' imgsrc={Portfolio} tec='React Js, Tailwind Css, Email.js' desc='This is my portfolio Project, build with React and Tailwind CSS. Email.js is used for Email Functionality.' git='https://github.com/Sehar-Tahir/Sehar_Portfolio' demo='https://sehar-portfolio.vercel.app/' />

        <ProjectCard title='Web Dev Site' imgsrc={Project5} tec='React Js, Material UI' desc='
        Web Dev Site is a community platform where web developers connect, share, 
        and learn from each other. Built with Material UI components.' git='https://github.com/Sehar-Tahir/Web_Dev_Site' demo='https://web-dev-site-ten.vercel.app/' />

        <ProjectCard title='UniGradeBook' imgsrc={Project7} tec='React Js, Tailwind Css' desc='UniGradeBook is a website created for students to select their favourite professor for studies. and they can also see the results of their previous students.' git='https://github.com/Sehar-Tahir/UniGradebook' demo='https://uni-gradebook.vercel.app/' />

        <ProjectCard title='Bootstrap Project' imgsrc={Project6} tec='Html, CSS, Bootstrap' desc='Dev Learnings is a  responsive landing page created by html,
         CSS and bootstrap components are used to built this landing page.' git='https://github.com/Sehar-Tahir/Responsive_Landing_page' demo='https://responsive-landing-page-alpha.vercel.app/' />
      </div>
    </div>
  )
}

export default Projects
