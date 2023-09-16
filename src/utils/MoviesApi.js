class MoviesApi {
    constructor({ BASE_URL }) {
        this.BASE_URL = BASE_URL
    }

    getInitialMovies() {
        return fetch(this.BASE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => this._response(res))
    }

    _response(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

export const moviesApi = new MoviesApi({
    BASE_URL: "https://api.nomoreparties.co/beatfilm-movies"
})
