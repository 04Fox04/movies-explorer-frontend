import React from "react"
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"


function MoviesCardList() {
    return (
        <section className="movies__cards">
            <div className="movies__cards-container">
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
            </div>
        </section>
    )
}

export default MoviesCardList;
