import HomePage from "./homepage/HomePage";
import "./App.css";
import About from "./about/About";
import { BrowserRouter } from "react-router-dom";
import Skill from "./skills/Skill";
import Project from "./project/Project";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <HomePage />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
