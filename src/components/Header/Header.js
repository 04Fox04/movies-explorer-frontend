import React from "react";
import { useLocation } from "react-router-dom";
import HeaderLite from "../HeaderLite/HeaderLite";
import HeaderDark from "../HeaderDark/HeaderDark";

function Header({ loggedIn }) {
  const location = useLocation();

  const header = () => {
    if (
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile"
    ) {
      return <HeaderLite />;
    } else if (loggedIn) {
      return <HeaderLite />;
    } else {
      return <HeaderDark />;
    }
  };

  return <header>{header()}</header>;
}

export default Header;
