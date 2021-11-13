import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="container">
      <h1>Fire and Mayhem</h1>
      <Link to="/selection">
      <button className="btn" type="button" id="p1vsp2"><strong>Player1 vs Player2</strong></button>
      </Link>
      <br />
      <Link to="/selection">
      <button className="btn" type="button" id="p1vscpu"><strong>Player1 vs CPU</strong></button>
      </Link>
    </div>
  );
};
