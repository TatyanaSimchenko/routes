import React from "react";
import { Link } from "react-router-dom";
const Notfoundpage = () => {
  return (
    <div>
      <p>
        This page doesn't exist. Go <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export { Notfoundpage };
