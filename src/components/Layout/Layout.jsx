import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <header>
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="header-link" to="/gallery">
          Galery
        </NavLink>
        <NavLink className="header-link" to="/about">
          About
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">© 2021</footer>
    </>
  );
};

export { Layout };
