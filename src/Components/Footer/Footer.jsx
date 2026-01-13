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
        className="md:mx-10 mb-5 rounded-lg md:flex flex-col justify-content-center gap-16 bg-slate-500 dark:bg-[#202741]
        text-white transition-all duration-300 p-10 md:p-16 items-center"
      >
        {/* LEFT — CONTACT FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center w-full max-w-lg mx-auto gap-4"
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
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mt-10">
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

