import { useCallback, useEffect, useState } from 'react';

export const useCountries = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [savedCountriesData, setSavedCountriesData] = useState([]);

  const saveCountriesList = useCallback((list) => {
    setCountriesList(list);
  }, []);

  const saveCountry = useCallback(
    (country) => {
      const updatedList = [...savedCountriesData];
      updatedList.push(country);
      localStorage.setItem('savedCountries', JSON.stringify(updatedList));

      setSavedCountriesData(updatedList);
    },
    [savedCountriesData]
  );

  useEffect(() => {
    if (savedCountriesData.length === 0) {
      const savedCountires = JSON.parse(localStorage.getItem('savedCountries'));
      if (savedCountires) {
        setSavedCountriesData(savedCountires);
      }
    }
  }, [savedCountriesData]);

  return { countriesList, savedCountriesData, saveCountriesList, saveCountry };
};
