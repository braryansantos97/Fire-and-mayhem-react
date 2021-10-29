import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <h1>Fire and Mayhem</h1>
      <button className="btn" type="button" id="p1vsp2"><strong>Player1 vs Player2</strong></button>
      <br />
      <button className="btn" type="button" id="p1vscpu"><strong>Player1 vs CPU</strong></button>
    </>
  );
};
