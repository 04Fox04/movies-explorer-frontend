import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";
import HeaderMenuButtonClosed from "../../images/popupButtonClosed.svg";
import ButtonImage from "../../images/header-auth.svg";

function NavigationMenu({ handleClose }) {
    return (
        <div className="navigation__menu">
            <div className="navigation__menu-container">
                <button className="navigation__menu-closed" onClick={handleClose}>
                    <img className="navigation__menu-image" src={HeaderMenuButtonClosed} alt="крестик"></img>
                </button>
                <ul className="navigation__link-container">
                    <li className="navigation__link-item"><Link className="navigation__link" to="/" onClick={handleClose}>Главная</Link></li>
                    <li className="navigation__link-item"><Link className="navigation__link" to="/movies" onClick={handleClose}>Фильмы</Link></li>
                    <li className="navigation__link-item"><Link className="navigation__link" to="/saved-movies" onClick={handleClose}>Сохранённые фильмы</Link></li>
                </ul>
                <button className="navigation__link-button">
                    <p className="navigation__link-account">Аккаунт</p>
                    <div className="navigation__image-container">
                        <img className="navigation__link-image" src={ButtonImage} alt="человек"></img>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default NavigationMenu; 
