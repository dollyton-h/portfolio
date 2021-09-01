import React from "react";
import "./project.scss";
import home from "../assets/homepage.png";
import details1 from "../assets/details-character.png";
import details2 from "../assets/details-sinopsis.png";
import give from "../assets/give-review.png";
import tt1 from "../assets/tuto1.png";
import tt2 from "../assets/tuto2.png";
import tt3 from "../assets/tuto3.png";
import tt4 from "../assets/tuto4.png";

function Project() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div>
      <section id="projectComponent" className="projectComponent">
        <div className="project-title">
          <div className="container-project">
            <h1>PROJECTS</h1>
            <div className="project1">
              <img className="img1" src={home} />
              <img className="img2" src={details1} />
              <img className="img3" src={give} />
            </div>

            <p className="title-pr1">
              {" "}
              <a
                href="https://milan-tv.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Milan TV
              </a>
            </p>

            <p className="des-pr1">
              A Movie Review Website using HTML/CSS, Javascript and ReactJs
              <br />
              Collaborate with Backend using NodeJs, MongoDB and Deployed with
              Netlify
            </p>
            <div className="project2">
              <img className="img1" src={tt1} />
              <img className="img2" src={tt2} />
              <img className="img3" src={tt3} />
              <img className="img4" src={tt4} />
            </div>
            <p className="title-pr1">
              <a
                href="https://tutorin-web.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Tutorin
              </a>
            </p>
            <p className="des-pr1">
              A Learning Website Application using HTML/CSS, Javascript and
              ReactJs
              <br />
              Collaborate with Backend using NodeJs, MongoDB, Firebase and
              Deployed with Netlify
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
