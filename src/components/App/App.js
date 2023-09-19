import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { mainApi } from "../../utils/MainApi"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import Register from "../Register/Register"
import Login from "../Login/Login"
import NotFoundError from "../NotFoundError/NotFoundError"
import "./App.css"
import * as Auth from "../../utils/Auth"
import { SHORT_FILM_DURATION } from "../../constants/ConstantsMovie"

function App() {
    const [renderLoading, setRenderLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [userEmail, setUserEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const [savedMovies, setSavedMovies] = useState([]);
    const [submitStatus, setSubmitStatus] = useState("");

    const showFooter = () => {
        const { pathname } = location
        return pathname === "/"
    }

    useEffect(() => {
        if (loggedIn) {
            mainApi
                .getInitialUser()
                .then((userInfo) => setCurrentUser(userInfo))
                .catch((err) => console.log(`Ошибка ${err}`))
        }
    }, [loggedIn]);

    const handleRegister = (name, email, password) => {
        setRenderLoading(true)
        Auth
            .register(name, email, password)
            .then(() => {
                handleLogin(email, password);
                setSubmitStatus("Вы успешно зарегистрировались");
                navigate('/movies');
            })
            .catch((err) => {
                if (err === "Произошла ошибка: 400") {
                    setSubmitStatus("Переданы некорректные данные для регистрации");
                } else if (err === "Произошла ошибка: 409") {
                    setSubmitStatus("Пользователь с таким E-MAIL уже существует");
                } else {
                    setSubmitStatus("При регистрации произошла ошибка");
                }
                console.log(err);
            })
            .finally(() => {
                setRenderLoading(false)
            })
    }

    function handleLoginTrueStatus() {
        setLoggedIn(true);
    }

    const handleLogin = (email, password) => {
        setRenderLoading(true)
        Auth
            .authorization(email, password)
            .then((data) => {
                if (data.token) localStorage.setItem("token", data.token);
                handleLoginTrueStatus();
                setUserEmail(email);
                setSubmitStatus("Вы успешно вошли в аккаунт");
                navigate('/movies');

            })
            .catch((err) => {
                console.log(err);
                if (err === "Произошла ошибка: 401") {
                    setSubmitStatus("Вы ввели неправильный логин или пароль");
                } else {
                    setSubmitStatus("При входе в аккаунт произошла ошибка");
                }
                console.log(err);
            })
            .finally(() => {
                setRenderLoading(false);
            })
    }

    const tokenCheck = () => {
        const token = localStorage.getItem("userId");
        if (token) {
            Auth
                .tokenCheck(token)
                .then((res) => {
                    handleLoginTrueStatus();
                    setUserEmail(res.email);
                    navigate(location.pathname, { replace: true });
                })
                .catch((err) => {
                    console.log(err);
                    navigate('/')
                })
        }
    }

    useEffect(() => {
        if (loggedIn) {
            if (location.pathname === "/signin" || location.pathname === "/signup") {
                navigate("/movies");
            }
        }
    }, [loggedIn, navigate, location.pathname]);

    useEffect(() => {
        tokenCheck();
    }, [loggedIn]);

    function handleUpdateUser(data) {
        setRenderLoading(true)
        mainApi
            .getEditUser(data)
            .then((userInfo) => {
                setSuccess(true)
                setCurrentUser(userInfo)
                setSubmitStatus("Данные профиля успешно изменены!");
            })
            .catch((err) => {
                setSuccess(false);
                if (err === "Произошла ошибка: 409") {
                    setSubmitStatus("Пользователь с таким E-MAIL уже существует");
                } else {
                    setSubmitStatus("При обновлении профиля произошла ошибка");
                }
                console.log(`Ошибка ${err}`)
            })
            .finally(() => {
                setRenderLoading(false)
            })
    }

    function onSignOut() {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/');
    }

    function searchMoviesByName(movies, inputValue) {
        return movies.filter(({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(inputValue.toLowerCase()) || nameEN.toLowerCase().includes(inputValue.toLowerCase())
        );
    }

    const filterCheckboxMovies = (movies) => {
        return movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
    };

    const handleSaveMovie = (movie) => {
        mainApi
            .addMovie(movie)
            .then((saveMovie) => {
                setSavedMovies([...savedMovies, saveMovie]);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (loggedIn) {
            mainApi
                .getSaveMovies()
                .then((movies) => {
                    setSavedMovies(movies);
                })
                .catch((err) => console.log(err));
        }
    }, [loggedIn]);

    const handleDeleteMovie = (movieId) => {
        mainApi
            .deleteMovie(movieId)
            .then(() => {
                const newSavedMovies = savedMovies.filter(({ _id }) => _id !== movieId);
                setSavedMovies(newSavedMovies);
            })
            .catch((err) => console.log(err));
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
                <div className="page">
                    <Routes>
                        <Route path="/" element={<Main loggedIn={loggedIn} />} />
                        <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={loggedIn} searchMoviesByName={searchMoviesByName} filterCheckboxMovies={filterCheckboxMovies} savedMovies={savedMovies} onSaveMovies={handleSaveMovie} onDeleteMovie={handleDeleteMovie} />} />
                        <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} searchMoviesByName={searchMoviesByName} filterCheckboxMovies={filterCheckboxMovies} savedMovies={savedMovies} onDeleteMovie={handleDeleteMovie} />} />
                        <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={loggedIn} userEmail={userEmail} success={success} successText={success ? "Профиль успешно обновлен!" : "При обновлении профиля произошла ошибка!"} onSignOut={onSignOut} getEditUser={handleUpdateUser} renderLoading={renderLoading ? "Сохранение..." : "Сохранить"} />} />
                        <Route path="/signup" element={<Register onRegister={handleRegister} submitStatus={submitStatus} renderLoading={renderLoading ? "Регистрация..." : "Зарегистрироваться"} />} />
                        <Route path="/signin" element={<Login onLogin={handleLogin} submitStatus={submitStatus} renderLoading={renderLoading ? "Вход..." : "Войти"} />} />
                        <Route path="/*" element={<NotFoundError />} />
                    </Routes>
                    {showFooter() && <Footer />}
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
