import React, { useState, useEffect, useCallback } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router";
import { MAX_VISIBLE_MOVIES_LARGE, MAX_VISIBLE_MOVIES_MEDIUM, MAX_VISIBLE_MOVIES_SMALL, MAX_VISIBLE_MOVIES_XS } from "../../constants/ConstantsMovie"

function MoviesCardList({ movies, onClick, savedMovies, searchText }) {
  const [visibleMovie, setVisibleMovie] = useState(MAX_VISIBLE_MOVIES_LARGE);
  const [maxWidth, setMaxWidth] = useState(window.innerWidth);
  const location = useLocation();
  const mmoviesPage = location.pathname === "/movies";
  const savedMoviesPage = location.pathname === "/saved-movies";

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
    if (mmoviesPage) {
      if (maxWidth >= 1240) {
        newVisibleCards = MAX_VISIBLE_MOVIES_LARGE;
      } else if (maxWidth >= 1024) {
        newVisibleCards = MAX_VISIBLE_MOVIES_MEDIUM;
      } else if (maxWidth >= 768) {
        newVisibleCards = MAX_VISIBLE_MOVIES_SMALL;
      } else {
        newVisibleCards = MAX_VISIBLE_MOVIES_XS;
      }
    }
    setVisibleMovie(newVisibleCards);
  }, [maxWidth]);

  const handleLikeFilm = (movie) => {
    if (savedMoviesPage) {
      return true;
    } else {
      return !!savedMovies.find((film) => film.movieId === movie.id);
    }
  };

  const handleLoadMore = () => {
    let cardsToAdd;

    if (maxWidth >= 1240) {
      cardsToAdd = 4;
    } else if (maxWidth >= 1024) {
      cardsToAdd = 3;
    } else {
      cardsToAdd = 2;
    }

    setVisibleMovie((prev) => prev + cardsToAdd);
  };

  const resultText = () => {
    if (savedMoviesPage) {
      return searchText ? "Ничего не найдено." : savedMovies && savedMovies.length === 0 ? "У вас нет сохраненных фильмов" : "Введите ключевое слово";
    } else {
      return searchText ? "Ничего не найдено." : "Нужно ввести ключевое слово";
    }
  };

  return (
    <section className="movies__cards">
      {movies.length === 0 ? (
        <p className="movies__cards-text">
          {resultText()}
        </p>
      ) : (
        <>
          <ul className="movies__cards-list">
            {movies.slice(0, visibleMovie).map((movie) => (
              <MoviesCard
                movie={movie}
                key={savedMoviesPage ? movie._id : movie.id}
                onClick={onClick}
                isLike={handleLikeFilm(movie)}
              />
            ))}
          </ul>
          {!savedMoviesPage && visibleMovie < movies.length && (
            <button
              className="movies__cards-button"
              type="button"
              onClick={handleLoadMore}
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
