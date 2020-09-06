import React from "react";
import "./Current.css";

function Current({ character }) {
  return (
    <div className="current">
      <img key={character.id} src={character.image} alt={character.name} />
    </div>
  );
}

export default Current;
