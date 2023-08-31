import React from "react"
import { Link } from "react-router-dom"
import "./Register.css"
import logo from "../../images/logo.svg";

function Register() {
    return (
        <main className="main">
            <section className="register">
                <div className="register__container">
                    <Link to="/" className="register__logo"><img src={logo} alt="лого" /></Link>
                    <h2 className="register__name">Добро пожаловать!</h2>
                    <form id="form" className="register__form">
                        <label className="register__label">Имя</label>
                        <input name="name" className="register__input" id="name-input" type="text" minLength={2} required placeholder="имя"/>
                        <div className="register__border"></div>
                        <span className="register__input-error"></span>
                        <label className="register__label">E-mail</label>
                        <input name="email" className="register__input" id="email-input" type="email" minLength={2} required placeholder="email"/>
                        <div className="register__border"></div>
                        <span className="register__input-error"></span>
                        <label className="register__label">Пароль</label>
                        <input name="password" className="register__input" id="password-input" type="password" minLength={2} required placeholder="пароль"/>
                        <div className="register__border"></div>
                        <span className="register__input-error register__input-error_password">Что-то пошло не так...</span>
                        <button type="submit" className="register__button-signup">Зарегистрироваться</button>
                        <div className="register__button-container">
                            <p className="register__button-question">Уже зарегистрированы?</p>
                            <Link to="/signin" className="register__signin">Войти</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default Register;