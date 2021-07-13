const API_URL = "https://restcountries.eu/rest/v2"

export const getAllCountries = () => {
    return fetch(`${API_URL}/all?fields=name;population;region;capital;flag;alpha3Code`)
        .then(resp => resp.ok ? resp.json() : Promise.reject(resp))
        .then(json => [null, json])
        .catch(err => [err, []])
}

export const getCountriesByName = (name) => {
    return fetch(`${API_URL}/name/${name}`)
        .then(resp => resp.ok ? resp.json() : Promise.reject(resp))
        .then(json => [null, json])
        .catch(err => [err, []])
}

export const getCountryByCode = (code) => {
    return fetch(`${API_URL}/alpha/${code}`)
        .then(resp => resp.ok ? resp.json() : Promise.reject(resp))
        .then(json => [null, json])
        .catch(err => [err, []])
}

export const getMultiplesCountriesByCode = (codes) => {
    return fetch(`${API_URL}/alpha?codes=${codes.join(';')}`)
        .then(resp => resp.ok ? resp.json() : Promise.reject(resp))
        .then(json => [null, json])
        .catch(err => [err, []])
}