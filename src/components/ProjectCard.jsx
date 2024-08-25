import React, { useEffect, useState } from 'react'
import { FaDotCircle } from "react-icons/fa";
import { getImageUrl } from '../config/appwrite';

const ProjectCard = ({ project }) => {

    const [imageUrl, setImageUrl] = useState('');
    const colors = ['#07393c', '#1b2a41', '#30343f', '#362417', '#49111c', '#0d2818', '#3d1308'];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    useEffect(() => {
        setImageUrl(getImageUrl(project?.imageUrl))
    }, [project])

    return (
        <div className='group w-full overflow-hidden flex flex-col gap-3 bg-light rounded-lg border border-accent-light transition-all duration-300 backdrop-blur-lg'>
            <div className='overflow-hidden hidden lg:block'>
                <img src={imageUrl} alt="" className=' lg:blur-sm group-hover:blur-0 transition-all duration-300 group-hover:scale-[1.02] aspect-video object-cover ' />
            </div>
            <div className='pb-3 px-3 flex flex-col gap-3'>
                <h3 className='flex pt-3 lg:pt-0 items-center gap-3 text-lg md:text-xl text-f-light '><FaDotCircle />{project?.title}</h3>
                <p className='text-sm md:text-lg line-clamp-2'>{project?.description}</p>
                <div className=''>
                    {
                        project?.tags?.split(",")?.map((tag, index) => (
                            <span key={index} style={{ backgroundColor: getRandomColor() }} className='text-xs md:text-sm px-3 text-f-light py-1 rounded-full bg-accent-light mr-2 mb-2 inline-block'>{tag}</span>
                        ))
                    }
                </div>
                <div className='text-lg flex items-center justify-center md:justify-start gap-3'>
                    <a href={project?.githubUrl} target='_blank' className='underline text-blue-400 hover:text-blue-500 transition-all duration-300'>Github</a>
                    <a href={project?.projectUrl} target='_blank' className='underline text-blue-400 hover:text-blue-500 transition-all duration-300'>Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard