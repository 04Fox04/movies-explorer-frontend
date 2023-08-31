import React from "react"
import { Link } from "react-router-dom"
import "./NotFoundError.css"

function NotFoundError() {
    return (
        <section className="error">
            <div className="error__container">
                <h2 className="error__title">404</h2>
                <p className="error__text">Страница не найдена</p>
                <Link to="/" className="error__button">Назад</Link>
            </div>
        </section>
    )
}

export default NotFoundError;
