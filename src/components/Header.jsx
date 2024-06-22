import React from 'react';

const Header = ({ text }) => {
    let textArr = text.split('-');

    return (
        <header className='text-2xl sm:text-4xl md:text-5xl mx-auto w-full pt-20 md:pt-24'>
            <div className='px-5 md:w-4/5 xl:w-[980px]  mx-auto py-5 leading-relaxed text-f-light font-bold '>
                {textArr.map((t, index) => (
                    <div key={index} className='overflow-hidden'>
                        <h2 className='one'>{t}</h2>
                    </div>
                ))}
                <div className='overflow-hidden'>
                    <div className='w-full h-[1px] mt-5 zero bg-f-light'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
