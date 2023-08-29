import React from "react"
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"


function MoviesCardList() {
    return (
        <section className="movies__cards">
                <ul className="movies__cards-list">
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </ul>
                <button className="movies__cards-button">Ещё</button>
        </section>
    )
}

export default MoviesCardList;
