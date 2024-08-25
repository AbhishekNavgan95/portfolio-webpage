import { useNavigate } from 'react-router-dom'
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ projects }) => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <h3 className='text-xl md:text-2xl text-f-light fet-one'>Project Highlights</h3>
                <p className='text-sm md:text-xl fet-two'>Proof that my ideas sometimes turn into real things.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-3'>
                {
                    projects && projects.length > 0 ? projects.map((project) => (
                        <div key={project.$id} className='fet-two'>
                            <ProjectCard project={project} />
                        </div>
                    ))
                        : <div className='text-2xl'>
                            Projects Not Found...
                        </div>
                }
            </div>
            <div className='text-base fet-two'>
            Visit my <a className='underline text-sky-500 cursor-pointer' target='_blank' href={import.meta.env.VITE_GITHUB}>GitHub</a> for more projects! There’s a little surprise there.
            </div>
        </div>
    )
}

export default Projects