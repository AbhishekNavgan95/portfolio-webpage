import React from 'react'
import LinkBtn from './LinkBtn'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { url } from '../data/constants'

const Links = () => {
    return (
        <>
            <LinkBtn link={url.instagram_url}>
                <FaInstagram className='' />
                <span className='w-1/2 h-[1px] bg-accent group-hover:bg-dark'></span>
                <MdArrowOutward className='group-hover:rotate-45 group-focus:rotate-45  transition-transform' />
            </LinkBtn>
            <LinkBtn link={url.github_url}>
                <FaGithub className='' />
                <span className='w-1/2 h-[1px] bg-accent group-hover:bg-dark'></span>
                <MdArrowOutward className='group-hover:rotate-45 group-focus:rotate-45  transition-transform' />
            </LinkBtn>
            <LinkBtn link={url.linkedin_url}>
                <FaLinkedinIn className='' />
                <span className='w-1/2 h-[1px] bg-accent group-hover:bg-dark'></span>
                <MdArrowOutward className='group-hover:rotate-45 group-focus:rotate-45  transition-transform' />
            </LinkBtn>
            <LinkBtn link={url.twitter_url}>
                <FaXTwitter className='' />
                <span className='w-1/2 h-[1px] bg-accent group-hover:bg-dark'></span>
                <MdArrowOutward className='group-hover:rotate-45 group-focus:rotate-45  transition-transform' />
            </LinkBtn>
        </>
    )
}

export default Links