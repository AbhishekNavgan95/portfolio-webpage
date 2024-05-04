import React from 'react'

const Header = ({ text }) => {

    let textArr = []
    textArr = text.split('-');
    return (
        <header className='text-5xl mx-auto w-full pt-24'>
            <div className='px-5 md:w-2/3 xl:w-1/2 mx-auto py-5 leading-relaxed text-f-light font-bold '>
                {
                    textArr.map((t, index) => (
                        <div key={index} className='overflow-hidden'>
                            <h2 className='one' >{t}</h2>
                        </div>
                    ))
                }
                <div className='overflow-hidden'>
                    <div className='w-full h-[1px] mt-5 zero bg-f-light'></div>
                </div>
            </div>
        </header>
    )
}

export default Header