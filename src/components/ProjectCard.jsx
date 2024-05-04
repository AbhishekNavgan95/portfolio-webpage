import React from 'react'
import { FaDotCircle } from "react-icons/fa";

const ProjectCard = ({ project }) => {

    const colors = ['#07393c', '#1b2a41', '#30343f', '#362417', '#49111c', '#0d2818', '#3d1308'];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div className='px-5 py-5 w-full bg-light rounded-lg inline-block border border-accent-light hover:border-f-light transition-all duration-300'>
            <h3 className='flex items-center gap-3 mb-2 text-f-light'><FaDotCircle />{project?.name}</h3>
            <p className='text-lg line-clamp-2'>{project?.description}</p>
            <div className='flex gap-x-2 gap-y-2 flex-wrap text-lg my-2'>
                {
                    project.topics.length > 0 && project.topics.map((p, i) => (
                        p !== "show" &&
                        <span key={i}  style={{ backgroundColor: getRandomColor() }} className={`text-f-ligh font-bold px-5 rounded-full`}>{p}</span>
                    ))
                }
            </div>
            <div className='mt-4 text-lg flex items-center gap-5'>
                <a href={project?.html_url} target='_blank' className='underline text-blue-400 hover:text-blue-500 transition-all duration-300'>Github</a>
                {
                    project?.homepage &&
                    <a href={project?.homepage} target='_blank' className='underline text-blue-400 hover:text-blue-500 transition-all duration-300'>Live Demo</a>
                }
            </div>
        </div>
    )
}

export default ProjectCard