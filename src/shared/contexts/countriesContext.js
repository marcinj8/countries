import React from 'react';

export const CountriesContext = React.createContext({
  countriesList: [],
  savedCountriesData: [],
  saveCountriesList: () => {},
  saveCountry: () => {},
});
