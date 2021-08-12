import React, { useState } from "react";
import "./skill.scss";
import { Icon } from "@iconify/react";
import htm from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import js from "../assets/js.png";

function Skill() {
  const [active, setActive] = useState({ lang: true, devt: false });

  const handleLang = () => {
    setActive({ lang: true, devt: false });
  };

  const handleDevt = () => {
    setActive({ lang: false, devt: true });
  };

  const showLang = active.lang ? <Lang /> : null;
  const showDevt = active.devt ? <Devt /> : null;
  console.log(active);
  return (
    <div>
      <div className="skill-main">
        <div className="main-card">
          <div className="header-card">
            <button
              className={`btn1-${active.lang ? "active" : null}`}
              onClick={handleLang}
            >
              Languages
            </button>
            <button
              className={`btn1-${active.devt ? "active" : null}`}
              onClick={handleDevt}
            >
              Dev Tools
            </button>

            <div className="head1"></div>
            <div className="head2"></div>
            <div className="head3"></div>
          </div>
          <div className="cekck">
            {active.lang === true ? (
              <p>www.my-languages.com</p>
            ) : (
              <p>www.my-dev_tools.com</p>
            )}
          </div>
          <div className="gr-bawah"></div>

          {showLang}
          {showDevt}
        </div>
      </div>
    </div>
  );
}

function Lang() {
  return (
    <div>
      <p className="ll">ini lang</p>
    </div>
  );
}

function Devt() {
  return (
    <div>
      <p className="dd">ini dev</p>
    </div>
  );
}

export default Skill;
