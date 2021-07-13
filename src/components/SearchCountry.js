import React from 'react'
import styled from 'styled-components';
import { getAllCountries, getCountriesByName } from '../helpers/fetchCountries';
import MaterialIcon from 'material-icons-react';

const Form = styled.form`
    display: flex;
    gap: 24px;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.backgroundLightColor};
    height: 56px;
    padding: 18px 32px;
    border-radius: 5px;
    button {
        cursor: pointer;
        background: transparent;  
    }
    input {
        width: 100%;
        background-color: ${props => props.theme.backgroundLightColor};
        color: ${props => props.theme.inputColor};
    }
    @media screen and (min-width:764px) {
        width: 480px;
    }
`

export default function SearchCountry({name, setName, setCountries, setError, setIsLoading}) {

    const handleChange = (e) => setName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let [error, data] = [];
        if(!name) {
            [error, data] = await getAllCountries();
        } else {
            [error, data] = await getCountriesByName(name);
        }
        setError(error);
        setCountries(data);
        setName("");
        setIsLoading(false);
    }

    return (
        <Form onSubmit={handleSubmit}>            
            <button type="submit"><MaterialIcon icon="search" /></button>
            <input type="text" placeholder="Search for a country..." value={name} onChange={handleChange}/>
        </Form>
    )
}
