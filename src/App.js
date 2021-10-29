// import { Route, Switch, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ROUTES, { RenderRoutes } from "./router/routes";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
}

export default App;
