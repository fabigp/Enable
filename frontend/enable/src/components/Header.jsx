import React from "react";
import Navbar from "./Navbar.jsx";

export function Header(props) {
  return (
    <>
      <header className="header">
        <h1 className="header-h1">enable</h1>
        <input className="header-buscador" type="search" />
        <div className="header-botones">
          <a className="header-h2" href="#">
            Log out
          </a>
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
