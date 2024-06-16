import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <div className="nav__links">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">Latest</a>
        <a href="#">My List</a>
        <a href="#">Browse by Languages</a>
      </div>

      <div className="nav__icons">
        <i className="fas fa-search"></i>
        <a href="#">Kids</a>
        <i className="fas fa-bell"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Nav;
