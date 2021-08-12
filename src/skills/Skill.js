import React from "react";
import "./skill.scss";
import { Icon } from "@iconify/react";

function Skill() {
  return (
    <div>
      <div className="skill-main">
        <div className="main-card">
          <p className="skill-title">SKILLS</p>
          <div className="content-skills">
            <div className="languages">
              <p className="lang">Languages I speak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
