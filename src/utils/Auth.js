// export const BASE_URL = 'https://api.kso.domainname.nomoreparties.co';
export const BASE_URL = 'http://localhost:3000';

function response(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    })
        .then((res) => response(res));
}

export const authorization = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
        .then((res) => response(res))
        .then((data) => {
            localStorage.setItem("userId", data._id)
            return data;
        })
}

export const tokenCheck = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => response(res));
}
