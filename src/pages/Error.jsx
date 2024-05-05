import React, { useRef } from 'react';
import Header from '../components/Header';
import Frame from '../components/Frame';
import { Link } from 'react-router-dom';
import GSAPERROR from '../components/GSAPERROR';
import { IoIosArrowBack } from "react-icons/io";


const Error = () => {
    const errorRef = useRef(null);

    return (
        <div ref={errorRef}>
            <GSAPERROR errorRef={errorRef} />
            <Header text="404 PAGE NOT FOUND!-Looks Like 🔍-This Page is on -a Coffee Break ☕.-Try a Different Route 🧭!" />
            <div className='my-5 two'>
                <Frame>
                    <Link
                        to='/'
                        className='hover:bg-f-light flex items-center w-max gap-1 hover:gap-3 transition-all duration-300 hover:text-dark hover:font-bold py-2 px-4 border rounded-lg border-accent'
                    >
                        <IoIosArrowBack /> Back to Home
                    </Link>
                </Frame>
            </div>
        </div>
    );
};

export default Error;
