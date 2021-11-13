import React from "react";
import { Link } from "react-router-dom";

export default function Selection(props) {

  const element = props.characters.map((character) => {
    <div className="column">
      <img src={character.baseI}/ >
      <p>{character.name}</p>
    </div>
  })
  return (
    <div className="container">
      <h3>Choose a Character</h3>
      <div className="columns">
        {element}
      </div>
    </div>
  );
};
