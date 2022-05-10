export const pushButton = (
  i,
  buttons,
  activePage,
  numberOfPages,
  setActivePage
) => {
  if (activePage + i > numberOfPages - 1) {
    return;
  }

  buttons.push(
    <button
      key={activePage + i}
      disabled={false}
      onClick={() => {
        setActivePage(activePage + i);
      }}
    >
      {activePage + i}
    </button>
  );
};

export const unshiftButton = (i, buttons, activePage, setActivePage) => {
  if (activePage - i < 2) {
    return;
  }

  buttons.unshift(
    <button
      key={activePage - i}
      disabled={false}
      onClick={() => {
        setActivePage(activePage - i);
      }}
    >
      {activePage - i}
    </button>
  );
};
