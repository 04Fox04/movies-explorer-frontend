import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <form className="filter">
            <div className="filter__container">
                <input className="filter__checkbox-input" type="checkbox"></input>
                <p className="filter__checkbox-title">Короткометражки</p>
            </div>
        </form>
    )
}

export default FilterCheckbox;
