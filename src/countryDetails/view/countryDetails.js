import React, { useContext, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AsyncView } from '../../shared/asyncView';
import { Country } from '../components';

import { useFetchData } from '../../shared/hooks/fetchData-hook';
import { CountriesContext } from '../../shared/contexts';
import { getSavedCountryData } from '../data/countryDetailsData';

import '../style/countryDetails.css';

const CountriesDetails = () => {
  const { countriesList, savedCountriesData, saveCountry } =
    useContext(CountriesContext);
  const { countryName } = useParams();
  const { state, setDisplayedCountry, fetchCountryData } = useFetchData();

  const savedCountryOnList = useMemo(() => {
    return getSavedCountryData(countryName, countriesList);
  }, [countryName, countriesList]);

  const savedCountryInStorage = useMemo(() => {
    return getSavedCountryData(
      countryName,
      savedCountriesData.length > 0
        ? savedCountriesData
        : JSON.parse(localStorage.getItem('savedCountries'))
    );
  }, [countryName, savedCountriesData]);

  const countryDetails = useMemo(() => {
    return <Country country={state.data} />;
  }, [state.data]);

  useEffect(() => {
    if (state.data) {
      return;
    }
    if (savedCountryOnList && !savedCountryInStorage) {
      saveCountry(savedCountryOnList);
      setDisplayedCountry(savedCountryOnList);
    } else if (savedCountryOnList) {
      setDisplayedCountry(savedCountryOnList);
    } else if (savedCountryInStorage) {
      setDisplayedCountry(savedCountryInStorage);
    }
  }, [
    savedCountryOnList,
    savedCountryInStorage,
    state.data,
    saveCountry,
    setDisplayedCountry,
  ]);

  useEffect(() => {
    if (
      state.data !== null ||
      savedCountryOnList !== null ||
      savedCountryInStorage !== null
    ) {
      return;
    } else {
      fetchCountryData(countryName);
    }
  }, [
    countryName,
    state.data,
    savedCountryOnList,
    savedCountryInStorage,
    setDisplayedCountry,
    fetchCountryData,
  ]);

  useEffect(() => {
    if (!state.data || savedCountryInStorage) {
      return;
    }

    saveCountry(state.data);
  }, [state.data, savedCountryInStorage, saveCountry]);

  return (
    <div className='countryDetails-container'>
      <Link className='countryDetails-link' to='/'>
        powrót
      </Link>
      {state.data === null && (
        <AsyncView
          loading={state.loading}
          error={state.error}
          errorMessage={state.errorMessage}
        />
      )}
      {countryDetails && <div>{countryDetails}</div>}
    </div>
  );
};

export default CountriesDetails;
