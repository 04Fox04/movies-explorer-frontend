class MainApi {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _response(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialUser() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      credentials: 'include',
      headers: this._headers
    }).then((res) => this._response(res))
  }

  getEditUser(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then((res) => this._response(res))
  }

  //   getMovies() {
  //     return fetch(this._url + "/movies", {
  //         method: "GET",
  //         headers: {
  //             authorization: `Bearer ${localStorage.getItem("token")}`,
  //             "Content-type": "application/json"
  //         }
  //     }).then((res) => this._response(res))
  // }

  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      }),
      credentials: "include",
    }).then((res) => this._response(res));
  }

  getSaveMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._response(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._response(res));
  }
}


export const mainApi = new MainApi({
  // url: "http://localhost:3000",
  url: 'https://api.movies.domainname.nomoreparties.co',
  headers: {
    authorization: `Bearer ${localStorage.getItem("userId")}`,
    "Content-Type": "application/json",
  },
});
