import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMdDownload } from "react-icons/io";

const MobileNav = ({ mobileNavActive, setMobileNavActive }) => {
    return (
        <div className={`${mobileNavActive ? "flex" : "hidden"} justify-center items-center fixed w-full h-screen top-0 z-[3] bg-dark-blur backdrop-blur-xl md:hidden`} onClick={() => setMobileNavActive(!mobileNavActive)}>
            <div className='flex flex-col gap-y-5 items-center text-2xl'>
                <NavLink className={({ isActive }) => isActive ? "px-2 py-1 text-f-light border-b-2 transition-all duration-400 " : "py-1 px-2 border-b-2 border-transparent transition-all duration-400 hover:text-f-light"} to={"/"}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "px-2 py-1 text-f-light border-b-2 transition-all duration-400 " : "py-1 px-2 border-b-2 border-transparent transition-all duration-400 hover:text-f-light"} to={"/about"}>About</NavLink>
                <a href="AbhishekNavgan.pdf" target='_blank' className='flex items-center gap-3 hover:text-f-light transition-all duration-300'><span className='text-xl'><IoMdDownload /></span>Resume</a>
            </div>
        </div>
    )
}

export default MobileNav