import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./HeaderLite.css"
import Logo from "../../images/logo.svg";
import ButtonImage from "../../images/header-auth.svg";
import HeaderMenuButton from "../../images/headerMenuButton.svg"
import NavigationMenu from "../NavigationMenu/NavigationMenu"

function HeaderLite() {
    const [isClicked, setIsClicked] = useState(false)
    const location = useLocation();

    function handleOpenMenu() {
        setIsClicked(true)
    }

    function handleCloseMenu() {
        setIsClicked(false)
    }

    const showHeader = () => {
        const { pathname } = location
        return (
            pathname === "/movies" ||
            pathname === "/saved-movies" ||
            pathname === "/profile"
        )
    }

    const backgroundStyle = {
        backgroundColor: showHeader() ? '#fff' : '#073042'
    };
    const colorStyle = {
        color: showHeader() ? '#000' : '#fff'
    };
    const buttonStyle = {
        backgroundColor: showHeader() ? '#fff' : '#2BE080'
    };

    return (
        <div className="header-lite" style={backgroundStyle}>
            <div className="header__button-container header__button-container_lite">
                <Link className="header__logo" to="/"> <img src={Logo} alt="Лого" /></Link>
                <div className="header__movies-container">
                    <NavLink to="/movies" style={colorStyle} className={({ isActive }) => isActive ? "header__button-movies_active" : "header__button-movies"}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" style={colorStyle} className={({ isActive }) => isActive ? "header__button-saved_movies_active" : "header__button-saved header__button-saved_movies"}>Сохраненные фильмы</NavLink>
                </div>
                <Link to="/profile" className="header__profile-link">
                    <button style={buttonStyle} className="header__profile-button">
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
