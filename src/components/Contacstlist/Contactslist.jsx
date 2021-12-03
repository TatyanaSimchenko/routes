import React, { useState } from "react";
import "./Contactslist.css";

const Contactslist = ({ item }) => {
  const [open, setOpen] = useState(false);
  const info = {
    display: open ? "block" : "none",
  };
  function showInfo() {
    setOpen(!open);
  }
  return (
    <div className="contact">
      <button className="contact__name" onClick={showInfo}>
        {item.firstName} {item.lastName}
      </button>
      <a href={item.phone} className="contact__phone" style={info}>
        {item.phone}
      </a>
      <p className="contact__gender" style={info}>
        {item.gender}
      </p>
    </div>
  );
};

export { Contactslist };
