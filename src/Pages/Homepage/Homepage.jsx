import React from "react";
import "./Homepage.css";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";

function Homepage() {
  return (
    <div>
      <div className="home-container">
        <h1>Who we are?..</h1>
        <div className="home__baner">
          <div className="home__baner-box">
            <img className="home__baner-img" src={home1} alt="image" />
            <p className="home__baner-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              placeat iusto quibusdam voluptatum nobis quisquam vitae eveniet
              tempora perspiciatis molestiae amet soluta vero enim cumque
              distinctio, corporis ullam pariatur alias.
            </p>
          </div>
          <div className="home__baner-box">
            <p className="home__baner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ullam autem ipsam! Totam explicabo beatae, perspiciatis mollitia
              possimus eaque quos dicta iure laboriosam doloribus voluptatem
              labore qui! Recusandae, ipsum iste.
            </p>
            <img className="home__baner-img" src={home2} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Homepage };
