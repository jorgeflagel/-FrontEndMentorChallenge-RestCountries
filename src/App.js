import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ListCountries from './pages/ListCountries';
import DetailCountry from './pages/DetailCountry';

import { getAllCountries } from './helpers/fetchCountries';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/themes';

const AppContainer = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundDarkColor};
  min-height: 100vh;
`

function App() {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);  
  const [region, setRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchInitialCountries () {
      setIsLoading(true);
      const [error, data] = await getAllCountries();
      setError(error);
      setCountries(data);
      setIsLoading(false);
    }
    fetchInitialCountries();
  }, [])

  return (
    <Router>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>  
    <AppContainer className="App">
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Switch>
          <Route path="/country/:id">
            <DetailCountry darkMode={darkMode}/>
          </Route>
          <Route path="/">
            <ListCountries countries={countries} setCountries={setCountries} error={error} 
              setError={setError} region={region} setRegion={setRegion} 
              setIsLoading={setIsLoading} isLoading={isLoading} darkMode={darkMode} 
              />
          </Route>
        </Switch>
    </AppContainer>
    </ThemeProvider>
    </Router>
  );
}

export default App;
