import React, { Children } from 'react'

const CtaButton = ({children, link}) => {
  return (
    <a href={link} className='rounded-full border-accent-medium  px-5 text-xl py-2 bg-accent-light hover:text-dark hover:bg-f-light hover:font-bold transition-all duration-300 '>
        {children}
    </a>
  )
}

export default CtaButton