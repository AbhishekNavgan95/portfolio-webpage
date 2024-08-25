import React from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";



const BackToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div onClick={scrollToTop} className='p-3 text-xl z-10 cursor-pointer transition-all duration-300 fixed bg-f-light border text-dark font-bold bottom-[2rem] right-10 flex items-center justify-center rounded-full'>
            <IoMdArrowRoundUp />
        </div>
    )
}

export default BackToTop