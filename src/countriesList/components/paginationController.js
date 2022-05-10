import React, { useMemo } from 'react';

import { pushButton, unshiftButton } from '../data';

const PaginationController = ({ numberOfPages, activePage, setActivePage }) => {
  const buttonsLimit = 7 < numberOfPages ? 7 : numberOfPages;

  const controllers = useMemo(() => {
    let counter = 1;
    let addBefore = true;
    const buttons = [];

    if (activePage !== 1 && numberOfPages !== activePage) {
      buttons.push(
        <button
          key={activePage}
          disabled={true}
          onClick={() => {
            setActivePage(activePage);
          }}
        >
          {activePage}
        </button>
      );
    }

    while (buttons.length < buttonsLimit - 2) {
      if (addBefore) {
        unshiftButton(counter, buttons, activePage, setActivePage);
        addBefore = false;
      } else {
        pushButton(counter, buttons, activePage, numberOfPages, setActivePage);
        addBefore = true;
        counter++;
      }
    }

    buttons.unshift(
      <button
        key={0}
        disabled={0 === activePage - 1}
        onClick={() => {
          setActivePage(1);
        }}
      >
        {1}
      </button>
    );
    if (numberOfPages !== 1) {
      buttons.push(
        <button
          key={numberOfPages}
          disabled={numberOfPages === activePage}
          onClick={() => {
            setActivePage(numberOfPages);
          }}
        >
          {numberOfPages}
        </button>
      );
    }

    return buttons;
  }, [activePage, numberOfPages, setActivePage, buttonsLimit]);

  return <div>{controllers}</div>;
};

export default PaginationController;
