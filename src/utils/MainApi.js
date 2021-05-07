// const BASE_URL = 'https://api.movies-nest.students.nomoredomains.club';
const BASE_URL = 'http://localhost:3000';

export function register (name, password, email) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            "name": name,
            "password": password,
            "email": email
        })
    })
        .then((res) => res.json())
}

export function authorize (password, email) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
        .then((response => response.json()))
        .then((data) => {
            if (data.token){
                localStorage.setItem('token', data.token);
            }
            return data;
        })
}

export function getUserData(token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
    })
        .then(res => res.json())
        .then(data => data)
}

export function editUserData(token, name, email) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(res => res.json())
        .then(data => data)
}