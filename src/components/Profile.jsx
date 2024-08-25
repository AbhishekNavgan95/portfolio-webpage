import React, { useEffect } from 'react'
import me from '../assets/me.png'
import Para from '../components/Para'
import CtaButton from '../components/CtaButton'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

const Profile = () => {

    return (
        <>
            <img src={me} className='two  rounded-full mt-2 border grayscale aspect-square object-cover max-w-[150px] xl:max-w-[200px]' alt="" />
            <span className='flex flex-col gap-5 md:gap-7 '>
                <span className='overflow-hidden'>
                    <Para>
                        Hello 👋, I'm Abhishek Navgan, a developer with a
                        not-so-secret obsession with tech. I'm currently
                        pursuing a Bachelor of Computer Applications degree
                        at TMV Pune, where I spend most of my time coding,
                        diving into development, and attending lectures that
                        don't always capture my interest.
                        I love creating websites and software,
                        especially with the MERN stack — because, you know,
                        who doesn't like to hate JavaScript, right?
                        <br /> <br />
                        While I'm mostly focused on coding, I've got
                        a soft spot for web design (even if I'm not
                        actively chasing that rabbit hole right now,
                        one day I definitely will). I'm a big fan
                        of cool cars, gaming, computers, and 'gaming
                        computers' — because, why not have more than
                        one expensive hobby, right?
                        <br /> <br />
                        And yeah, I have a bit of a perfectionist streak
                        — I can't resist tweaking things until they feel
                        just right... or until I've spent way too much
                        time on them (like this website 😉).
                    </Para>
                </span>
                <span className='overflow-hidden py-2 flex gap-3'>
                    <span className='two'>
                        <CtaButton link="mailto:navganabhishek90@gmail.com">Email<IoIosArrowForward /></CtaButton>
                    </span>
                    <span className='two'>
                        <CtaButton target='_blank' link="AbhishekNavgan.pdf" >
                            <IoMdDownload />
                            <span >Resume</span>
                        </CtaButton>
                    </span>
                </span>
            </span>
        </>
    )
}

export default Profile