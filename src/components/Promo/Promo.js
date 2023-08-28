import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";
import PromoImage from "../../images/promoImage.svg"

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__text">
          <h1 className="promo__title">Учебный проект студента факультета <br />Веб-разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <NavTab />
        </div>
        <img className="promo__image" src={PromoImage} alt="Планета" />
      </div>
    </section >
  );
}

export default Promo;
