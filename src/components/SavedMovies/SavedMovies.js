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
    const [shortMovie, setShortMovie] = useState();
    const [text, setText] = useState("");

    const handleCheckbox = () => {
        setShortMovie(!shortMovie);
    };

    const handleSearchMovies = async (req) => {
        if (savedMovies) {
            setSearchText("");
            setFilterMovies(searchMoviesByName(savedMovies, req));
            setText(req);
        }
    };

    useEffect(() => {
        setIsPreloader(true);
        if (savedMovies) {
            const moviesVisible = searchMoviesByName(savedMovies, text);
            if (moviesVisible.length === 0) {
                setSearchText("Ничего не найдено.");
                setIsPreloader(false);
            }
            setFilterMovies(
                shortMovie ? filterCheckboxMovies(moviesVisible) : moviesVisible
            );
            setIsPreloader(false);
            return;
        }
    }, [searchMoviesByName, savedMovies, filterCheckboxMovies, shortMovie, text]);

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
                    <>
                        <MoviesCardList
                            onClick={handleDelete}
                            movies={filterMovies}
                            searchText={searchText}
                        />
                    </>
                )}
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies
