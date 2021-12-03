import React from "react";
import { Link } from "react-router-dom";
import "./Notfoundpage.css";
const Notfoundpage = () => {
  return (
    <div className="notfound-contaiher">
      <p className="notfound__text">
        This page doesn't exist. Go{" "}
        <Link className="notfound__link" to="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export { Notfoundpage };
