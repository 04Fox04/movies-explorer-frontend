import React from "react"
import "./NotFoundError.css"
import { useNavigate } from "react-router-dom";

function NotFoundError() {
    const navigate = useNavigate();
    return (
        <section className="error">
            <div className="error__container">
                <h2 className="error__title">404</h2>
                <p className="error__text">Страница не найдена</p>
                <button to="/" className="error__button" onClick={() => navigate(-1)}>Назад</button>
            </div>
        </section>
    )
}

export default NotFoundError;
