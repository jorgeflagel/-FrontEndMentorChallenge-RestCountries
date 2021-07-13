import React from 'react';

export default function RegionSelect({ setRegion, region }) {

  const handleChange = (e) => setRegion(e.target.value)

    return (
        <select name="region" onChange={handleChange} value={region || "Filter By Region"}>
          <option value="Filter By Region" hidden>Filter By Region</option>
          <option value=""></option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    )
}
