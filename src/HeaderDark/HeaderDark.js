import React from "react";
import { Link } from "react-router-dom";
import "./HeaderDark.css";
import Logo from "../../images/logo.svg";

function HeaderDark() {

  return (
    <div className="header__dark">
      <div className="header__container">
        <Link className="header__logo" to="/"> <img src={Logo} alt="Лого" /></Link>
        <div className="header__button-container">
          <Link className="header__signup" to="/signup">Регистрация</Link>
          <Link to="/signin"><button className="header__signin">Войти</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderDark;
