import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"
import logo from "../../images/logo.svg";
import regex from "../../constants/Сonstants";

function Login({ onLogin, renderLoading }) {
    const [data, setData] = useState({});
    const [isValidation, setIsValidation] = useState({});
    const [err, setErr] = useState({});

    function checkValid(name, value) {
        if (name === 'email') {
            if (regex.test(value)) {
                setIsValidation({ ...isValidation, email: true })
                setErr({ ...err, email: '' })
            } else {
                setIsValidation({ ...isValidation, email: false })
                setErr({ ...err, email: 'Введите EMAIL' })
            }
        }
        else if (name === 'password') {
            if (value.length >= 10) {
                setIsValidation({ ...isValidation, password: true })
                setErr({ ...err, password: '' })
            } else {
                setIsValidation({ ...isValidation, password: false })
                setErr({ ...err, password: 'Пароль должен быть не менее 10 символов' })
            }
        }
    }

    function handleChange(event) {
        const { target: { name, value } } = event;
        setData({ ...data, [name]: value });
        checkValid(name, value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onLogin(data.email, data.password);
    }

    return (
        <main className="main">
            <section className="login">
                <div className="login__container">
                    <Link to="/" className="login__logo"><img src={logo} alt="лого" /></Link>
                    <h2 className="login__name">Рады видеть!</h2>
                    <form id="form" className="login__form" onSubmit={handleSubmit} noValidate>
                        <label className="login__label">E-mail</label>
                        <input name="email" className="login__input" id="email-input" type="email" onChange={handleChange} required placeholder="email" />
                        <div className="login__border"></div>
                        <span className="login__input-error">{err.email}</span>
                        <label className="login__label">Пароль</label>
                        <input name="password" className="login__input" id="password-input" type="password" onChange={handleChange} required placeholder="пароль" />
                        <div className="login__border"></div>
                        <span className="login__input-error">{err.password}</span>
                        <button type="submit" className="login__button-signin" disabled={!(isValidation.email && isValidation.password)}>{renderLoading}</button>
                        <div className="login__button-container">
                            <p className="login__button-question">Ещё не зарегистрированы?</p>
                            <Link to="/signup" className="login__signup">Регистрация</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default Login;
