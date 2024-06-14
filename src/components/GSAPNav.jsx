import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GSAPNav = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
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
    })

    return null;
}

export default GSAPNav