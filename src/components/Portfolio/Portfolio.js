import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <nav className="portfolio__list">
          <a href="https://github.com/04Fox04/how-to-learn" className="portfolio__link" rel="noreferrer" target="_blank">
            <p className="portfolio__text">Статичный сайт</p>
            <img src={arrow} className="portfolio__arrow" alt="Cтрелка" />
          </a>
          <a href="https://04fox04.github.io/russian_travel/" className="portfolio__link" rel="noreferrer" target="_blank">
            <p className="portfolio__text">Адаптивный сайт</p>
            <img src={arrow} className="portfolio__arrow" alt="Cтрелка" />
          </a>
          <a href="https://github.com/04Fox04/react-mesto-api-full-gha" className="portfolio__link" rel="noreferrer" target="_blank">
            <p className="portfolio__text">Одностраничное приложение</p>
            <img src={arrow} className="portfolio__arrow" alt="Cтрелка" />
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;
