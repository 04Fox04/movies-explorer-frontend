import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" id="form">
                    <input className="search__input" id="search-input" type="text" placeholder="Фильм"></input>
                    <button className="search__button" type="submit">Найти</button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    )
}

export default SearchForm;
