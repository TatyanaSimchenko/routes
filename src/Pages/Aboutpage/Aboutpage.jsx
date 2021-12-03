import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Contactspage } from "../Contactspage/Contactspage";
import { Teampage } from "../Teampage/Teampage";
import "./Aboutpage.css";

function Aboutpage() {
  return (
    <div className="about">
      <div className="about__list">
        <Link className="about__list-link" to="team">
          Our team
        </Link>
        <Link className="about__list-link" to="contacts">
          Contacts
        </Link>
      </div>

      <Routes>
        <Route path="team" element={<Teampage />} />
        <Route path="contacts" element={<Contactspage />} />
      </Routes>
    </div>
  );
}

export { Aboutpage };
