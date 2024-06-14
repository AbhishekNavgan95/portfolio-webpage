import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoMdDownload } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import Frame from './Frame';
import MobileNav from './MobileNav';
import GSAPNav from './GSAPNav';

const Navbar = () => {

  const [mobileNavActive, setMobileNavActive] = useState(false);


  return (
    <nav className='fixed z-[5] w-full border-b py-5 bg-dark-blur border-accent-light nav-one backdrop-blur-sm'>
      <GSAPNav />
      <Frame>
        <div className='flex flex-row gap-y-5 justify-between items-center relative z-[4]'>
          <Link to={"/"} className=' text-2xl'>
            <h1 className='text-f-light nav-two'>Abhishek Navgan</h1>
          </Link>
          <div className='md:flex gap-x-5 md:gap-10 items-center hidden'>
            <span className='nav-three'>
              <NavLink className={({ isActive }) => isActive ? "px-2 py-1 text-f-light border-b-2 transition-all duration-400 " : "py-1 px-2 border-b-2 border-transparent transition-all duration-400 hover:text-f-light"} to={"/"}>Home</NavLink>
            </span>
            <span className='nav-three'>
              <NavLink className={({ isActive }) => isActive ? "px-2 py-1 text-f-light border-b-2 transition-all duration-400 " : "py-1 px-2 border-b-2 border-transparent transition-all duration-400 hover:text-f-light"} to={"/about"}>About</NavLink>
            </span>
            <span className='nav-three'>
              <a href="AbhishekNavgan.pdf" target='_blank' className='flex items-center gap-3 hover:text-f-light transition-all duration-300'><span className='text-xl'><IoMdDownload /></span>Resume</a>
            </span>
          </div>
          <div className='md:hidden text-f-light text-xl cursor-pointer transition-all duration-100 user-select-none' onClick={() => setMobileNavActive(!mobileNavActive)}>
            <RiMenu3Fill />
          </div>
        </div>
      </Frame>
      <MobileNav mobileNavActive={mobileNavActive} setMobileNavActive={setMobileNavActive} />
    </nav>
  )
}

export default Navbar