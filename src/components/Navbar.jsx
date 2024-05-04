import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoMdDownload } from "react-icons/io";
import Frame from './Frame';

const Navbar = () => {
  return (
    <nav className='fixed w-full border-b py-5 bg-[#000000c6] border-accent-light px-4 nav-one'>
      <Frame>
        <div className='flex justify-between items-center'>
          <Link to={"/"} className=' text-2xl'>
            <h1 className='text-f-light nav-two'>Abhishek Navgan</h1>
          </Link>
          <div className='md:flex gap-10 items-center hidden'>
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
        </div>
      </Frame>
    </nav>
  )
}

export default Navbar