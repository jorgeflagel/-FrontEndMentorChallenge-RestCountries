import React from 'react';
import MaterialIcon from 'material-icons-react';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
`;

function DarkModeButton({ setDarkMode, darkMode}) {

    const handleClick = () => setDarkMode(darkMode => !darkMode)

    return (
        <Button onClick={handleClick}>
            {darkMode 
                ? <><MaterialIcon key="icon-light" icon="light_mode"/> Light Mode</>
                : <><MaterialIcon key="icon-dark" icon="dark_mode"/> Dark Mode</>
            }
                      
        </Button>
    )
}

export default DarkModeButton;