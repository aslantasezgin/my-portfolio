import React from "react";
import "./Skills.styles.css";
import SkillsIMG from "./skills.png"
import SkillsCard from "../Skills-Cards/SkillsCard";


const Skills = () => {

    return(
        <div id="Skills" className="skills">
         <div className="container-flex">
        <div className="skills-img" data-aos="fade-right"><img src={SkillsIMG} alt="" /> </div>
        <div className="skills-text" data-aos="fade-left">
            <h2>SKILLS</h2>
        <SkillsCard icon={"fa-brands fa-html5"} text={"HTML5"}></SkillsCard>
        <SkillsCard icon={"fa-brands fa-css3"} text={"CSS3"}></SkillsCard>
        <SkillsCard icon={"fa-brands fa-bootstrap"} text={"Bootstrap"}></SkillsCard>
        <SkillsCard icon={"fa-solid fa-code"} text={"Tailwind"}></SkillsCard>
        <SkillsCard icon={"fa-brands fa-js"} text={"Javascript"}></SkillsCard>
        <SkillsCard icon={"fa-solid fa-code"} text={"Jquery"}></SkillsCard>
        <SkillsCard icon={"fa-brands fa-react"} text={"React"}></SkillsCard>
        <SkillsCard icon={"fa-solid fa-code"} text={"TypeScript"}></SkillsCard>
        <SkillsCard icon={"fa-brands fa-react"} text={"Next.js"}></SkillsCard>
        <SkillsCard icon={"fa-brands fa-node"} text={"Node.Js"}></SkillsCard>
        <SkillsCard icon={"fa-solid fa-database"} text={"MySQL"}></SkillsCard>
        <SkillsCard icon={"fa-solid fa-database"} text={"MongoDB"}></SkillsCard>



        </div>
        </div>

        </div>
    )
}

export default Skills