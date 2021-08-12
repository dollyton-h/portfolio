import React, { useState } from "react";
import "./skill.scss";
import { Icon } from "@iconify/react";
import htm from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import js from "../assets/jss.png";

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
                  color={star === true ? "#f2f216" : "grey"}
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
        <h1>Languages & Library</h1>
        <div className="languages">
          <div>
            <img className="htm" src={htm} />
            <div>
              <img className="cs" src={css} />
            </div>
          </div>
          <div>
            <img className="js" src={js} />
            <div>
              <img className="reac" src={react} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Devt() {
  return (
    <div>
      <div className="main-dev">
        <h1>Development Tools I use</h1>
      </div>
    </div>
  );
}

export default Skill;
