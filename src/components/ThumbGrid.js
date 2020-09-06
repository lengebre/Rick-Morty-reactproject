import React from "react";
import "./ThumbGrid.css";
import Thumbnail from "./Thumbnail";

function ThumbGrid({ images, handleImage }) {
  return (
    <div className="thumbGrid">
      {images.slice(10, 18).map((image) => (
        <Thumbnail key={image.id} image={image} handleImage={handleImage} />
      ))}
    </div>
  );
}

export default ThumbGrid;
