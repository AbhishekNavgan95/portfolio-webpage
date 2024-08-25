import React from 'react'
import { skills } from "../data/constants"

const Skills = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
                <h3 className='text-xl md:text-2xl text-f-light skill-one'>Tech Stack</h3>
                <p className='text-sm md:text-xl skill-one'>A collection of languages and frameworks that haven't made me cry... yet.</p>
            </div>
            <div className='flex gap-x-3 md:gap-x-5 gap-y-3 flex-wrap items-center justify-center my-3 skill-one'>
                {
                    skills.map((skill, index) => (
                        <span key={index} className='text-sm md:text-xl skill-three p-3 transition-all duration-300 bg-dark border rounded-lg border-accent-light text-nowrap backdrop-blur-xl '>
                            <img className='w-[30px] md:w-[50px] aspect-square' src={skill?.URL} alt="" />
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills