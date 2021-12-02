import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/gallery">Galery</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">© 2021</footer>
    </>
  );
};

export { Layout };
