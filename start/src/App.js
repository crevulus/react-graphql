import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import logo from "./SpaceX-Logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="SpaceX" style={{ width: 300 }} />
      <h1>Spaceman says everybody get down</h1>
    </div>
  );
}

export default App;
