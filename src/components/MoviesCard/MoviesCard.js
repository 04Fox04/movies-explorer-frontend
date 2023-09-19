import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, isLike, onClick }) {
    const location = useLocation();

    const handleClickMovie = () => {
        onClick(movie);
    };

    const savedMoviesPage = location.pathname === "/saved-movies";

    const movieImage = savedMoviesPage ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`;

    const buttonImages = () => {
        if (location.pathname === "/movies")
            return isLike ? "card__like-active" : "card__like";
        if (location.pathname === "/saved-movies")
            return "card__delete-button";
    };

    function duration(numb) {
        const hours = Math.floor(numb / 60);
        const minutes = numb % 60;
        return `${hours}ч ${minutes}м`;
    }

    return (
        <li className="card">
            <a href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img className="card__image" src={movieImage} alt={movie.nameRU} />
            </a>
            <div className="card__container">
                <div className="card__name-container">
                    <h3 className="card__name">{movie.nameRU}</h3>
                    <button className={buttonImages()} onClick={handleClickMovie} type="button"></button>
                </div>
                <p className="card__duration">{duration(movie.duration)}</p>
            </div>
        </li>
    );
}

export default MoviesCard;
