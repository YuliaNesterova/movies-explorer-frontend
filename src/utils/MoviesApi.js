export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export function searchMovies() {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
        }
    })
        .then(res => res.json())
        .then(data => data)
}