import React from "react";
import "./project.scss";

function Project() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div>
      <section id="projectComponent" className="projectComponent">
        <div className="project-title">
          <div className="container-project">
            <h1>PROJECTS</h1>
            <div className="project1"></div>
            <div className="project2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
