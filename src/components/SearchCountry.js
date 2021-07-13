import React from 'react'
import { getAllCountries, getCountriesByName } from '../helpers/fetchCountries';

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
        <form onSubmit={handleSubmit}>            
            <input type="submit" value="Search"/>
            <input type="text" placeholder="Search for a country..." value={name} onChange={handleChange}/>
        </form>
    )
}
