import React from 'react'
import Frame from './Frame'

const LinkBtn = ({ children, link }) => {
    return (
        <a href={link} target='_blank' className='text-2xl hover:text-f-light hover:font-bold group group hover:bg-dark transition-all duration-300 three py-4 overflow-hidden'>
            <span className='two'>
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