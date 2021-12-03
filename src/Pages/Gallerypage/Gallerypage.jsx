import React from "react";
import "./Gallerypage.css";
import gallety1 from "../../assets/Gallery/gallery1.jpg";
import gallety2 from "../../assets/Gallery/gallery2.jpg";
import gallety3 from "../../assets/Gallery/gallery3.jpg";
import gallety4 from "../../assets/Gallery/gallery4.jpg";
import gallety5 from "../../assets/Gallery/gallery5.jpg";

function Gallerypage() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery__image">
        <img src={gallety1} alt="image" />
        <img src={gallety2} alt="image" />
        <img src={gallety3} alt="image" />
        <img src={gallety4} alt="image" />
        <img src={gallety5} alt="image" />
        <img src={gallety4} alt="image" />
      </div>
    </div>
  );
}

export { Gallerypage };
