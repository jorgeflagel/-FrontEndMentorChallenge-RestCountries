import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ListCountries from './pages/ListCountries';
import DetailCountry from './pages/DetailCountry';

import { getAllCountries } from './helpers/fetchCountries';

function App() {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);  
  const [region, setRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    async function fetchInitialCountries () {
      const [error, data] = await getAllCountries();
      setError(error);
      setCountries(data);
    }
    fetchInitialCountries();
  }, [])

  return (
    <Router>
    <div className="App">
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Switch>
          <Route path="/country/:id">
            <DetailCountry />
          </Route>
          <Route path="/">
            <ListCountries countries={countries} setCountries={setCountries} error={error} setError={setError} region={region} setRegion={setRegion}/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
