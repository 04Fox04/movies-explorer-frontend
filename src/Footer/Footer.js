import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                <div className="footer__box">
                    <p className="footer__author">Kirill S © 2023</p>
                    <div className="footer__links">
                        <a className="footer__link" href="https://practicum.yandex.ru" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                        <a href="https://github.com/04Fox04" className="footer__link" rel="noreferrer" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
