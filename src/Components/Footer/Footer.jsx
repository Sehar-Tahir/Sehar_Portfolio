// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { CiLinkedin } from 'react-icons/ci'
// import { FaGithub } from 'react-icons/fa'
// import { MdOutlineEmail } from 'react-icons/md'

// const Footer = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm('service_r827kbh', 'template_of2im07', form.current, {
//                 publicKey: 'u7mIHzwd7itG66PkN',
//             })
//             .then(
//                 () => {
//                     alert('Message Sent!');
//                     form.current.reset();
//                 },
//                 (error) => {
//                     alert('FAILED...', error.text);
//                     form.current.reset();
//                 },
//             );
//     };
//     return (
//         <>
//             <div id='Contact' className='flex flex-col-reverse md:flex-row justify-around bg-slate-500 text-white dark:bg-[#202741] dark:text-white transition-all duration-300 p-10 md:p-12 items-center'>
//                     {/* <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-10 md:mt-4 items-center'>

//                         <input type="text" name='user_name' placeholder='Enter Your Name' autoComplete='off' required
//                             className='w-full mb-4 p-2 rounded bg-slate-900 text-white pl-4 text-sm border-2 dark:border-slate-500 border-slate-700' />

//                         <input type="email" name='user_email' placeholder='Enter Your Email' autoComplete='off' required
//                             className='w-full mb-4 p-2 rounded bg-slate-900 text-white pl-4 text-sm border-2 dark:border-slate-500 border-slate-700' />

//                         <textarea name="message" id="" cols={30} rows={6} placeholder='How Can I help you?' autoComplete='off'
//                             required className='mb-4 p-2 rounded bg-slate-900 text-white pl-4 text-sm border-2 dark:border-slate-500 border-slate-700'></textarea>

//                         <input type="submit" value='Get In Tounch' className='bg-slate-700 h-10 rounded-xl w-3/5
//                         border-2 border-slate-500 hover:scale-110 duration-300' />

//                     </form> */}

//                     <form
//   ref={form}
//   onSubmit={sendEmail}
//   className="flex flex-col mt-10 md:mt-6 items-center w-full max-w-lg mx-auto gap-4"
// >
//   <input
//     type="text"
//     name="user_name"
//     placeholder="Your Name"
//     autoComplete="off"
//     required
//     className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white text-sm border border-slate-700 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#465697] transition"
//   />

//   <input
//     type="email"
//     name="user_email"
//     placeholder="Your Email"
//     autoComplete="off"
//     required
//     className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white text-sm border border-slate-700 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#465697] transition"
//   />

//   <textarea
//     name="message"
//     rows={5}
//     placeholder="How can I help you?"
//     autoComplete="off"
//     required
//     className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white text-sm border border-slate-700 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#465697] transition resize-none"
//   ></textarea>

//   <input
//     type="submit"
//     value="Get In Touch"
//     className="mt-4 w-2/3 h-11 rounded-full bg-[#465697] text-white font-medium border border-[#465697]
//     hover:bg-[#35447a] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
//   />
// </form>

//                 <div className='flex flex-col justify-center items-center mt-4 md:mt-0 w-50'>
//                     <h2 className="text-xl md:text-4xl font-bold">Connect with me</h2>
//                     {/* <h3 className="text-sm md:text-xl font-semibold">Feel free to reach out!</h3> */}
//                     <ul className='mt-6 flex flex-col justify-center'>
//                         <li className='font-bold text-center'>You can reach me via email at:</li>
//                         <li className='flex items-center gap-1 text-sm font-semibold dark:text-gray-400 text-gray-300'><MdOutlineEmail className='mt-1' />sehartahirofficial@gmail.com</li>
//                     </ul>
//                     <ul className='text-sm md:text-xl flex justify-center items-center gap-4 md:flex-row md:gap-5 mt-4'>

