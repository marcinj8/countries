import axios from 'axios';

export const getCountryData = (country, cb) => {
  const link = `https://restcountries.com/v2/name/${country}?fullText=true`;
  axios
    .get(link)
    .then((res) => cb(res.data[0]))
    .catch((err) => console.log(err));
};

export const getSavedCountryData = (countryName, list) => {
  if (!list || list.length === 0) {
    return null;
  }

  const countryData = list.find((country) => country.name === countryName);

  return countryData ? countryData : null;
};
