import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import regex from "../../constants/Сonstants";

function Profile({ getEditUser, onSignOut, renderLoading, success, successText, loggedIn }) {
    const [edit, setEdit] = useState(false);
    const currentUser = useContext(CurrentUserContext)
    const [isValidation, setIsValidation] = useState();
    const [isText, setIstext] = useState(false);
    const [err, setErr] = useState({});

    function checkValid(name, value) {
        if (name === 'name') {
            if (value.length >= 2) {
                setIsValidation(true)
                setErr({ ...err, name: '' })
            } else {
                setIsValidation(false)
                setErr({ ...err, name: 'Имя должно быть не меньше 2 символов' })
            }
        }
        if (name === 'email') {
            if (regex.test(value)) {
                setIsValidation(true)
                setErr({ ...err, email: '' })
            } else {
                setIsValidation(false)
                setErr({ ...err, email: 'Введите EMAIL' })
            }
        }
    }

    const [user, setUser] = useState({
        name: currentUser.name,
        email: currentUser.email,
    })

    function handleSubmit(event) {
        event.preventDefault();
        getEditUser(user);
    }

    const handleChange = (event) => {
        const { target: { name, value } } = event;
        setUser({ ...user, [name]: value })
        checkValid(name, value)
    }

    React.useEffect(() => {
        setUser({
            name: currentUser.name,
            email: currentUser.email,
        })
    }, [currentUser])

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <section className="profile">
                    <div className="profile__container">
                        <h2 className="profile__name">{`Привет, ${currentUser.name}!`}</h2>
                        <form id="form" className="profile__form" onSubmit={handleSubmit} noValidate>
                            <label className="profile__label"> Имя
                                <input name="name" className="profile__input" id="name-input" onChange={handleChange} value={user.name} type="text" minLength={2} required placeholder="имя" />
                                <span className="profile__input-error">{err.name}</span>
                            </label>
                            <div className="profile__border"></div>
                            <label className="profile__label">E-mail
                                <input name="email" className="profile__input" id="email-input" onChange={handleChange} value={user.email} type="email" minLength={2} required placeholder="email" />
                                <span className="profile__input-error">{err.email}</span>
                            </label>
                            <div className="profile__button-container">
                                {edit ? (
                                    <>
                                        {isText && (<span className={`${success ? "success__text" : "success__text-err"}`}>{successText}</span>)}
                                        <button type="submit" className="profile__button-submit" onClick={() => setIstext(true)} disabled={(!isValidation) || (currentUser.name === user.name && currentUser.email === user.email)}>{renderLoading}</button>
                                    </>) : (
                                    <>
                                        <Link className="profile__button-edit" onClick={() => setEdit(true)}>Редактировать</Link>
                                        <button type="button" className="profile__button-exit" onClick={onSignOut}>Выйти из аккаунта</button>
                                    </>)}
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;
