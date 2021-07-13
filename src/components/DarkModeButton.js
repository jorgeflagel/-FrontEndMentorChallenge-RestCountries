import React from 'react';
import MaterialIcon from 'material-icons-react';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    color: ${props => props.theme.textColor};
`;

function DarkModeButton({ setDarkMode, darkMode}) {

    const handleClick = () => setDarkMode(darkMode => !darkMode)

    return (
        <Button onClick={handleClick}>
            {darkMode 
                ? <><MaterialIcon key="icon-light" icon="light_mode" color="hsl(0, 0%, 100%)"/> Light Mode</>
                : <><MaterialIcon key="icon-dark" icon="dark_mode" color="hsl(200, 15%, 8%)"/> Dark Mode</>
            }
                      
        </Button>
    )
}

export default DarkModeButton;