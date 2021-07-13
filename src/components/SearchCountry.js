import React from 'react'
import styled from 'styled-components';
import { getAllCountries, getCountriesByName } from '../helpers/fetchCountries';
import MaterialIcon from 'material-icons-react';

const Form = styled.form`
    display: flex;
    gap: 24px;
    align-items: center;
    width: 100%;
    button {
        cursor: pointer;
        background: transparent;    
    }
    input {
        width: 100%;
    }
    @media screen and (min-width:764px) {
        width: 480px;
    }
`

export default function SearchCountry({name, setName, setCountries, setError}) {

    const handleChange = (e) => setName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let [error, data] = [];
        if(!name) {
            [error, data] = await getAllCountries();
        } else {
            [error, data] = await getCountriesByName(name);
        }
        setError(error);
        setCountries(data);
        setName("");
    }

    return (
        <Form onSubmit={handleSubmit}>            
            <button type="submit"><MaterialIcon icon="search" /></button>
            <input type="text" placeholder="Search for a country..." value={name} onChange={handleChange}/>
        </Form>
    )
}
