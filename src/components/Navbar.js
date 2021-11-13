import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Fire & Mayhem</a>
        <div className="navbar-menu">
          <div className="navbar-start">
            {props.routes.map(({ key, path }) => (
                <Link className="navbar-item" key={key} to={path}>
                  {key}
                </Link>
            ))}
          </div>
      </div>
      </div>
    </nav>
  );
}
