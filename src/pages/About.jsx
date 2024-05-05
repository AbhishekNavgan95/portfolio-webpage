import React, { useRef } from 'react'
import Header from '../components/Header'
import GSAPAbout from '../components/GSAPAbout'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  console.log(location)
  const aboutRef = useRef(null);

  return (
    <>
      <GSAPAbout aboutRef={aboutRef} location={location.pathname} />
      <div ref={aboutRef}>
        <Header text={"Under Construction - Just Like My-First Coding Project 😅!"} />
      </div>
    </>
  )
}

export default About