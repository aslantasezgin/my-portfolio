import React from "react";
import PortfolioCard from "../Portfolio-Cards/PortfolioCard.component";
import "./Portfolio.styles.css";
import pIMG from "./img/portfolio.png"
import Getir from "./img/getir.avif"
import PigGame from "./img/pig-game.jpg"
import GuessMN from "./img/guess-my-number.jpg"
import MakroIMG from "./img/makroser.jpg"
import iklimsaIMG from "./img/iklimsa.jpg"
import fadaIMG from "./img/fada.jpg"
import emirhanisIMG from "./img/emirhan-is.jpg"
import ekeIMG from "./img/eke.jpg"


const Portfolio = () => {
    return(
        <div id="Portfolio" className="portfolio">
            <div className="container-flex">
        <div className="portfolio-content" data-aos="fade-right">
            <h2>PORTFOLIO</h2>
            <PortfolioCard img={MakroIMG} text={"Makroser Tekstil"}  link1={"https://www.makrosertekstil.com/"} link2={null}></PortfolioCard>
            <PortfolioCard img={iklimsaIMG} text={"Barut Group"} link1={"https://barutgroup.com.tr/"} link2={null}></PortfolioCard>
            <PortfolioCard img={fadaIMG} text={"Fada"} link1={"https://www.fada.com.tr/"} link2={null}></PortfolioCard>
            <PortfolioCard img={emirhanisIMG} text={"Emirhan İş"} link1={"https://www.emirhanis.com.tr/"} link2={null}></PortfolioCard>
            <PortfolioCard img={ekeIMG} text={"Eke Mühendislik"} link1={"https://www.ekemuhendislik.com/"} link2={null}></PortfolioCard>
            <PortfolioCard img={ekeIMG} text={"Kolezyum Mimarlık"} link1={"https://www.kolezyummimarlik.com/"} link2={null}></PortfolioCard>

            <PortfolioCard img={Getir} text={"Getir UI"} link1={"https://getir-ui.netlify.app/"} link2={"https://github.com/aslantasezgin/getir_ui"}></PortfolioCard>
            <PortfolioCard img={"https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6370c309d8fd822ac2bf4c4d/screenshot_2022-11-13-10-13-02-0000.png"} text={"Weather App"} link1={"https://as-weather-app.netlify.app/"} link2={"https://github.com/aslantasezgin/weather_app"}></PortfolioCard>
            <PortfolioCard img={"https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/636388b366855f53f95398d5/screenshot_2022-11-03-09-25-27-0000.png"} text={"Monster Rolodex"} link1={"https://monster-hunter-for-btcink.netlify.app/"}></PortfolioCard>
            <PortfolioCard img={"https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/636388b366855f53f95398d5/screenshot_2022-11-03-09-25-27-0000.png"} text={"Todo"} link1={" https://todolistapp10.netlify.app/"} link2={"https://github.com/aslantasezgin/monster-hunter"}></PortfolioCard>
            <PortfolioCard img={"https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/636388b366855f53f95398d5/screenshot_2022-11-03-09-25-27-0000.png"} text={"Daikin Pod"} link1={"https://daikinpod.com/"} link2={"https://github.com/aslantasezgin/monster-hunter"}></PortfolioCard>
            <PortfolioCard img={"https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/636388b366855f53f95398d5/screenshot_2022-11-03-09-25-27-0000.png"} text={"Airfel Plus"} link1={"https://airfelplus.com/"} link2={"https://github.com/aslantasezgin/monster-hunter"}></PortfolioCard>
            <PortfolioCard img={"https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/636388b366855f53f95398d5/screenshot_2022-11-03-09-25-27-0000.png"} text={"Club Admin"} link1={"https://clubadmin.sanalmagaza.com/"} link2={"https://github.com/aslantasezgin/monster-hunter"}></PortfolioCard>

           
        </div>
        <div className="portfolio-img" data-aos="fade-left">
            <img src={pIMG} alt="" />
        </div>
        </div>
        </div>
    )
}


export default Portfolio