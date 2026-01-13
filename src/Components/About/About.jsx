import Profile_icon from '../../assets/profile.jpg'
const About = () => {
    return (
        <div id='About' className='text-white dark:bg-[#202741] dark:text-white transition-all duration-300 md:flex overflow-hidden items-center md:flex-wrap md:justify-center
         bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 md:mb-4 md:mt-28'>
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
                <div className="border-[#465697] border-b-2 w-36 mt-3 dark:border-white"></div>

                <div className="md:flex flex-wrap flex-col md:flex-row justify-center items-center md:items-center">
                    <img className='rounded-lg mt-5 md:h-80' src={Profile_icon} alt="profile icon" />
                    <ul>
                        <div className='flex gap-3 py-4 md:ml-20 mt-8 md:mt-0'>
                            <span className='w-96'>
                                <h1 className="text-xl md:text-4xl font-bold leading-normal dark:text-white text-[#465697]">Web Developer</h1>
                                <p className='text-sm md:text-md leading-tight mt-3'>
                                    I’m Sehar Tahir, a Web Developer focused on building clean, responsive,
                                    and high-performing web applications. I specialize in creating smooth
                                    user experiences using HTML, CSS, JavaScript, React, and modern UI
                                    frameworks like Tailwind CSS, Bootstrap, DaisyUI, and Material UI.
                                    Currently, I’m expanding my skills by learning backend development
                                    with the MERN stack.
                                </p>

                                {/* Stats Section */}
                                <div className="flex flex-wrap gap-6 mt-6 justify-start">

                                    <div className="text-center">
                                        <h3 className="text-xl md:text-4xl font-bold text-[#465697] dark:text-white">
                                            25+
                                        </h3>
                                        <p className="text-sm md:text-base mt-1">Projects</p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-xl md:text-4xl font-bold text-[#465697] dark:text-white">
                                            6
                                        </h3>
                                        <p className="text-sm md:text-base mt-1">Courses Completed</p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-xl md:text-4xl font-bold text-[#465697] dark:text-white">
                                            2
                                        </h3>
                                        <p className="text-sm md:text-base mt-1">Internships</p>
                                    </div>

                                </div>

                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
