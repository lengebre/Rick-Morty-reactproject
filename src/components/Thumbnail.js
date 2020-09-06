import React from "react";
import "./Thumbnail.css";

function Thumbnail({ image, handleImage }) {
  return (
    <div className="thumbnail">
      <img
        key={image.id}
        src={image.image}
        alt={image.name}
        onClick={(e) => handleImage(e, image)}
      />
    </div>
  );
}

export default Thumbnail;
