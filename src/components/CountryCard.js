import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 264px;
    min-height: 336px;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    img {
        border-radius: 5px 5px 0 0;
        width: 100%;
        }
    &>div{
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }  
    h2 {
        font-size: 18px;
        line-height: 26px;
    }  
    .info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        p {
        font-size: 14px;
        line-height: 16px;
        font-weight: 300;
            & strong {
                font-weight: 600;
            }
        }
    }
`

function CountryCard({ country }) {

    let history = useHistory();

    const handleClick = (e) => history.push(`/country/${country.alpha3Code}`)

    return (
        <CardContainer onClick={handleClick}>
            <img src={country.flag} alt={country.name}/>
            <div>
                <h2>{country.name}</h2>
                <div className="info">
                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                </div> 
            </div>
        </CardContainer>
    )
}

export default CountryCard;
