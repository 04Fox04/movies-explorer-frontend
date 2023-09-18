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
    const [shortMovies, setShortMovies] = useState(
        JSON.parse(localStorage.getItem("shortMovies")) || false
    );
    const [searchText, setSearchText] = useState(
        localStorage.getItem("searchText") || ""
    );
    const [isLoading, setIsLoading] = useState(false);

    const filterCheckboxAndSearch = (movies, inputSearch, shortMovies) => {
        const filter = searchMoviesByName(movies, inputSearch);
        localStorage.setItem("filterMovies", JSON.stringify(filter));
        const filteredMovies = shortMovies ? filterCheckboxMovies(filter) : filter;
        setFilterMovies(filteredMovies);
    };

    useEffect(() => {
        const savedAllMovies = JSON.parse(localStorage.getItem("filterMovies"));
        if (savedAllMovies) {
            if (savedAllMovies.length !== 0) {
                setFilterMovies(
                    shortMovies ? filterCheckboxMovies(savedAllMovies) : savedAllMovies
                );
                setIsLoading(false);
            }
        }
    }, [shortMovies, searchText, loggedIn]);

    const getFilterMovies = (inputSearch, shortMovies) => {
        setSearchText(inputSearch);
        setIsLoading(true);
        const savedAllMovies = JSON.parse(localStorage.getItem("filterAllMovies"));
        if (inputSearch) {
            if (savedAllMovies) {
                filterCheckboxAndSearch(savedAllMovies, inputSearch, shortMovies);
                setIsLoading(false);
            } else {
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
            }
            localStorage.setItem("shortMovies", shortMovies);
            localStorage.setItem("searchText", inputSearch);
        } else {
            localStorage.setItem("searchText", inputSearch);
            filterCheckboxAndSearch([], inputSearch, shortMovies);
            setSearchText("");
            setIsLoading(false);
        }
    };

    const handleCheckBox = () => {
        setShortMovies(!shortMovies);
        if (!shortMovies) {
            setFilterMovies(filterCheckboxMovies(filterMovies));
        } else {
            filterCheckboxAndSearch(
                JSON.parse(localStorage.getItem("filterAllMovies")),
                searchText
            );
        }
        localStorage.setItem("shortMovies", JSON.stringify(!shortMovies));
    };

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
