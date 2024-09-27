import React from 'react'

const Experience = () => {
    return (
        <>
            <h2 className=" text-white text-2xl md:text-4xl font-bold text-center md:mt-20 mt-4">Experience</h2>
            <div id='Experience' className='flex flex-col justify-center items-center gap-6 md:gap-2 mt-4 md:mt-0 m-8'>

                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mt-28 mt-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>React & Next.Js Fellowship</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
                            Bytewise Limited | June 2024 - August 2024
                        </p>
                        <p className='text-sm md:text-md leading-tight text-yellow-300'>
                        &#9733; Awarded as a Top Performer for the month (June)</p>
                        <p>
                            It was an amazing oppurtunity to learn & deep dive into web development. During this fellowship,
                            I had learnt a lot about web development, frontened technologies React , Material UI, Tailwind Css,
                            and Next Js.
                        </p>
                    </div>
                </div>


                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>Web Dev Internship</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
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
