import React from "react";
import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer"

function SavedMovies() {
    return (
        <section className="saved__movies">
            <SearchForm />
            <div className="movies__cards-container">
                <ul className="movies__cards-list">
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </ul>
            </div>
            <Footer />
        </section>
    )
}

export default SavedMovies
