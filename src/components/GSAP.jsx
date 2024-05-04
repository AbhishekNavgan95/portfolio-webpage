import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GSAP = ({projects}) => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const t1 = gsap.timeline();

        gsap.from(".zero", {
            opacity: 0,
            duration: 1.5,
            delay: "0.3"
        })
        t1.from(".one", {
            y: "-150%",
            stagger: -0.1,
            ease: "bounce",
            duration: 1.5
        }).from(".two", {
            opacity: 0,
            stagger: 0.1,
            duration: 0.5
        })

        const navbar = gsap.timeline()

        navbar.from(".nav-one", {
            y: "-150%",
            opacity: 0,
            duration: 0.5
        }).from(".nav-two", {
            opacity: 0,
            stagger: 0.3,
            duration: 0.5,
        }).from(".nav-three", {
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
        })

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
        })
    }, [projects])

    return null
}

export default GSAP