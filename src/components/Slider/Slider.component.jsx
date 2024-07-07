import React from "react";
import "./Slider.styles.css";
import TypewriterComponent from "typewriter-effect";
import CV from "../aslantas-sezgin-cv.pdf";

const Slider = () => {
  return (
    <div id="#Home" className="slider">
      <div className="slider-text">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
            .typeString("<h2>Transforming ideas into reality with code.</h2>") // Fikirleri koda dönüştürmek.
            .pauseFor(2000)
              .deleteAll()
              .typeString("<h2>Creating seamless digital experiences.</h2>") // Kusursuz dijital deneyimler yaratmak.
              .pauseFor(2000)
              .deleteAll()
              .typeString("<h2>Innovating one project at a time.</h2>") // Her projede yenilik yapmak.
              .pauseFor(2000)
              .deleteAll()
                .typeString("<h2>Empowering brands through technology.</h2>") // Markaları teknolojiyle güçlendirmek.
         
              .pauseFor(2000)
              .deleteAll()
                .typeString("<h2>Building user-friendly interfaces with passion.</h2>") // Tutkuyla kullanıcı dostu arayüzler oluşturmak.
              
              .pauseFor(2000)
              .deleteAll()
                .typeString("<h2>Delivering sustainable solutions with every line of code.</h2>") // Her satır kodla sürdürülebilir çözümler sunmak.
              
              .pauseFor(2000)
              .start();
          }}
        />
      </div>
      <div className="slider-bottom">
        <div className="container-flex">
          <div className="slider-content">
            <p>
              Hello, I’m <span>UX/UI Designer and Front-end Developer</span> in
              Istanbul
            </p>
          </div>

          <div className="slider-cv">
            <a href="mailto:aslantasezginn@gmail.com" >
              Contact<span>Me</span>{" "}
            </a>
          </div>

          <div className="slider-contact">
            <h3 data-aos="fade-right" data-aos-duration="2000">
              Follow Me
            </h3>
            <a
              data-aos="fade-right"
              data-aos-duration="2000"
              href="https://github.com/aslantasezgin"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration="2000"
              href="https://www.linkedin.com/in/sezginaslantas/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
