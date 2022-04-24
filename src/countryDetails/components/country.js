import React from 'react';

import '../style/coutry.css';

const Country = ({ country }) => {
  return (
    <div className='country-container'>
      <h2>{country?.name}</h2>
      <h4>Stolica: {country?.capital}</h4>
      <h5>Waluta</h5>
      <div>{country?.currencies[0].name}</div>
      <div>Kod waluty: {country?.currencies[0].code}</div>
      <div>Symbol waluty: {country?.currencies[0].symbol}</div>
    </div>
  );
};

export default Country;
