import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { CountriesContext } from './shared/contexts';
import { useCountries } from './shared/hooks';

import { CountriesList } from './countriesList/';
import { CountriesDetails } from './countryDetails';
// import { Navigation } from './navigation';

import './App.css';

function App() {
  const { countriesList, savedCountriesData, saveCountriesList, saveCountry } =
    useCountries();
    
  const countriesContextInitial = {
    countriesList,
    savedCountriesData,
    saveCountriesList,
    saveCountry,
  };

  return (
    <div className='App'>
      <CountriesContext.Provider value={countriesContextInitial}>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<CountriesList />} />
          <Route path='/country/:countryName' element={<CountriesDetails />} />
        </Routes>
      </CountriesContext.Provider>
    </div>
  );
}
export default App;
