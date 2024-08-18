import React, { useState, useMemo } from 'react'
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
import { IoIosArrowForward } from "react-icons/io";
import me from '../assets/me.png'
import Footer from '../components/Footer'
import GSAPprojects from '../components/GSAPprojects'
import { IoMdDownload } from "react-icons/io";

const Home = () => {

    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
        const res = await axios.get("https://api.github.com/users/AbhishekNavgan95/repos");
        setTimeout(() => {
            setProjects(res.data.filter((a) => a?.topics.includes("show")))
        }, 1000);
    }

    useMemo(() => {
        getProjects();
    }, [])

    return (
        <>
            <GSAP skills={skills} />
            <GSAPprojects projects={projects} />
            <div className='mx-auto'>
                <Header text={"Full Stack </>-Web Developer, -CS undergrad 🖥️ -Passionate Student 📖."} />
                <Frame>
                    <div className='md:py-5 flex flex-col lg:flex-row items-start gap-7 w-full'>
                        <img src={me} className='two rounded-full mt-2 border grayscale aspect-square object-cover  max-w-[150px] xl:max-w-[200px]' alt="" />
                        <span className='flex flex-col gap-5 md:gap-7 '>
                            <span className='overflow-hidden'>
                                <Para>
                                    Hi👋 I'm Abhishek Navgan, a passionate developer and technology enthusiast
                                    on a journey to master the world of IT. I'm currently pursuing a Bachelor of
                                    Computer Application at TMV Pune, where I focus on coding and development.
                                    I enjoy crafting creative websites and software using various technologies,
                                    specializing particularly in web development with the MERN stack 💫.
                                </Para>
                            </span>
                            <span className='overflow-hidden'>
                                <Para>
                                    Besides coding, I have a strong passion
                                    for web design, though I'm not actively pursuing that path right now.
                                    My enthusiasm for computers, automobiles 🚕, and gaming 🛫 plays a
                                    significant role in my daily life. I have a bit of a perfectionist streak —
                                    I can't resist fine-tuning something until it feels just right, even if it
                                    means going a little overboard sometimes! 😉
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
                    </div>
                </Frame>

                <div className='py-5 md:py-10 flex flex-col'>
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
                    <LinkBtn link={url.instagram_url}>
                        <FaInstagram className='' />
                        <span className='w-1/2 h-[1px] bg-accent group-hover:bg-dark'></span>
                        <MdArrowOutward className='group-hover:rotate-45 group-focus:rotate-45  transition-transform' />
                    </LinkBtn>
                    <LinkBtn link={url.twitter_url}>
                        <FaXTwitter className='' />
                        <span className='w-1/2 h-[1px] bg-accent group-hover:bg-dark'></span>
                        <MdArrowOutward className='group-hover:rotate-45 group-focus:rotate-45  transition-transform' />
                    </LinkBtn>
                </div>

                <div className='bg-dark pt-5 md:py-10 text-xl' id='skills'>
                    <Frame>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-5'>
                                <h3 className='text-xl md:text-2xl text-f-light skill-one'>Tech Stack</h3>
                                <p className='text-sm md:text-xl skill-one'>Tech which I have worked with.</p>
                            </div>
                            <div className='flex gap-x-3 md:gap-x-5 gap-y-3 flex-wrap items-center justify-center my-5 skill-one'>
                                {
                                    skills.map((skill, index) => (
                                        <span key={index} className='text-sm md:text-xl skill-three p-3 transition-all duration-300 bg-dark border rounded-lg border-accent-light text-nowrap backdrop-blur-xl '>
                                            <img className='w-[30px] md:w-[50px] aspect-square' src={skill?.URL} alt="" />
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </Frame>
                </div>

                <div className='bg-dark py-5 md:py-10 text-xl' id='fetured-projects'>
                    <Frame>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-5'>
                                <h3 className='text-xl md:text-2xl text-f-light fet-one'>Featured Projects</h3>
                                <p className='text-sm md:text-xl fet-two'>A collection of some of my side projects.</p>
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

                <footer id='footer' className='bg-dark'>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Home