import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getCountryByCode } from '../helpers/fetchCountries';

import BorderCountries from '../components/BorderCountries';

export default function DetailCountry() {

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
            <button onClick={handleClick}>Back</button>
            {error 
            ? <p>{`${error.status || "Unknown error"}: ${error.statusText || "an error has ocurred"}`}</p> 
            : isLoading 
                ? <p>Is Loading...</p>
                : <>
                    <div>
                        <img src={country.flag} alt={country.name} width={320}/>
                        <div>
                            <h2>{country.name}</h2>
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
                </>
            }
        </>
    )
}
