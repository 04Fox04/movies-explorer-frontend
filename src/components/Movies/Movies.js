import React, { useState, useEffect } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { moviesApi } from "../../utils/MoviesApi";

function Movies({ loggedIn, searchMoviesByName, filterCheckboxMovies, savedMovies, onSaveMovies, onDeleteMovie }) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [shortMovies, setShortMovies] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getFilterMovies = (inputSearch, shortMovies) => {
        setIsLoading(true);
        setSearchText("");
        moviesApi
            .getInitialMovies()
            .then((movies) => {
                localStorage.setItem("filterAllMovies", JSON.stringify(movies));
                filterCheckboxAndSearch(movies, inputSearch, shortMovies);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setSearchText("Во время запроса произошла ошибка.");
            });
    };

    const handleCheckBox = () => {
        setShortMovies(!shortMovies);
        localStorage.setItem("shortMovies", JSON.stringify(!shortMovies));
    };

    const filterCheckboxAndSearch = (movies, inputSearch, shortMovies) => {
        const filter = searchMoviesByName(movies, inputSearch);
        localStorage.setItem("filterMovies", JSON.stringify(filter));
        setSearchText(filter.length ? "" : "Ничего не найдено");
        const filteredMovies = shortMovies ? filterCheckboxMovies(filter) : filter;
        setFilterMovies(filteredMovies);
    };

    useEffect(() => {
        setSearchText("");
    }, [filterMovies]);

    const handleClickMovie = (movie) => {
        const movieDelete = savedMovies.find(
            (savedFilm) => savedFilm.movieId === movie.id
        );
        movieDelete ? onDeleteMovie(movieDelete._id) : onSaveMovies(movie);
    };

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="main">
                <SearchForm onSubmit={getFilterMovies} onChange={handleCheckBox} shortMovies={shortMovies} />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList movies={filterMovies} searchText={searchText} savedMovies={savedMovies} onClick={handleClickMovie} />
                )}
            </main>
            <Footer />
        </>
    );
}

export default Movies;
