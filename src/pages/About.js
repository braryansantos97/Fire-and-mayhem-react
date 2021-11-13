import React from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1>About Us</h1>
        <p></p>
        <div className="box">
          <div className="buttons">
          <button className="btn">
          Github
          </button>
          <button className="btn">
          Twitter
          </button>
          <button className="btn">
          LinkedIn
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
