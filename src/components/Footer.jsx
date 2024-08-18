import { useEffect, useState } from "react"
import React from 'react'
import Frame from "./Frame";

const Footer = () => {

    const [word, setWord] = useState("");
    const [day, setDay] = useState("");

    useEffect(() => {
        const words = [
            "fantastic",
            "nice",
            "good",
            "wonderful",
            "awesome",
            "amazing",
            "excellent",
            "terrific",
            "remarkable",
            "fabulous",
            "superb",
            "marvelous",
            "phenomenal",
            "splendid",
            "outstanding",
            "exceptional",
            "stupendous",
            "breathtaking",
            "extraordinary",
            "spectacular"
        ];
        setWord(words[Math.floor(Math.random() * words.length)]);

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = new Date().getDay();
        setDay(days[currentDay]);
    })

    return (
        <section className='pb-14 text-xl ' id='footer'>
            <Frame>
                <span className='flex flex-col gap-3'>
                    <h4 className="footer text-base">Thanks for visiting &lt;3</h4>
                    <p className='text-xl lg:text-3xl text-wrap border-b  border-dashed w-max pb-1 font-semibold footer'>Have a {word} <span className="text-sky-500">{day}...</span></p>
                </span>
            </Frame>
        </section>
    )
}

export default Footer