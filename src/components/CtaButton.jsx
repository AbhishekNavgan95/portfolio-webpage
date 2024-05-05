import React, { Children } from 'react'

const CtaButton = ({children, link}) => {
  return (
    <a href={link} className='rounded-lg border-accent-medium flex items-center w-max gap-1 hover:gap-3  px-5 md:text-xl py-2 bg-accent-light hover:text-dark focus:text-dark hover:bg-f-light focus:bg-f-light hover:font-bold focus:font-bold focus:outline-none transition-all duration-300 '>
        {children}
    </a>
  )
}

export default CtaButton