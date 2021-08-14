import React from "react";
import "./project.scss";
import { motion } from "framer-motion";

function Project() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <section id="projectComponent" className="projectComponent">
      <div>
        <div className="project-title">
          <h1>Projects</h1>
        </div>
        <div className="project1"></div>
      </div>
      <motion.div
        className="block"
        onClick={() => setIsActive(!isActive)}
        animate={{
          rotate: isActive ? 180 : 360,
        }}
      >
        Hello Framer motion
      </motion.div>
    </section>
  );
}

export default Project;
