import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getMultiplesCountriesByCode } from '../helpers/fetchCountries';

const BorderList = styled.div`
    display: inline-flex;
    gap: 10px;
    flex-wrap: wrap;
    button {
        min-width: 96px;
        min-height: 28px;
        padding: 6px;
        cursor: pointer;
        background-color: ${props => props.theme.backgroundLightColor};
        border-radius: 5px;
        color: ${props => props.theme.textColor}
    }
`

const BorderCountriesContainer = styled.div`
    display: flex;        
    flex-direction: column;
    p {
        min-width: 15ch;
    }
    @media screen and (min-width: 764px) {
        flex-direction: row;
    }
`

export default function BorderCountries({borders}) {
    
    const [ borderCountries, setBorderCountries ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    const history = useHistory();

    const handleClick = (e) => history.push(`/country/${e.target.dataset.code}`)

    useEffect(() => {
        if (borders.length !== 0) {
            async function fetchBorderCountries() {
                setIsLoading(true);
                setError(null);
                let [ error, data ] = await getMultiplesCountriesByCode(borders);
                setBorderCountries(data);
                setError(error);
                setIsLoading(false);
            }
            fetchBorderCountries();
        } else {
            setBorderCountries([]);
            setError(null);
            setIsLoading(false);
        }
    }, [borders])

    return (
        <BorderCountriesContainer>
            <p><strong>Border Countries: </strong></p>
            {isLoading 
                ? <span>Loading...</span> 
                : error 
                    ? error.statusText || "The data couldn't be loaded."
                    :   borderCountries.length !== 0
                        ?   <BorderList>
                                {borderCountries.map((el) => 
                                    <button data-code={el.alpha3Code} 
                                        key={el.alpha3Code} 
                                        onClick={handleClick}>{el.name}
                                    </button>)}
                            </BorderList>
                        : "None"
            }
            
            
        </BorderCountriesContainer>
    )
}
