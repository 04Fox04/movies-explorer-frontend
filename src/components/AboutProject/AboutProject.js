import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title">О проекте</h2>
        <ul className="project__stage">
          <li className="project__info">
            <h3 className="project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="project__info-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="project__info">
            <h3 className="project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="project__info-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="project__week">
          <h3 className="project__week-title project__week-title_one">1 неделя</h3>
          <h3 className="project__week-title">4 недели</h3>
          <p className="project__week-subtitle">Back-end</p>
          <p className="project__week-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
