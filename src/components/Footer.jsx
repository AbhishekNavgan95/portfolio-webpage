import { useEffect, useState } from "react"
import React from 'react'
import Frame from "./Frame";
import Typewriter from 'typewriter-effect/dist/core';

const Footer = () => {

    const [word, setWord] = useState("");
    const [day, setDay] = useState("");

    const setDate = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = new Date().getDay();
        setDay(days[currentDay]);
    }

    useEffect(() => {
        setDate()

        new Typewriter('#typewriter', {
            strings: [
                "exceptional " + day + "...",
                "outstanding " + day + "...",
                "fantastic " + day + "...",
                "mind-blowing " + day + "...",
                "breathtaking " + day + "...",
                "superb " + day + "...",
                "extra-special " + day + "...",
                "marvelous " + day + "...",
                "a classic " + day + "...",
                "great " + day + "...",
                "jaw-dropping " + day + "...",
                "remarkable " + day + "...",
                "wonderful " + day + "...",
                "spectacular " + day + "...",
                "amazing " + day + "...",
                "fabulous " + day + "...",
                "truly unforgettable " + day + "...",
                "phenomenal " + day + "...",
                "extraordinary " + day + "...",
                "awesome " + day + "...",
                "noteworthy " + day + "...",
                "real treat " + day + "...",
                "excellent " + day + "..."
            ],
            autoStart: true,
        });
    }, [day])

    return (
        <section className='pb-14 text-xl ' id='footer'>
            <Frame>
                <span className='flex flex-col gap-3'>
                    <h4 className="footer text-base">Thanks for visiting &lt;3</h4>
                    <p className='text-xl lg:text-3xl text-wrap border-b  border-dashed w-max pb-1 font-semibold footer'>Have a <span className="text-sky-500" id="typewriter"></span></p>
                </span>
            </Frame>
        </section>
    )
}

export default Footer