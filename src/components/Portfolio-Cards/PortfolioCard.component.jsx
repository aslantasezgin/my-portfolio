import React from "react";
import "./PortfolioCard.styles.css"


const PortfolioCard = (props) => {
    return(

        <>

<div className="portfolio-card">
<img src={props.img} alt="" />
<h3>{props.text}  -  <a href={props.link1}   target="blank">Live</a> {props.link2 !== null && <a href="https://github.com/aslantasezgin/guess-my-number" target="blank"> <span><i class="fa-brands fa-github"></i></span></a>}  </h3>
</div>












        </>
    )
}

export default PortfolioCard