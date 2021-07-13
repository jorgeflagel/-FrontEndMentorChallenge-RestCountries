import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 200px;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundLightColor};
  color: ${props => props.theme.textColor};

`

export default function RegionSelect({ setRegion, region }) {

  const handleChange = (e) => setRegion(e.target.value)

    return (
        <Select name="region" onChange={handleChange} value={region || "Filter By Region"}>
          <option value="Filter By Region" hidden>Filter By Region</option>
          <option value=""></option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
    )
}
