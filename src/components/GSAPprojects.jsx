import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GSAPprojects = ({ projects }) => {

    useGSAP(() => {
        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#fetured-projects",
                scroller: "body",
                start: "50 80%",
                // markers: true,
            }
        })

        t3.from(".fet-one", {
            opacity: 0,
            duration: 0.5,
            stagger: 0.2
        }).from(".fet-two", {
            opacity: 0,
            duration: 0.5,
            stagger: 0.3
        }).from(".footer", {
            opacity: 0,
            duration: 0.5,
            stagger: 0.3
        })
    }, [projects])

    return null
}

export default GSAPprojects
