import React, { useState } from "react";
import "./Contactsinput.css";

const Contactsinput = ({ handleInputChange }) => {
  const [value, setValue] = useState(" ");

  const changeInput = (e) => {
    setValue(e.target.value);
    handleInputChange(e.target.value);
  };
  return (
    <div className="field__search">
      <input
        className="field__input"
        type="text"
        onChange={changeInput}
        placeholder="Шукати..."
      />
    </div>
  );
};

export { Contactsinput };