//                         <a href="https://www.linkedin.com/in/sehartahir" target='_blank'
//                             className='flex gap-1 items-center md:text-sm hover:text-opacity-90 font-bold border-x-2 border-white p-2 rounded'>
//                             <CiLinkedin size={25} className='duration-300 hover:scale-125' />
//                             <li className='hover:text-gray-300'>Linkedin</li></a>

//                         <a href="https://github.com/Sehar-Tahir" target='_blank'
//                             className='flex gap-2 items-center md:text-sm hover:text-opacity-90 font-bold border-x-2 border-white p-2 rounded'>
//                             <FaGithub size={20} className='duration-300 hover:scale-125' />
//                             <li className='hover:text-gray-300'>Github</li></a>
//                     </ul>
//                 </div>
//             </div>
//             <div className='bg-[#a4aac5] text-[#171d32] dark:bg-[#171d32] dark:text-white transition-all duration-300 text-center p-4 text-xs'>
//                 <p className='dark:hover:text-gray-400 hover:text-gray-500'>&copy;{new Date().getFullYear()} Sehar Tahir &hearts; | All right reserved.</p>
//             </div>
//         </>
//     )
// }

// export default Footer

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_r827kbh',
      'template_of2im07',
      form.current,
      {
        publicKey: 'u7mIHzwd7itG66PkN',
      }
    ).then(
      () => {
        alert('Message Sent!')
        form.current.reset()
      },
      (error) => {
        alert('FAILED...', error.text)
        form.current.reset()
      }
    )
  }

  return (
    <>
      {/* CONTACT SECTION */}
      <div
        id="Contact"
        className="md:mx-10 mb-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-20 bg-slate-500 dark:bg-[#202741]
        text-white transition-all duration-300 p-10 md:p-16 items-center"
      >
        {/* LEFT — CONTACT FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center w-full max-w-lg mx-auto gap-4 md:ml-24"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            autoComplete="off"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white text-sm
            border border-slate-700 dark:border-slate-600
            focus:outline-none focus:ring-2 focus:ring-[#465697] transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            autoComplete="off"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white text-sm
            border border-slate-700 dark:border-slate-600
            focus:outline-none focus:ring-2 focus:ring-[#465697] transition"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="How can I help you?"
            autoComplete="off"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white text-sm
            border border-slate-700 dark:border-slate-600
            focus:outline-none focus:ring-2 focus:ring-[#465697]
            transition resize-none"
          ></textarea>

          <input
            type="submit"
            value="Get In Touch"
            className="mt-4 w-2/3 h-11 rounded-full bg-[#465697] text-white font-medium
            border border-[#465697] hover:bg-[#35447a] hover:scale-105
            transition-all duration-300 cursor-pointer shadow-md"
          />
        </form>

        {/* RIGHT — CONTACT INFO */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:ml-24">
          <h2 className="text-xl md:text-4xl font-bold">Connect with me</h2>

          <ul className="mt-6">
            <li className="font-bold">You can reach me via email at:</li>
            <li className="flex items-center gap-2 text-sm font-semibold
              dark:text-gray-400 text-gray-300 mt-2">
              <MdOutlineEmail />
              sehartahirofficial@gmail.com
            </li>
          </ul>

          <ul className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/sehartahir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold border-y-2 border-white
              px-4 py-2 rounded-lg hover:bg-white hover:text-[#202741]
              transition"
            >
              <CiLinkedin size={22} />
              Linkedin
            </a>

            <a
              href="https://github.com/Sehar-Tahir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold border-y-2 border-white
              px-4 py-2 rounded-lg hover:bg-white hover:text-[#202741]
              transition"
            >
              <FaGithub size={20} />
              Github
            </a>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="bg-[#a4aac5] text-[#171d32] dark:bg-[#171d32]
        dark:text-white transition-all duration-300 text-center p-4 text-xs">
        <p className="hover:text-gray-600 dark:hover:text-gray-400">
          &copy;{new Date().getFullYear()} Sehar Tahir ♥ | All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer

