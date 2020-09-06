import React, { useEffect, useState } from "react";
import Current from "./Current";
import "./Gallery.css";
import ThumbGrid from "./ThumbGrid";
import ContentRight from "./ContentRight";
import axios from "../axios.js";

function Gallery() {
  const [images, setImages] = useState([]);

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // Fetch Axios instance
    axios.get("/character").then((response) => {
      setImages(response.data.results);

      if (setCharacter) {
        setCharacter(response.data.results[0]);
      }
    });
  }, []);

  const handleImage = (e, image) => {
    e.preventDefault();
    setCharacter(image);
  };

  return (
    <div className="gallery">
      <div className="gallery__left">
        <Current character={character} />
        <ThumbGrid handleImage={handleImage} images={images} />
      </div>
      <div className="gallery__right">
        <ContentRight character={character} />
      </div>
    </div>
  );
}

export default Gallery;
