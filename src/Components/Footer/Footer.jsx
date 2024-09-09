import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_r827kbh', 'template_of2im07', form.current, {
                publicKey: 'u7mIHzwd7itG66PkN',
            })
            .then(
                () => {
                    alert('Message Sent!');
                    form.current.reset();
                },
                (error) => {
                    alert('FAILED...', error.text);
                    form.current.reset();
                },
            );
    };
    return (
        <>
            <div id='Contact' className='flex flex-col-reverse md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
                <div>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-4 items-center'>

                        <input type="text" name='user_name' placeholder='Enter Your Name' autoComplete='off' required
                            className='w-full mb-4 p-2 rounded bg-slate-900 text-white pl-4 text-sm' />

                        <input type="email" name='user_email' placeholder='Enter Your Email' autoComplete='off' required
                            className='w-full mb-4 p-2 rounded bg-slate-900 text-white pl-4 text-sm' />

                        <textarea name="message" id="" cols={30} rows={6} placeholder='How Can I help you?' autoComplete='off'
                            required className='mb-4 p-2 rounded bg-slate-900 text-white pl-4 text-sm'></textarea>

                        <input type="submit" value='Get In Tounch' className='bg-slate-700 h-8 rounded w-3/5' />

                    </form>
                </div>

                <div className='flex flex-col justify-center items-center mt-4 md:mt-0'>
                    <h2 className="text-xl md:text-4xl font-bold">Connect with me</h2>
                    <h3 className="text-sm md:text-xl font-semibold">Feel free to reach out!</h3>
                    <ul className='mt-6 flex flex-col justify-center'>
                        <li className='font-semibold text-center'>You can reach me via email at:</li>
                        <li className='flex items-center gap-1 font-semibold'><MdOutlineEmail className='mt-1' />sehartahirofficial@gmail.com</li>
                    </ul>
                    <ul className='text-sm md:text-xl flex justify-center items-center md:flex-row md:gap-5 mt-4'>

                        <a href="https://www.linkedin.com/in/sehartahir" target='_blank'
                            className='flex gap-1 items-center hover:text-opacity-90 font-semibold md:border-2 border-white p-2 rounded'>
                            <CiLinkedin size={25} className='duration-300 hover:scale-125' />
                            <li className='hover:text-gray-300'>Linkedin</li></a>

                        <a href="https://github.com/Sehar-Tahir" target='_blank'
                            className='flex gap-2 items-center hover:text-opacity-90 font-semibold md:border-2 border-white p-2 rounded'>
                            <FaGithub size={20} className='duration-300 hover:scale-125' />
                            <li className='hover:text-gray-300'>Github</li></a>
                    </ul>
                </div>
            </div>
            <div className=' text-white text-center my-2 hover:text-gray-300 text-xs'>
                <p>&copy; 2024 ST Portfolio &hearts; | All Right reserved.</p>
            </div>
        </>
    )
}

export default Footer
