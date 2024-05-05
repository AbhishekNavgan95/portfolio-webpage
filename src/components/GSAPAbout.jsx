import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GSAPAbout = ({aboutRef}) => {

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
            })


            
        },
        [aboutRef] 
    );

  return null
}

export default GSAPAbout