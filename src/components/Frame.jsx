import React from 'react'

const Frame = ({children}) => {
  return (
     <div className='md:w-2/3 xl:w-1/2 mx-auto px-5'>{children}</div>
  )
}

export default Frame