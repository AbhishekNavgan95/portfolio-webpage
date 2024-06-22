import React from 'react'

const Frame = ({children}) => {
  return (
     <div className='md:w-4/5 xl:w-[980px] mx-auto px-5'>{children}</div>
  )
}

export default Frame