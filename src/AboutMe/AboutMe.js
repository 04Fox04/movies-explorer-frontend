import React from "react";
import "./AboutMe.css";
import imageMe from "../../images/me.jpg"

function AboutMe() {
  return (
    <section className="about__me">
      <h2 className="about__me-status">Студент</h2>
      <div className="about__me-container">
        <div className="about__me-info">
          <h3 className="about__me-name">Кирилл</h3>
          <h3 className="about__me-age">Фронтенд-разработчик, 25 лет</h3>
          <p className="about__me-description">Я живу в городе Москве. Обладатель самой милой кошки в мире. Разработкой сайтов раньше занимался, как хобби. Полноценно пойти учится решил в конце 2022г. Сейчас в активном поиске своей первой работы.</p>
          <a href="https://github.com/04Fox04" className="about__me-link" rel="noreferrer" target="_blank">Github</a>
        </div>
        <img src={imageMe} alt="Фото" className="about__me-photo" />
      </div>
    </section>
  );
}

export default AboutMe;
