import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import About from "../about/About";
import illu from "../assets/asd.png";

import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

//import ReactDOM from "react-dom";
import "./homePage.scss";
import Skill from "../skills/Skill";

function HomePage() {
  const myRef = useRef(null);

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
    <div className="main">
      <div className="head" id="head">
        <p className="logo" id="HOME">
          Logo
        </p>
        <ul className="nav">
          <li>
            <Link
              to="/"
              onClick={() => {
                let hero = document.getElementById("head");
                hero &&
                  hero.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => {
                let about = document.getElementById("aboutComponent");
                about &&
                  about.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              ABOUT
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to="/"
              onClick={() => {
                let hero = document.getElementById("skillsComponent");
                hero &&
                  hero.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              SKILLS
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/"
              onClick={() => {
                let hero = document.getElementById("HOME");
                hero &&
                  hero.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
      <h4 className="hello">Hello World</h4>
      <br />
      <h1 className="nama">I'm Dollyton Hutapea</h1>
      <br />
      <h4 className="front">FRONT-END DEVELOPER</h4>
      <div className="home-btn">
        <Link
          to="/about"
          onClick={() => {
            let about = document.getElementById("aboutComponent");
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
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
            <AiFillTwitterSquare color="white" fontSize="50px" />
          </a>
        </div>
        <div className="git">
          <a
            href="https://github.com/dollyton-h"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare color="white" fontSize="46px" />
          </a>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/dollyton/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin color="white" fontSize="50px" />
          </a>
        </div>
      </div>
      <div className="illu">
        <img src={illu} alt="illu" />
      </div>
      <div className="aboutComponent" id="aboutComponent">
        <br />
        <br />
        <About />
      </div>
      <div className="skillsComponent" id="skillsComponent">
        <Skill />
      </div>
    </div>
  );
}

export default HomePage;
