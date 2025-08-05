const Experience = () => {
    return (
        <>
            <h2 className="transition-all duration-300 bg-white text-[#465697] dark:bg-[#171d32] dark:text-white text-2xl md:text-4xl font-bold text-center md:mt-20 mt-4">Experience</h2>
            <div id='Experience' className='flex flex-col justify-center items-center gap-6 md:gap-2 mt-4 md:mt-0 m-8'>


                <div className='border-l-4 border-[#465697] dark:border-white text-white bg-[#202741] bg-opacity-30 rounded-lg p-3 md:mb-4 md:mt-28 mt-4 md:mx-24 hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg'>
                    <div className='flex gap-3 py-6 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl text-[#465697] dark:text-white'>React & Next.Js Fellowship</h1>
                        <p className='text-sm md:text-md leading-tight dark:text-slate-400 text-slate-600'>
                            Bytewise Limited | June 2024 - September 2024
                        </p>
                        <p className='text-sm md:text-md leading-tight dark:text-yellow-300 text-yellow-300'>
                        &#9733; Awarded as a Top Performer of the Month</p>
                        <p className="">
                            It was an amazing opportunity to learn & deep dive into web development. During this fellowship,
                            I had learnt a lot about web development, frontened technologies React , Material UI, Tailwind Css,
                            and Next Js.
                        </p>
                    </div>
                </div>


                <div className='border-l-4 border-[#465697] dark:border-white text-white bg-[#202741] bg-opacity-30 rounded-lg p-4 md:mb-4 md:mx-24 hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-lg'>
                    <div className='flex gap-3 py-6 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl text-[#465697] dark:text-white'>Web Dev Internship</h1>
                        <p className='text-sm md:text-md leading-tight dark:text-slate-400 text-slate-600'>
                            Code Alpha | April 2024
                        </p>
                        <p>
                            During this remote internship, my role is to create web applications using Html, CSS and JavaScript. While
                            creating my internship projects I had also learnt about how to integrate APIs in different Projects.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Experience
