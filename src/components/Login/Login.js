import React from "react"
import { Link } from "react-router-dom"
import "./Login.css"
import logo from "../../images/logo.svg";

function Login() {
    return (
        <section className="login">
            <div className="login__container">
                <Link to="/" className="login__logo"><img src={logo} alt="лого" /></Link>
                <h2 className="login__name">Рады видеть!</h2>
                <form id="form" className="login__form" noValidate>
                    <label className="login__label">E-mail</label>
                    <input name="email" className="login__input" id="email-input" type="email" required />
                    <span className="login__input-error"></span>
                    <div className="login__border"></div>
                    <label className="login__label">Пароль</label>
                    <input name="password" className="login__input" id="password-input" type="password" required />
                    <span className="login__input-error"></span>
                    <div className="login__border"></div>
                    <button type="submit" className="login__button-signin">Войти</button>
                    <div className="login__button-container">
                        <p className="login__button-question">Ещё не зарегистрированы?</p>
                        <Link to="/signin" className="login__signup">Регистрация</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Login;