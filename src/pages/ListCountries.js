import React, {useState} from 'react';
import CountryCard from '../components/CountryCard';
import SearchCountry from '../components/SearchCountry';
import RegionSelect from '../components/RegionSelect';
import styled from 'styled-components';

const ListCountriesContainer = styled.div`
    padding: 16px;
    .filters {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 40px;
        padding: 8px 0px 32px 0px;
        @media screen and (min-width: 768px) {
            padding: 80px;
            flex-direction: row;
            justify-content: space-between;
        }  
    }
    .countries {
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        @media screen and (min-width: 768px) {
            padding: 48px;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 75px;
            justify-content: space-around;
        }  
    }
    
`

export default function ListCountries({countries, setCountries, error, setError, region, setRegion, isLoading, setIsLoading}) {

    const [name, setName] = useState("");

    return (
        <ListCountriesContainer>
            <div className="filters">
                <SearchCountry setName={setName} name={name} setCountries={setCountries} setError={setError} setIsLoading={setIsLoading}/>
                <RegionSelect setRegion={setRegion} region={region} />
            </div>
            {error 
                ? <p>{`${error.status || "Unknown error"}: ${error.statusText || "an error has occurred."}`}</p> 
                : isLoading
                    ?  <div class="loader"></div> 
                    :   <>
                            <div className="countries">
                                {countries
                                    .filter(el =>  region ? el.region === region : el)
                                    .map(country => <CountryCard country={country} key={country.alpha3Code}/>)}
                            </div>
                        </>
            }
            
        </ListCountriesContainer>
    )
}
