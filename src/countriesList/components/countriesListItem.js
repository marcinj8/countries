import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { chooseCountry } from '../../navigation/data/navigationData';

import '../style/countriesListItem.css';

const CountriesListItem = ({ countryName }) => {
  const itemRef = useRef(null);

  return (
    <li
      onClick={() => chooseCountry(itemRef.current)}
      className='countriesListItem-container'
    >
      <Link ref={itemRef} to={`/country/${countryName}`}>
        {countryName} united
      </Link>
    </li>
  );
};

export default CountriesListItem;
