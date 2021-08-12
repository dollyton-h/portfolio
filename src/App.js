import HomePage from "./homepage/HomePage";
import "./App.css";
import About from "./about/About";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
