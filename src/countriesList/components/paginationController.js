import React from 'react';

const PaginationController = ({ numberOfPages, activePage, setActivePage }) => {
  let buttons = [];

  for (let i = 0; i < numberOfPages; i++) {
    if (
      i === 0 ||
      i === numberOfPages - 1 ||
      (activePage - i <= 3 && i - activePage < 2)
    )
      buttons.push(
        <button
          key={i}
          disabled={i === activePage - 1}
          onClick={() => {
            setActivePage(i + 1);
          }}
        >
          {i + 1}
        </button>
      );
  }

  return <div>{buttons}</div>;
};

export default PaginationController;
