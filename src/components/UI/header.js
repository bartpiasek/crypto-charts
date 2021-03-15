import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "../darkmode/DarkModeToggle";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <ul>
          <div>
            <DarkModeToggle />
          </div>
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              MyWallet
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/history" target="_blank" className="nav-links">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
