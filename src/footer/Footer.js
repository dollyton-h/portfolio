import React from "react";
import "./footer.scss";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import pdf from "../assets/Dollyton Hutapea.pdf";

function Footer() {
  return (
    <div>
      <div className="footer-con">
        <div className="footer-a">
          <p className="footer-contact">Contact </p>
          <div className="add">
            <FaMapMarkerAlt color="black" fontSize="23px" />
            <p>
              Address <br /> <span>Batam, Indonesia 29424</span>
            </p>
          </div>
          <div className="ema">
            <MdMailOutline color="black" fontSize="27px" />
            <p>
              Email <br />
              <span>dolly.hutapea@yahoo.com</span>
            </p>
          </div>
        </div>
        <div className="social-logos">
          <p>Socials</p>
          <div className="twits">
            <a
              href="https://twitter.com/DolyTonn"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterSquare color="black" fontSize="34px" />
            </a>
            <p>
              Twitter
              <span>
                <br /> @dolytonn
              </span>
            </p>
          </div>
          <div className="gits">
            <a
              href="https://github.com/dollyton-h"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare color="black" fontSize="30px" />
            </a>
            <p>
              Github
              <span>
                <br /> dollyton-h
              </span>
            </p>
          </div>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/dollyton/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin color="black" fontSize="34px" />
            </a>
            <p>
              LinkedIn
              <span>
                <br /> dollyton
              </span>
            </p>
          </div>
        </div>
        <div className="resu">
          <h4>Wants to Hire me? </h4>

          <p>
            Download My resume here :{" "}
            <a href={pdf} target="_blank">
              Resume Pdf
            </a>
          </p>
        </div>
      </div>
      <div className="gar"></div>
      <p className="cop">© 2021 Dollyton Hutapea</p>
    </div>
  );
}

export default Footer;
