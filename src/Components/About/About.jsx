import React from 'react'
import Profile_icon from '../../assets/profile1.jpg'
import { IoArrowForward } from 'react-icons/io5'
const About = () => {
    return (
        <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center
         bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 md:mb-4 md:mt-28'>
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row justify-center items-center md:items-center">
                    <img className='rounded-lg mt-5 md:h-80' src={Profile_icon} alt="profile icon" />
                    <ul>
                        <div className='flex gap-3 py-4 md:ml-20 mt-8 md:mt-0'>
                            <IoArrowForward size={30} className='mt-1' />
                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontened React Developer</h1>
                                <p className='text-sm md:text-md leading-tight mt-1'>I'm Sehar Tahir, a front-end react developer with
                                    a passion of developing different, complex and responsive web applications. My Skills include Html, Css,
                                    JavaScript, Css Frameworks i.e Bootstrap & Tailwind Css, React Js and Material UI. I love to work on
                                    web applications using technologies like React, Tailwind Css and Next Js. Currently, I'm expanding my
                                    knowledge by learning Next js. </p>
                            </span>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
