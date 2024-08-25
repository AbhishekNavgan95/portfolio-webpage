import React from 'react'

const Frame = ({children}) => {
  return (
     <div className='md:w-4/5 w-full xl:w-[980px] mx-auto px-7'>{children}</div>
  )
}

export default Frame