import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, value }) {
    const handleCheckboxClick = () => {
        onChange();
      };
    return (
        <form className="filter" id="form">
            <div className="filter__container">
                <button className="button__checkbox">
                    <input className="filter__checkbox-input" type="checkbox" onChange={onChange} value={value} checked={value} onClick={handleCheckboxClick}></input>
                </button>
                <p className="filter__checkbox-title">Короткометражки</p>
            </div>
        </form>
    )
}

export default FilterCheckbox;
