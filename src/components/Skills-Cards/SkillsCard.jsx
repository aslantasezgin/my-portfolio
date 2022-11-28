import React from "react";
import "./SkillsCard.styles.css"


const SkillsCard = (props) => {
    return(
        <>
       <div className="skills-card">
            <div className="skills-icon"><i class={props.icon}></i></div>
            <h3>{props.text}</h3>
        </div>

        

        </>
    )
}


export default SkillsCard