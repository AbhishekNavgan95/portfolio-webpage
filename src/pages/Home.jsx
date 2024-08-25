import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Frame from '../components/Frame'
import GSAP from '../components/GSAP'
import Footer from '../components/Footer'
import GSAPprojects from '../components/GSAPprojects'
import { getProjects } from '../config/appwrite'
import Skills from '../components/Skills'
import Profile from '../components/Profile'
import Links from '../components/Links'
import { skills } from "../data/constants"
import Projects from '../components/Projects'

const Home = () => {

    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await getProjects()
            setProjects(response)
        } catch (e) {
            console.log("error fetching projects : ", e);
        }
    }

    useEffect(() => {
        fetchProjects()
    }, []);

    return (
        <>
            <GSAP skills={skills} />
            <GSAPprojects projects={projects} />
            <div className='mx-auto '>
                <Header text={"Full Stack Web Dev by 🌤️,-CS undergrad by 🌙,-Passionate Student 📖."} />

                <Frame>
                    <div className='py-5 flex flex-col lg:flex-row-reverse items-start gap-y-5 gap-x-10 w-full'>
                        <Profile />
                    </div>
                </Frame>

                <div className='flex flex-col w-full my-5' id='social'>
                    <Frame>
                        <div className='flex flex-col w-full items-start gap-3 pb-3'>
                            <h3 className='text-xl md:text-2xl text-f-light social'>Get in Touch</h3>
                            <p className='text-sm md:text-xl social'>Or just admire my usernames, no pressure.</p>
                        </div>
                    </Frame>
                    <Links />
                </div>

                <div className='bg-dark py-10 text-xl' id='skills'>
                    <Frame>
                        <Skills />
                    </Frame>
                </div>

                <div className='bg-dark pb-5 text-xl' id='fetured-projects'>
                    <Frame>
                        <Projects projects={projects} />
                    </Frame>
                </div>

                <footer id='footer' className='bg-dark pt-3'>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Home