import React from "react";
import { Link } from "react-router-dom";

export default function Arena(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column" id="player1-hp">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="column" id="timer">

        </div>
        <div className="column" id="player2-hp">
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>
      </div>

    </div>
  );
};
