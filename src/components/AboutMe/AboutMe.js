import React from "react";
import "./AboutMe.css";
import imageMe from "../../images/me.jpg"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__status">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Кирилл</h3>
          <h3 className="about-me__age">Фронтенд-разработчик, 25 лет</h3>
          <p className="about-me__description">Я живу в городе Москве. Обладатель самой милой кошки в мире. Разработкой сайтов раньше занимался, как хобби. Полноценно пойти учится решил в конце 2022г. Сейчас в активном поиске своей первой работы.</p>
          <a href="https://github.com/04Fox04" className="about-me__link" rel="noreferrer" target="_blank">Github</a>
        </div>
        <img src={imageMe} alt="Фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
