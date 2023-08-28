import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation"

//в зависимости от состояния true/false меняется хедер
function Header() {
  const [isLogin, setIsLogin] = useState(true);

  const header = isLogin ? (
    <Navigation />
  ) : (
    <div className="header__dark">
      <div className="header__container">
        <Link className="header__logo" to="/"> <img src={Logo} alt="Лого" /></Link>
        <div className="header__button-container">
          <Link className="header__signup" to="/signup">Регистрация</Link>
          <Link to="/signin"><button className="header__signin">Войти</button></Link>
        </div>
      </div>
    </div>
  )

  return (
    <header>
      {header}
    </header>
  )
}

export default Header;
