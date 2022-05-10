import React, { useContext, useMemo, useState } from 'react';

import { Navigation } from '../../navigation';
import { AsyncView } from '../../shared/asyncView';
import { CountriesListItem, PaginationController } from '../components';

import { CountriesContext } from '../../shared/contexts';
import { useFetchData } from '../../shared/hooks';
import { getPagination } from '../data';

const CountriesList = () => {
  const { countriesList, saveCountriesList } = useContext(CountriesContext);
  const [activePage, setActivePage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [isAscendingly, setIsAscendingly] = useState(true);

  const { state, fetchCountiesList } = useFetchData();

  const list = useMemo(() => {
    if (countriesList.length === 0) {
      return fetchCountiesList('united', saveCountriesList);
    }
    const pagginationList = getPagination(countriesList, 5, isAscendingly);
    setNumberOfPages(pagginationList.length);

    return pagginationList[activePage - 1].map((item) => (
      <CountriesListItem key={item.name} countryName={item.name} />
    ));
  }, [countriesList, activePage, isAscendingly, fetchCountiesList, saveCountriesList]);

  return (
    <React.Fragment>
      <Navigation
        fetchCountiesList={fetchCountiesList}
        isAscendingly={isAscendingly}
        setIsAscendingly={setIsAscendingly}
      />
      {(state.loading || state.error) && (
        <AsyncView
          loading={state.loading}
          error={state.error}
          errorMessage={state.errorMessage}
        />
      )}
      {!state.loading && !state.error && countriesList.length === 0 && (
        <h2>brak wyszukiwań</h2>
      )}
      {countriesList.length > 0 && (
        <div>
          <h2>Liczba znalezionych państw: {countriesList.length}</h2>
          <ul>{list}</ul>
        </div>
      )}
      {numberOfPages > 0 && (
        <PaginationController
          numberOfPages={numberOfPages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
    </React.Fragment>
  );
};

export default CountriesList;
