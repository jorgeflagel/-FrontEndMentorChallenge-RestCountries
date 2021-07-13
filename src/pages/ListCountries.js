import React, {useState} from 'react';
import CountryCard from '../components/CountryCard';
import SearchCountry from '../components/SearchCountry';
import RegionSelect from '../components/RegionSelect';

export default function ListCountries({countries, setCountries, error, setError, region, setRegion}) {

    const [name, setName] = useState("");

    return (
        <>
            <SearchCountry setName={setName} name={name} setCountries={setCountries} setError={setError}/>
            {error 
                ? <p>{`${error.status || "Unknown error"}: ${error.statusText || "an error has occurred."}`}</p> 
                :   <>
                        <RegionSelect setRegion={setRegion} region={region} />
                        <div>
                            {countries
                                .filter(el =>  region ? el.region === region : el)
                                .map(country => <CountryCard country={country} key={country.alpha3Code}/>)}
                        </div>
                    </>
            }
            
        </>
    )
}
