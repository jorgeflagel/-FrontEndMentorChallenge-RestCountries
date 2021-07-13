import React from 'react'
import { useHistory } from 'react-router-dom';

function CountryCard({ country }) {

    let history = useHistory();

    const handleClick = (e) => history.push(`/country/${country.alpha3Code}`)

    return (
        <div onClick={handleClick}>
            <img src={country.flag} width="264" alt={country.name}/>
            <div>
                <h2>{country.name}</h2>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </div>
    )
}

export default CountryCard;
