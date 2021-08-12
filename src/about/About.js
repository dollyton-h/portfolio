import React from "react";
import "./about.scss";

function About() {
  return (
    <div>
      <div className="about-main">
        <p className="about-title">ABOUT ME</p>
        <div className="about-fir">
          <div className="about-det"></div>
          <div className="about-det"></div>
        </div>
        <div className="about-detail">
          <h2>Hi, I'm Dollyton. Nice to meet you.</h2>
          <p>
            As a Front End Developer, I have experience in Bootcamp for 4 month
            at Glints Academy,
            <br /> during my time at glints i was working with various projects
            with SCRUM environment. <br />
            <br /> I was a Tech Lead for Front End in Mini and Final Projects at
            Glints Academy,
            <br />
            My main responsibility is to led the coordination to devide the
            task.
            <br /> We are able to complete all the feature and deploy the task
            within the time and have a great feedback.
            <br />
            <br /> I'm passionate about the work I do but even more so devoted
            to cultivating a positive and efficient team environment.
            <br /> Whether in the office or working remotely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
