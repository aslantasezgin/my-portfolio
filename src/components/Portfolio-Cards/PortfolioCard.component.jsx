import React from "react";
import "./PortfolioCard.styles.css"


const PortfolioCard = (props) => {
    return(

        <>

<div className="portfolio-card">
<h3>{props.text}</h3>
<h2> <a href={props.link1}   target="blank">Live</a></h2>

</div>












        </>
    )
}

export default PortfolioCard