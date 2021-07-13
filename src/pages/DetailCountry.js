import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getCountryByCode } from '../helpers/fetchCountries';

import CountryInfo from '../components/CountryInfo';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

const BackButton = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-around;
    width: 104px;
    height: 32px;
    cursor: pointer;
    margin: 40px 24px;
    background-color: ${props => props.theme.backgroundLightColor};
    border-radius: 5px;
    color: ${props => props.theme.textColor};
    font-size: 14px;
    font-weight: 300;
    @media screen and (min-width: 764px) {
        font-size: 16px;
    }
`;

export default function DetailCountry({darkMode}) {

    const code = useParams().id;

    const history = useHistory();

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ country, setCountry ] = useState(null);

    const handleClick = (e) => history.goBack();

    useEffect(() => {
        async function fetchCountry() {
            setIsLoading(true);
            const [err, data] = await getCountryByCode(code);
            setError(err);
            setCountry(data);
            setIsLoading(false);
        }
        fetchCountry();
    }, [code])


    return (
        <>
            <BackButton onClick={handleClick}><MaterialIcon icon="arrow_back" key={darkMode ? "ButtonDark" : "ButtonLight"} color={darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"} /> Back</BackButton>
            {error 
            ? <p>{`${error.status || "Unknown error"}: ${error.statusText || "an error has ocurred"}`}</p> 
            : isLoading 
                ?  <div class="loader"></div> 
                : <CountryInfo country={country}/>
            }
        </>
    )
}
