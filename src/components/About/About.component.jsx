import React from "react";
import './About.styles.css';
import AboutIMG from "./about.png"
import CV from "../aslantas-sezgin-cv.pdf"


const About = () => {
    return(
    <div id="About" className="about">
        <div className="container-flex">

        <div className="about-text" data-aos="fade-right">
            <h2>ABOUT ME</h2>
            <p><span>Hello, I’m  Sezgin</span> , frontend-developer based on Istanbul.
             My creative and analytical thinking skills, problem-solving abilities, and inclination towards teamwork enable me to work successfully on complex projects. I value collaboration and strive to maintain effective communication with team members.
            </p>
       <p> I am dedicated to continuously improving myself and remaining open to new technologies and trends. I aim to deliver high-quality and sustainable solutions in every project.</p>

            <div className="about-links">
                <ul>
                    <li><span><i class="fa-solid fa-download"></i></span> <a href={CV} download={CV}>Download CV</a> </li>
                    <li><a href="https://github.com/aslantasezgin" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/sezginaslantas/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/aslantaasezginn" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="about-img" data-aos="fade-left">
            <img src={AboutIMG} alt="" />
        </div>

        </div>
    </div>
    )
}

export default About