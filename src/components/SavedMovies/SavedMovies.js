import React, { useEffect, useState } from "react";
import "./SavedMovies.css"
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer"

function SavedMovies({ loggedIn, searchMoviesByName, filterCheckboxMovies, savedMovies, onDeleteMovie }) {
    const [isPreloader, setIsPreloader] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filterMovies, setFilterMovies] = useState([]);
    const [shortMovie, setShortMovie] = useState(false);
    const handleCheckbox = () => {
        setShortMovie(!shortMovie);
    };

    const handleSearchMovies = (req) => {
        if (req) {
            if (savedMovies) {
                setSearchText("")
                const moviesVisible = searchMoviesByName(savedMovies, req);
                setFilterMovies(
                    shortMovie ? filterCheckboxMovies(moviesVisible) : moviesVisible
                );
                setSearchText(req)
            }
        } else {
            setFilterMovies([])
            setSearchText("")
        }
        setIsPreloader(false);
    };

    useEffect(() => {
        if (savedMovies) {
            const moviesVisible = searchMoviesByName(savedMovies, searchText);
            setFilterMovies(
                shortMovie ? filterCheckboxMovies(moviesVisible) : moviesVisible
            );
        }
    }, [ savedMovies, shortMovie ]);

    const handleDelete = ({ _id: id }) => {
        onDeleteMovie(id);
    };

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="main">
                <SearchForm onChange={handleCheckbox} onSubmit={handleSearchMovies} />
                {isPreloader ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        onClick={handleDelete}
                        movies={filterMovies}
                        searchText={searchText}
                        savedMovies={savedMovies}
                    />
                )
                }
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;
