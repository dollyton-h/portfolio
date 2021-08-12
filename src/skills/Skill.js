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
              <ul>
                <li>
                  <Icon
                    icon="logos:html-5"
                    color="orange"
                    width="30"
                    height="30"
                  />
                </li>
                <li>
                  <Icon
                    icon="logos:css-3"
                    color="orange"
                    width="40"
                    height="40"
                  />
                </li>
                <li>
                  <Icon
                    icon="logos:javascript"
                    color="orange"
                    width="40"
                    height="40"
                  />
                </li>
                <li>
                  <Icon
                    icon="logos:react"
                    color="orange"
                    width="40"
                    height="40"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
