import React, { useState } from "react";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
    const [movies, setMovies] = useState(false);

    return (
        <>
            <main>
                {movies && <Preloader />}
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>

    );
}

export default Movies;
