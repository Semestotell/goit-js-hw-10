const URL = 'https://restcountries.com/v3.1/name/'

export function fetchCountries(name) {
    return fetch(`${URL}${name}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}