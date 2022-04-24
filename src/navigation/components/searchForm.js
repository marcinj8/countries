import React, { useState, useContext } from 'react';
import { CountriesContext } from '../../shared/contexts';

const SearchForm = ({ fetchCountiesList }) => {
  const [formValue, setFormValue] = useState('');
  const { saveCountriesList } = useContext(CountriesContext);

  return (
    <React.Fragment>
      <button
        disabled={formValue.length < 2}
        onClick={() => fetchCountiesList(formValue, saveCountriesList)}
      >
        szukaj
      </button>
      <input
        type='text'
        name='country-name'
        placeholder='country name'
        value={formValue}
        onChange={(e) => setFormValue(e.target.value.toUpperCase())}
      />
      <button onClick={() => setFormValue('')}>x</button>
    </React.Fragment>
  );
};

export default SearchForm;
