import { useCallback, useReducer } from 'react';
import axios from 'axios';

const setLoading = (state) => {
  return {
    ...state,
    loading: true,
    error: false,
    errorMessage: null,
  };
};

const setError = (state, errorMessage) => {
  return {
    ...state,
    loading: false,
    error: true,
    errorMessage:
      errorMessage + '. Please try again later.' ||
      'Something went wrong. Please try again later.',
  };
};

const setData = (state, data) => {
  return {
    ...state,
    loading: false,
    error: false,
    errorMessage: null,
    data,
  };
};

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return setLoading(state);
    case 'ERROR':
      return setError(state, action.errorMessage);
    case 'SUCCESS':
      return setData(state, action.data);
    case 'SET_DISPLAYED_COUNTRY':
      return { ...state, data: action.countryData };
    default:
      throw new Error('action required');
  }
};

export const useFetchData = () => {
  const initailState = {
    loading: false,
    error: false,
    errorMessage: null,
    data: null,
  };

  const [state, dispatch] = useReducer(fetchDataReducer, initailState);

  const setDisplayedCountry = useCallback((countryData) => {
    dispatch({
      type: 'SET_DISPLAYED_COUNTRY',
      countryData,
    });
  }, []);

  const fetchCountryData = useCallback((country) => {
    dispatch({ type: 'LOADING' });
    const link = `https://restcountries.com/v2/name/${country}?fullText=true`;
    axios
      .get(link)
      .then((res) => dispatch({ type: 'SUCCESS', data: res.data[0] }))
      .catch((err) => {
        return dispatch({ type: 'ERROR', errorMessage: err.message });
      });
  }, []);

  const fetchCountiesList = useCallback((name, cb) => {
    dispatch({ type: 'LOADING' });
    const link = `https://restcountries.com/v2/name/${name}`;
    axios
      .get(link)
      .then((res) => {
        cb(res.data);
        dispatch({ type: 'SUCCESS', data: res.data });
      })
      .catch((err) => {
        return dispatch({ type: 'ERROR', errorMessage: err.message });
      });
  }, []);

  return { state, setDisplayedCountry, fetchCountryData, fetchCountiesList };
};
