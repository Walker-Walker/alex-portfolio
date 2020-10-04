import React from "react";
import coverImage from "../../assets/cover/cover-image.jpeg"
import "./about.css"

function About() {
    return(
        
        
        <section className="my-5">
            <h1 id='about'>About Me </h1>
            <img src={coverImage} className="my-2 cover-image" style={{width: "40%"}} alt="cover"/>
            <p>
                Adipisicing officia do culpa cillum commodo eu. Consectetur aliquip sit eu quis consectetur ullamco anim sunt incididunt aliquip. Consectetur ipsum ex proident quis.
            </p>
        </section>

        

        
    )
}


export default About;