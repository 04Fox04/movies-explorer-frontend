import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderLite.css"
import Logo from "../../images/logo.svg";
import ButtonImage from "../../images/header-auth.svg";
import HeaderMenuButton from "../../images/headerMenuButton.svg"
import NavigationMenu from "../NavigationMenu/NavigationMenu"

function HeaderLite() {
    const [isClicked, setIsClicked] = useState(false)

    function handleOpenMenu() {
        setIsClicked(true)
    }

        function handleCloseMenu() {
        setIsClicked(false)
    }

    return (
        <div className="header-lite">
            <div className="header__button-container header__button-container_lite">
                <Link className="header__logo" to="/"> <img src={Logo} alt="Лого" /></Link>
                <div className="header__movies-container">
                    <NavLink to="/movies" className={({ isActive }) => isActive ? "header__button-movies" : "header__button-movies_active"}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={({ isActive }) => isActive ? "header__button-saved header__button-saved_movies" : "header__button-saved_movies_active"}>Сохраненные фильмы</NavLink>
                </div>
                <Link to="/profile" className="header__profile-link">
                <button className="header__profile-button">
                    <p className="header__button-account">Аккаунт</p>
                    <div className="header__auth-container">
                        <img className="header__profile-image" src={ButtonImage} alt="человек"></img>
                    </div>
                </button>
                </Link>
                <button className="header__button-menu" onClick={handleOpenMenu}>
                    <img src={HeaderMenuButton} className="burger__menu-image" alt="бургер меню"></img>
                </button>
                {isClicked ? <NavigationMenu handleClose={handleCloseMenu} /> : ""}
            </div>
        </div>
    )
}

export default HeaderLite;
