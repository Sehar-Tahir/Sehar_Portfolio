const Experience = () => {
    return (
        <>
        <div className="mt-28">
            <h2 className="transition-all duration-300 bg-white text-[#465697] dark:bg-[#171d32] dark:text-white text-2xl md:text-4xl font-bold text-center">Experience</h2>
            <div className="border-[#465697] border-b-2 w-40 mx-auto mt-3 dark:border-white"></div>
            <div id='Experience' className='flex flex-col justify-center items-center gap-4 md:gap-6 mt-8'>


                <div className='border-y-2 border-[#465697] dark:border-white text-white bg-[#202741] bg-opacity-30 rounded-lg p-3 md:mb-4 md:mt-10 mt-4 md:mx-24 m-5 md:m-0 hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg'>
                    <div className='flex gap-3 py-6 md:px-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl text-[#465697] dark:text-white'>React & Next.Js Fellowship</h1>
                        <p className='text-sm md:text-md leading-tight dark:text-slate-400 text-slate-600'>
                            Bytewise Limited | June 2024 - September 2024
                        </p>
                        <p className='text-sm md:text-md leading-tight dark:text-yellow-300 text-yellow-300'>
                            &#9733; Awarded as a Top Performer of the Month</p>
                        <p className="">
                            This fellowship provided hands-on experience and a strong foundation in modern frontend development.
                            I worked extensively with React to build responsive and reusable user interfaces, while using
                            Material UI and Tailwind CSS to create clean, accessible, and visually consistent designs.
                            The experience strengthened my understanding of component-based architecture,
                            and best practices for building frontend websites.
                        </p>
                    </div>
                </div>


                <div className='border-y-2 border-[#465697] dark:border-white text-white bg-[#202741] bg-opacity-30 rounded-lg p-4 md:mb-4 md:mx-24 hover:scale-[1.02] m-5 md:m-0 transition-transform duration-300 ease-in-out shadow-lg'>
                    <div className='flex gap-3 py-6 md:px-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl text-[#465697] dark:text-white'>Web Dev Internship</h1>
                        <p className='text-sm md:text-md leading-tight dark:text-slate-400 text-slate-600'>
                            Code Alpha | April 2024
                        </p>
                        <p>
                            During this remote internship, I developed web applications using HTML, CSS, and JavaScript.
                            I worked on multiple real-world projects and gained practical experience integrating APIs,
                            improving functionality, and building interactive user interfaces following best development practices.
                        </p>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}

export default Experience
