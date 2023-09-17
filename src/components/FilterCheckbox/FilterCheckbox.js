import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, value, ref }) {
    return (
        <form className="filter">
            <div className="filter__container">
                <button className="button__checkbox" type="submit">
                    <input className="filter__checkbox-input" type="checkbox" onChange={onChange} value={value} checked={value} onClick={ref}></input>
                </button>
                <p className="filter__checkbox-title">Короткометражки</p>
            </div>
        </form>
    )
}

export default FilterCheckbox;
