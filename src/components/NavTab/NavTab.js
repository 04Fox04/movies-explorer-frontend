import React from "react";
import "./NavTab.css";
import { Link } from "react-scroll";

function NavTab() {
  return (
    <nav className="nav-tab">
      <div className="nav-tab__container">
        <Link to="project" className="nav-tab__link">Узнать больше</Link>
      </div>
    </nav>
  );
}

export default NavTab;
