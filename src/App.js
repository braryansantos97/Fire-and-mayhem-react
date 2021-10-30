import { Route, Switch, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ROUTES, { RenderRoutes } from "./router/routes";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      {displayRouteMenu(ROUTES)}
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
}

export default App;


function displayRouteMenu(routes) {

  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  return (
    <ul>
      {routes.map(route => {
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }

        return singleRoute(route);
      })}
    </ul>
  );
}
