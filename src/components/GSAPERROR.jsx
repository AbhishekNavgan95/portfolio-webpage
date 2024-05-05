import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GSAPERROR = ({ errorRef }) => {

    useGSAP(
        () => {
            const t1 = gsap.timeline();

            gsap.from('.zero', {
                opacity: 0,
                stagger: 0.1,
                duration: 1.5
            })

            t1.from('.one', {
                y: '-150%',
                stagger: -0.1,
                ease: 'bounce',
                duration: 1.5
            }).from(".two", {
                opacity: 0,
                stagger: 0.1,
                duration: 0.5
            })

            

        },
        [errorRef] 
    );

    return null;
};

export default GSAPERROR;
