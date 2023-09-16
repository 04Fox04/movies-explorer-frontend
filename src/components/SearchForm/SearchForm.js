import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit, shortMovies, onChange }) {
  const [data, setData] = useState({
    input: localStorage.getItem("searchInput") || "",
  });

  useEffect(() => {
    localStorage.setItem("searchInput", data.input);
  }, [data.input]);

  function handleChange(event) {
    const { target: { name, value } } = event;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(event) {
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
            value={data.input}
            name="input"
            id="search-input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search__button" type="submit">Найти</button>
        </form>
        <FilterCheckbox onChange={onChange} value={shortMovies} />
      </div>
    </section>
  );
}

export default SearchForm;
