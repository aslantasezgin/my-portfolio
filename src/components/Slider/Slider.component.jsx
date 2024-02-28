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
              .typeString("<h2>Hello, I'm a Frontend Developer.</h2>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<h2>I design awesome websites.</h2>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<h2>I prioritize user experience.</h2>")
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "<h2>I create modern and user-friendly interfaces.</h2>"
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "<h2>Passionate about technology, I'm a constant learner.</h2>"
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "<h2>I think project-oriented and provide solutions.</h2>"
              )
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
