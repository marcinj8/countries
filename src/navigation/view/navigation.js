import React from 'react';

import { SearchForm } from '../components';

const Navigation = ({ fetchCountiesList, isAscendingly, setIsAscendingly }) => {
  return (
    <nav>
      <SearchForm fetchCountiesList={fetchCountiesList} />
      <div>
        <button onClick={() => setIsAscendingly((prevState) => !prevState)}>
          Sortowanie: {isAscendingly ? ' a-z' : 'z-a'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
