import React, { useState, useEffect, useMemo } from 'react'
import Header from '../components/Header'
import Para from '../components/Para'
import CtaButton from '../components/CtaButton'
import Frame from '../components/Frame'
import LinkBtn from '../components/LinkBtn'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { url, skills } from '../data/constants'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'
import GSAP from '../components/GSAP'

const Home = () => {

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const res = await axios.get("https://api.github.com/users/AbhishekNavgan95/repos");
        setProjects(res.data.filter((a) => a?.topics.includes("show")))
    }

    useMemo(() => {
        getProjects();
    }, [])

    return (
        <>
            <GSAP projects={projects} />
            <div className='mx-auto'>
                <Header text={"Full Stack-Web Developer </>,-CS Student 📘,-Tech Enthusiast 👨‍💻."} />
                <Frame>
                    <div className='py-5 flex flex-col items-start gap-7'>
                        <span className='overflow-hidden'>
                            <Para>
                                Hi👋 I'm Abhishek Navgan, a Bachelor of Computer Application student at TMV Pune. I enjoy crafting creative websites and software using various technologies, specializing particularly in web development with the MERN stack 💫.
                            </Para>
                        </span>
                        <span className='overflow-hidden'>
                            <Para>
                                Besides coding, I like to stay updated on the latest global tech innovations, especially in hardware, automobiles 🚕 amd aviation 🛫. One of my quirks is striving for pixel-perfection — I can't resist tweaking something until it feels just right! (Although I might overdo it sometimes 😉)
                            </Para>
                        </span>
                        <span className='overflow-hidden py-2'>
                            <span className='two'>
                                <CtaButton link="mailto:navganabhishek90@gmail.com">Email me</CtaButton>
                            </span>
                        </span>
                    </div>
                </Frame>

                <div className='py-10 flex flex-col'>
                    <LinkBtn link={url.github_url}>
                        <FaGithub className='' />
                        <span className='w-1/2 transition-all h-[1px] bg-accent group-hover:bg-f-light'></span>
                        <MdArrowOutward className='group-hover:rotate-45 transition-transform' />
                    </LinkBtn>
                    <LinkBtn link={url.linkedin_url}>
                        <FaLinkedinIn className='' />
                        <span className='w-1/2 transition-all h-[1px] bg-accent group-hover:bg-f-light'></span>
                        <MdArrowOutward className='group-hover:rotate-45 transition-transform' />
                    </LinkBtn>
                    <LinkBtn link={url.instagram_url}>
                        <FaInstagram className='' />
                        <span className='w-1/2 transition-all h-[1px] bg-accent group-hover:bg-f-light'></span>
                        <MdArrowOutward className='group-hover:rotate-45 transition-transform' />
                    </LinkBtn>
                    <LinkBtn link={url.twitter_url}>
                        <FaXTwitter className='' />
                        <span className='w-1/2 transition-all h-[1px] bg-accent group-hover:bg-f-light'></span>
                        <MdArrowOutward className='group-hover:rotate-45 transition-transform' />
                    </LinkBtn>
                </div>

                <div className='bg-dark py-10 text-xl' id='skills'>
                    <Frame>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-5'>
                                <h3 className='text-2xl text-f-light skill-one'>Skills</h3>
                                <p className='skill-one'>Tech which I have worked with.</p>
                            </div>
                            <div className='flex gap-x-5 gap-y-3 flex-wrap items-center justify-center my-5'>
                                {
                                    skills.map((skill, index) => (
                                        <span key={index} className='skill-three px-4 transition-all duration-300 bg-light py-1 border rounded-lg border-accent-light'>{skill}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </Frame>
                </div>

                <div className='bg-dark py-10 text-xl' id='fetured-projects'>
                    <Frame>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-5'>
                                <h3 className='text-2xl text-f-light fet-one'>Featured Projects</h3>
                                <p className='fet-two'>A collection of some side projects I have done.</p>
                            </div>
                            <div className='flex flex-col gap-5 py-5 '>
                                {
                                    projects.length > 0 ? projects.map((project) => (
                                        <div key={project.id} className='fet-two'>
                                            <ProjectCard project={project} />
                                        </div>
                                    ))
                                        : <div className='text-2xl'>
                                            Projects Not Found...
                                        </div>
                                }
                            </div>
                        </div>
                    </Frame>
                </div>

            </div>
        </>
    )
}

export default Home