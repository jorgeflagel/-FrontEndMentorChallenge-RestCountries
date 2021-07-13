import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getMultiplesCountriesByCode } from '../helpers/fetchCountries';



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
        <div>
            <p><strong>Border Countries: </strong></p>
            {isLoading 
                ? <span>Loading...</span> 
                : error 
                    ? error.statusText || "The data couldn't be loaded."
                    :   borderCountries.length !== 0
                        ?   <ul>
                                {borderCountries.map((el) => <button data-code={el.alpha3Code} onClick={handleClick}>{el.name}</button>)}
                            </ul>
                        : "None"
            }
            
        </div>
    )
}
