import React, { useState } from "react";
import "./skill.scss";
import { Icon } from "@iconify/react";
import htm from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import js from "../assets/jss.png";
import boots from "../assets/boots.png";
import giit from "../assets/giit.png";
import postman from "../assets/postman.png";
import redux from "../assets/redux.png";
import saas from "../assets/saas.png";
import trello from "../assets/trello.png";

function Skill() {
  const [active, setActive] = useState({ lang: true, devt: false });
  const [star, setStar] = useState(false);

  const handleStar = () => {
    if (star === true) {
      setStar(false);
    } else if (star === false) {
      setStar(true);
    }
  };

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
        <div id="skill-main" className="main-card">
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
          <div className="addre">
            <div className="backar">
              <Icon
                icon="ant-design:arrow-left-outlined"
                color={active.lang === true ? "grey" : "white"}
                width="20"
                height="20"
                onClick={handleLang}
              />
            </div>
            <div className="backarr">
              <Icon
                icon="ant-design:arrow-right-outlined"
                color={active.lang === true ? "white" : "grey"}
                width="20"
                height="20"
                onClick={handleDevt}
              />
            </div>
            <div className="backarr">
              <Icon
                icon="eva:refresh-fill"
                color="white"
                width="20"
                height="20"
              />
            </div>

            <div className="cekck">
              <div className="wari">
                <Icon
                  icon="carbon:warning"
                  color="gray"
                  width="22"
                  height="22"
                />
              </div>

              {active.lang === true ? (
                <p>www.my-languages.com</p>
              ) : (
                <p>www.my-devtools.com</p>
              )}
              <div className="strr">
                <Icon
                  icon="ant-design:star-outlined"
                  onClick={handleStar}
                  color={star === true ? "#f3bb5c" : "grey"}
                  width="20"
                  height="20"
                />
              </div>
            </div>
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
      <div className="main-lang">
        <div className="languages">
          <div className="htm">
            <img src={htm} />
          </div>
          <div className="cs">
            <img src={css} />
          </div>

          <img className="js" src={js} />

          <img className="reac" src={react} />
        </div>
      </div>
    </div>
  );
}

function Devt() {
  return (
    <div>
      <div className="main-dev">
        <div className="poto-dev">
          <div className="ssas">
            <img src={saas} />
          </div>

          <img src={giit} />
          <img src={boots} />
          <img src={postman} />
          <img src={redux} />
          <img src={trello} />
        </div>
      </div>
    </div>
  );
}

export default Skill;
