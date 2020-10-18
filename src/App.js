import React from "react";

import "./App.css";
import NavbarTop from "./NavbarTop.js";
import NavbarBottom from "./NavbarBottom.js";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavbarBottom />
      <NavbarTop />
      <Home />
    </div>
  );
}

export default App;
