import React from "react";
import "./Teampage.css";
import { useNavigate } from "react-router-dom";
import ourteam from "../../assets/ourteam.jpg";

function Teampage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="team">
      <button className="btn-back" onClick={goBack}>
        Go back
      </button>
      <div className="team__image">
        <img src={ourteam} alt="" />
      </div>
      <p className="team__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quia
        aliquid! Incidunt quaerat ratione debitis, impedit id corporis esse.
        Optio, dolorum tempora reprehenderit est veniam velit! Laborum dolor
        iste cupiditate.
      </p>
    </div>
  );
}

export { Teampage };
