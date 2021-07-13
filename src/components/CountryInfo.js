import React from 'react';
import styled from 'styled-components';
import BorderCountries from './BorderCountries';

const CountryInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 64px 28px;
    gap: 32px;
    img {
        width: min(90%, 450px);
        object-fit: contain;
        border-radius: 5px;
    }
    &>div {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    h2 {
        font-size: 22px;
        font-weight: 800;
        line-height: 32px;
    }
    p {
        font-size: 14px;
        line-height: 32px;
        font-weight: 300;
        strong {
            font-weight: 600;
        }
    }
    @media screen and (min-width: 764px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        img {
            width: 50%;
            min-width: 50%;
        }
        &>div {
            display: grid;
            grid-template-columns: 1fr 1fr;

            div:last-child, h2 {
                grid-column: 1 / span 2;
            }
        }
    }

`

export default function CountryInfo({country}) {

    return (
        <CountryInfoContainer>
            <img src={country.flag} alt={country.name} width={320}/>
            <div>
                <h2>{country.name}</h2>
                <div>
                    <p><strong>Native Name:     </strong>{country.nativeName} </p>
                    <p><strong>Population: </strong>{country.population}</p>
                    <p><strong>Region: </strong>{country.region}</p>
                    <p><strong>Sub Region: </strong>{country.subregion}</p>
                    <p><strong>Capital: </strong>{country.capital}</p>
                </div>
                <div>
                    <p><strong>Top Level Domain: </strong>{country.topLevelDomain[0]}</p>
                    <p><strong>Currencies: </strong>{country.currencies.map(curr => curr.name).join(', ')}</p>
                    <p><strong>Languages: </strong>{country.languages.map(lang => lang.name).join(', ')}</p>
                </div>
                <BorderCountries borders={country.borders} />
            </div>
        </CountryInfoContainer>
    )
}
