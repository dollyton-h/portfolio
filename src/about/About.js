import React, { useEffect } from "react";
import "./about.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import dly from "../assets/dly.png";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="aboutComponents" id="">
      <div className="about-main" id="about-main">
        <p className="about-title" id="about-title" data-aos="fade-down">
          ABOUT ME
        </p>
        <div className="about-fir" data-aos="slide-right">
          <div className="about-det"></div>
          <div className="about-det"></div>
        </div>
        <div className="about-detail" data-aos="fade-up">
          <h2>Hi, I'm Dollyton. Nice to meet you.</h2>
          <div className="ads" id="ads">
            <p>
              As a Front End Developer, I have experience in Bootcamp for 4
              month at Glints Academy,
              <br /> during my time at glints i was working with various
              projects with SCRUM environment. <br />
              <br /> I was a Tech Lead for Front End in Mini and Final Projects
              at Glints Academy,
              <br id="ddd" />
              My main responsibility is to led the coordination to devide the
              task.
              <br /> We are able to complete all the feature and deploy the task
              within the time and have a great feedback.
              <br />
              <br /> I'm passionate about the work I do but even more so devoted
              <br />
              to cultivating a positive and efficient team environment. Whether
              in the office or working remotely.
            </p>
            <div className="pot" id="pot">
              <img src={dly} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
