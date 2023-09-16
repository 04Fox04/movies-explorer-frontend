import React, { useCallback, useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router";

function MoviesCardList({ movies, onClick, savedMovies, searchText }) {
  const [visibleMovie, setVisibleMovie] = useState(4);
  const [maxWidth, setMaxWidth] = useState(window.innerWidth);
  const location = useLocation();

  const editSize = useCallback(() => {
    const newMaxWidth = window.innerWidth;
    setMaxWidth(newMaxWidth);
  }, []);

  useEffect(() => {
    const handleResizeWithDelay = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        editSize();
      }, 500);
    };

    let resizeTimer;
    window.addEventListener("resize", handleResizeWithDelay);

    return () => {
      window.removeEventListener("resize", handleResizeWithDelay);
    };
  }, [editSize]);

  useEffect(() => {
    let newVisibleCards;

    if (maxWidth > 1023) {
      newVisibleCards = 16;
    } else if (maxWidth > 750) {
      newVisibleCards = 8;
    } else {
      newVisibleCards = 5;
    }

    setVisibleMovie(newVisibleCards);
  }, [maxWidth]);

  const savedMoviesPage = location.pathname === "/saved-movies";

  const handleLikeFilm = (movie) => {
    if (savedMoviesPage) {
      return true;
    } else {
      return !!savedMovies.find((film) => film.movieId === movie.id);
    }
  };

  return (
    <section className="movies__cards">
      {movies.length === 0 ? (
        <p className="movies__cards-text">
          {searchText ? searchText : "Нужно ввести ключевое слово"}
        </p>
      ) : (
        <>
          <ul className="movies__cards-list">
            {movies.slice(0, visibleMovie).map((movie) => (
              <MoviesCard movie={movie} key={savedMoviesPage ? movie._id : movie.id} onClick={onClick} isLike={handleLikeFilm(movie)} />
            ))}
          </ul>
          {visibleMovie < movies.length && (
            <button
              className="movies__cards-button"
              type="button"
              onClick={() => setVisibleMovie((prev) => prev + 4)}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
