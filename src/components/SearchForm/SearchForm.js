import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({ onSubmit, shortMovies, onChange }) {
  const location = useLocation();
  const [data, setData] = useState({
    input: localStorage.getItem("searchText") || "",
  });

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setData('') 
    } else {
      const dataValueInput = localStorage.getItem("searchText", data.input);
      if (dataValueInput) {
        setData({input : dataValueInput}) 
      }
    }
  }, [setData]);

  function handleChange(event) {
    const { target: { name, value } } = event;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(event) {
    // console.log(data.input)
    event.preventDefault();
    onSubmit(data.input, shortMovies);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" id="form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            onChange={handleChange}
            value={data.input ?? ""}
            name="input"
            id="search-input"
            type="text"
            placeholder="Фильм"
          />
          <button className="search__button" type="submit">Найти</button>
        </form>
        <FilterCheckbox onChange={onChange} value={shortMovies} />
      </div>
    </section>
  );
}

export default SearchForm;
