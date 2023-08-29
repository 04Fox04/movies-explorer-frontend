import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <h2 className="profile__name">Привет, Кирилл!</h2>
                    <form id="form" className="profile__form" noValidate>
                        <label className="profile__label"> Имя
                            <input name="name" className="profile__input" id="name-input" type="text" required placeholder="Кирилл"/>
                            <span className="profile__input-error"></span>
                        </label>
                        <div className="profile__border"></div>
                        <label className="profile__label">E-mail
                            <input name="email" className="profile__input" id="email-input" type="email" required placeholder="pochta@yandex.ru"/>
                            <span className="profile__input-error"></span>
                        </label>
                        <div className="profile__button-container">
                            <button type="submit" className="profile__button-edit">Редактировать</button>
                            <Link to="/" className="profile__button-exit">Выйти из аккаунта</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Profile;
