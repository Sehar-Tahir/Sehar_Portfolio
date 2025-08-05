import Profile_icon from '../../assets/profile1.jpg'
// import { IoArrowForward } from 'react-icons/io5'
const About = () => {
    return (
        <div id='About' className='text-white dark:bg-[#202741] dark:text-white transition-all duration-300 md:flex overflow-hidden items-center md:flex-wrap md:justify-center
         bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 md:mb-4 md:mt-28'>
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row justify-center items-center md:items-center">
                    <img className='rounded-lg mt-5 md:h-80' src={Profile_icon} alt="profile icon" />
                    <ul>
                        <div className='flex gap-3 py-4 md:ml-20 mt-8 md:mt-0'>
                            {/* <IoArrowForward size={30} className='mt-1 dark:text-white text-[#202741]' /> */}
                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-bold leading-normal dark:text-white text-[#465697]">Frontened React Developer</h1>
                                <p className='text-sm md:text-md leading-tight mt-1'>I&#39;m Sehar Tahir, a Front-end React Developer with
                                    a passion of developing different, complex and responsive web applications. My Skills include Html, Css,
                                    JavaScript, Css Frameworks like Bootstrap & Tailwind Css, Daisy UI, Material UI and React Js. I love to work on
                                    web applications using technologies like React with Tailwind Css. Currently, I&#39;m expanding my
                                    knowledge by learning backend development [MERN Stack].</p>
                            </span>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
