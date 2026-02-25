import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';


const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  // Theme state with localStorage default value 
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });


  // On first load default dark theme, Update theme class on theme change
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Theme toggle logic
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <nav className='fixed w-[100vw] flex flex-wrap md:justify-between md:items-center text-white px-10 pt-6 md:px-20
     md:bg-black md:shadow-xl md:bg-opacity-30'>

      <span className='text-xl font-bold tracking-wide text-[#465697] dark:text-white md:text-white dark:border-white md:border-[#fff] border-t-2 hover:scale-105 duration-300 hover:border-[#465697] border-[#465697]'>Sehar Tahir</span>

      <div className={`${menu ? 'block' : 'hidden'} mx-24 py-2 mt-4 font-semibold md:mt-5 md:px-2 rounded-xl md:bg-opacity-30 
      md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex md:gap-6 flex justify-end pl-28`}>

        <ul className='flex md:gap-8 flex-col gap-2 md:flex-row'>

          <a href="#Home"><li className='text-md transition-all duration-300 md:p-0 hover:scale-110 hover:text-gray-300
           md:bg-transparent md:bg-opacity-30  bg-[#465697] rounded px-1 py-1 '>Home</li></a>
          <a href="#About"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-110 hover:text-gray-300
           md:bg-transparent md:bg-opacity-30  bg-[#465697] rounded px-1 '>About</li></a>
          <a href="#Skills"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-110 hover:text-gray-300
           md:bg-transparent md:bg-opacity-30  bg-[#465697] rounded px-1 '>Skills</li></a>
          <a href="#Projects"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-110 hover:text-gray-300
           md:bg-transparent md:bg-opacity-30  bg-[#465697] rounded px-1 '>Projects</li></a>
          <a href="#Experience"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-110 hover:text-gray-300
           md:bg-transparent md:bg-opacity-30  bg-[#465697] rounded px-1 '>Experience</li></a>
          <a href="#Certifications"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-110 hover:text-gray-300
           md:bg-transparent md:bg-opacity-30  bg-[#465697] rounded px-1 '>Certifications</li></a>
          <a href="#Contact"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:scale-110 hover:text-gray-300
           md:bg-transparent md:bg-opacity-30  bg-[#465697] rounded px-1 '>Contact</li></a>
        </ul>
      </div>

      <div className='flex justify-content-center items-center md:justify-end'>
        <button
          onClick={toggleTheme}
          className='absolute right-20 top-7 md:top-14 text-xl text-white md:right-10 transition-all duration-300'
        >
          {theme === 'dark' ? <FaMoon /> : <FaSun className='text-[#465697] md:text-white' />}
        </button>

        {showMenu ? (
          <RiMenu2Line size={30} className='md:hidden dark:text-white text-[#465697] md:text-white absolute right-10 top-6 transition-all duration-300' onClick={() => {
            openMenu(!menu); setShowMenu(!showMenu);
          }} />

        ) : <RiCloseLine size={30} className='md:hidden dark:text-white text-[#465697] md:text-white absolute right-10 top-6 transition-all duration-300' onClick={() => {
          openMenu(false); setShowMenu(true)
        }}
        />
        }
      </div>
    </nav>
  )
}

export default Navbar
