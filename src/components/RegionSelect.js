import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';



// function RegionSelect({ setRegion, region }) {

//   const handleChange = (e) => setRegion(e.target.value)

//     return (
//         <Selected name="region" onChange={handleChange} value={region || "Filter By Region"}>
//           <option value="Filter By Region" hidden>Filter By Region</option>
//           <option value=""></option>
//           <option value="Africa">Africa</option>
//           <option value="Americas">America</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//         </Selected>
//     )
// }

const Selected = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  cursor: pointer;
  background-color: ${props => props.theme.backgroundLightColor};
  color: ${props => props.theme.textColor};
  padding: 0 18px;
  height: 56px;
  border-radius: 5px;
  font-weight: 600;
  justify-content: space-between;
`

const OptionList = styled.ul`
  background-color: ${props => props.theme.backgroundLightColor};
  position: absolute;
  width: 200px;
  top: 68px;
  border-radius: 5px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
  li {
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
  }
  display: ${props => props.hidden ? "none" : "flex"}
`

export default function RegionSelect({ setRegion, region, darkMode }) {

  const [optionsOpen, setOptionsOpen] = useState(false);
  const selected  = useRef();
  const options = useRef();

  const handleClick = (e) => setRegion(e.target.dataset["value"]);

  function handleListener(e) {
    e.stopPropagation();
    if(selected.current) {
      if (!selected.current.contains(e.target)) setOptionsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleListener);
    return function () {
      console.log("removing event listener")
      document.removeEventListener("click", handleListener)
    }
  }, [])

  const toggleOptions = () => setOptionsOpen(x => !x);


  return(
    <div style={{position: "relative"}}>
      <Selected onClick={toggleOptions} ref={selected}>
        <span>{region || "Filter By Region"}</span>
        <MaterialIcon key={darkMode ? "down-dark" : "down-light"} icon="expand_more" color={darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"} />
      </Selected>
      <OptionList ref={options} hidden={!optionsOpen ? true : false}>
          <li onClick={handleClick} data-value="">No filter</li>
          <li onClick={handleClick} data-value="Africa">Africa</li>
          <li onClick={handleClick} data-value="Americas">Americas</li>
          <li onClick={handleClick} data-value="Asia">Asia</li>
          <li onClick={handleClick} data-value="Europe">Europe</li>
          <li onClick={handleClick} data-value="Oceania">Oceania</li>
      </OptionList>
    </div>
  )
}