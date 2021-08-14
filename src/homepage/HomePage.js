import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import About from "../about/About";
import illu from "../assets/asd.png";

import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

//import ReactDOM from "react-dom";
import "./homePage.scss";
import Skill from "../skills/Skill";

function HomePage() {
  const myRef = useRef(null);
  const [scro, setScro] = useState(false);

  // useEffect(() => {
  //   let url = window.location.href.split("/");
  //   let target = url[url.length - 1].toLowerCase();
  //   let element = document.getElementById(target);
  //   element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, []);

  useEffect(() => {
    document.title = "Dollyton Hutapea";
  }, []);
  return (
    <div className="main" id="main">
      <div className={scro ? "head-active" : "head"} id="head">
        <p className="logo" id="HOME">
          DY
        </p>
        <ul className="nav">
          <li>
            <Link to="main" smooth={true} duration={1000}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="about-main" smooth={true} duration={1000}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="skill-main" smooth={true} duration={1000}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={1000}>
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>

      <br />
      <div className="sda">
        <h1 className="nama">Dollyton Hutapea</h1>
        <div className="illu">
          <img src={illu} alt="illu" />
        </div>
      </div>

      <br />
      <h4 className="front">FRONT-END DEVELOPER</h4>
      <div className="home-btn">
        <Link to="aboutComponent" smooth={true} duration={1000}>
          <button className="btn-more">More About Me</button>
        </Link>
      </div>

      <div className="social-logo">
        <div className="twit">
          {" "}
          <a
            href="https://twitter.com/DolyTonn"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare color="black" fontSize="50px" />
          </a>
        </div>
        <div className="git">
          <a
            href="https://github.com/dollyton-h"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare color="black" fontSize="46px" />
          </a>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/dollyton/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin color="black" fontSize="50px" />
          </a>
        </div>
      </div>

      <div className="aboutComponent" id="aboutComponent"></div>

      {/* <div className="skillsComponent" id="skillsComponent"></div> */}
    </div>
  );
}

export default HomePage;
