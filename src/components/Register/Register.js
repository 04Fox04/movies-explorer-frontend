import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"
import logo from "../../images/logo.svg";
import regex from "../../constants/Сonstants";

function Register({ onRegister, renderLoading }) {
    const [data, setData] = useState({});
    const [isValidation, setIsValidation] = useState({});
    const [err, setErr] = useState({});

    function checkValid(name, value) {
       if (name === 'name') {
            if (value.length >= 2) {
                setIsValidation({ ...isValidation, name: true })
                setErr({ ...err, name: '' })
            } else {
                setIsValidation({ ...isValidation, name: false })
                setErr({ ...err, name: 'Имя должно быть не меньше 2 символов' })
            }
        }
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
        onRegister(data.name, data.email, data.password);
    }

    return (
        <main className="main">
            <section className="register">
                <div className="register__container">
                    <Link to="/" className="register__logo"><img src={logo} alt="лого" /></Link>
                    <h2 className="register__name">Добро пожаловать!</h2>
                    <form id="form" className="register__form" onSubmit={handleSubmit} noValidate>
                        <label className="register__label">Имя</label>
                        <input name="name" className="register__input" id="name-input" type="text" required placeholder="имя" onChange={handleChange} />
                        <div className="register__border"></div>
                        <span className="register__input-error">{err.name}</span>
                        <label className="register__label">E-mail</label>
                        <input name="email" className="register__input" id="email-input" type="email" required placeholder="email" onChange={handleChange} />
                        <div className="register__border"></div>
                        <span className="register__input-error">{err.email}</span>
                        <label className="register__label">Пароль</label>
                        <input name="password" className="register__input" id="password-input" type="password" required placeholder="пароль" onChange={handleChange} />
                        <div className="register__border"></div>
                        <span className="register__input-error">{err.password}</span>
                        <button type="submit" className="register__button-signup" disabled={!(isValidation.name && isValidation.email && isValidation.password)}>{renderLoading}</button>
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
