import React from 'react';
import styled from 'styled-components';
import DarkModeButton from './DarkModeButton';


const HeaderStyled = styled.div`
    display: flex;
    padding: 0px 16px;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.backgroundLightColor};
    h1 {
        font-size: 14px;
        font-weight: 800;
    }
    button {
        font-size: 12px;
        font-weight: 600;
    }
    @media screen and (min-width: 768px) {
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
        }
    }
`

export default function Header({ setDarkMode, darkMode }) {
    return (
        <HeaderStyled>
            <h1>Where in the world?</h1>
            <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode}/>
        </HeaderStyled>
    )
}
