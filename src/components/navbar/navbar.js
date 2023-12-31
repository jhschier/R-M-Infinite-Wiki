import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../index.css";
import "./navbar.modules.scss";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="fs-3 creepster navbar-brand">
          <span className="text-success">Rick and Morty's </span>
          <span className="text-primary"> Infinite WiKi</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx="true">
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }

              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>

          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink activeclassname="active" className={`nav-link`} to="/">
              Characters
            </NavLink>
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="/episodes"
            >
              Episodes
            </NavLink>
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="/location"
            >
              Locations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
