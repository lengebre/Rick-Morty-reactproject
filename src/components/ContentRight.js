import React from "react";
import "./ContentRight.css";

function Content({ character }) {
  return (
    <div className="contentRight">
      <h2>{character.name}</h2>
      <p>
        <strong>Species:</strong> {character.species}
      </p>
      <p>
        <strong>Status:</strong> {character.status}
      </p>
    </div>
  );
}

export default Content;
