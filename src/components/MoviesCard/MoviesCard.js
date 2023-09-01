import React from "react";
import "./MoviesCard.css";
import moviesCardImage from "../../images/moviesCardImage.jpg";
import { useLocation } from "react-router-dom";


function MoviesCard() {
    const location = useLocation();

    const button = () => {
        if (location.pathname === "/saved-movies") {
            return "card__delete-button";
        } else {
            return "card__like";
        }
    }

    return (
        <li className="card">
            <img className="card__image" src={moviesCardImage} alt="Превью фильма" />
            <div className="card__container">
                <div className="card__name-container">
                    <h3 className="card__name">Скейт — кухня</h3>
                    <button className={button()} type="button"></button>
                </div>
                <p className="card__duration">1ч 42м</p>
            </div>
        </li>
    );
}

export default MoviesCard;
