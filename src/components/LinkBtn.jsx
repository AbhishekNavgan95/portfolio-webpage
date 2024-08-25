import React from 'react'
import Frame from './Frame'

const LinkBtn = ({ children, link }) => {
    return (
        <a href={link} target='_blank' className='text-lg md:text-2xl hover:text-dark 
        hover:font-bold group bg-dark md:bg-light hover:bg-f-light
        focus:bg-dark outline-none transition-all duration-300 py-3 
        overflow-hidden'>
            <span className='social' >
                <Frame>
                    <div className='flex justify-between items-center gap-3'>
                        {children}
                    </div>
                </Frame>
            </span>
        </a>
    )
}

export default LinkBtn