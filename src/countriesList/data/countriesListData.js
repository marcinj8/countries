const compare = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }

  return 0;
};

export const sortList = (list, isAscendingly = true) => {
  const fullList = [...list];
  fullList.sort(compare);

  if (!isAscendingly) {
    fullList.reverse();
  }

  return fullList;
};

export const getPagination = (list, noOnPage, isAscendingly) => {
  const paginationList = [];
  const sortedList = sortList(list, isAscendingly);

  while (sortedList.length > 0) {
    const newPage = sortedList.splice(0, noOnPage);
    paginationList.push(newPage);
  }

  return paginationList;
};
