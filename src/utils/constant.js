const API_KEY = process.env.REACT_APP_API_KEY;

export const koreaUrl = `https://ajax-api.corona-19.kr/?dir=korea&serviceKey=${API_KEY}`;

export const cityUrl = `https://ajax-api.corona-19.kr/?dir=country&serviceKey=${API_KEY}`;

export const worldUrl = 'https://disease.sh/v3/covid-19/all';

export const countriesUrl = 'https://disease.sh/v3/covid-19/countries';