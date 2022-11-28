import React from "react";
import './About.styles.css';
import AboutIMG from "./about.png"


const About = () => {
    return(
    <div id="About" className="about">
        <div className="container-flex">

        <div className="about-text" data-aos="fade-right">
            <h2>ABOUT ME</h2>
            <p><span>Hello, I’m a Sezgin</span> , frontend-developer based on Istanbul.
             I have rich experience in web site design & building
            and customization. Also I am good at <span> html, css,
            javascript, react, jquery, bootstrap, php. </span></p>

            <div className="about-links">
                <ul>
                    <li><span><i class="fa-solid fa-download"></i></span> <a href="">Download CV</a> </li>
                    <li><a href=""><i class="fa-brands fa-github"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
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