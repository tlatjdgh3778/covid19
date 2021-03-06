const API_KEY = process.env.REACT_APP_API_KEY;

export const koreaUrl = `https://api.corona-19.kr/korea/?serviceKey=${API_KEY}`;
export const cityUrl = `https://api.corona-19.kr/korea/country/new/?serviceKey=${API_KEY}`;
export const worldUrl = "https://disease.sh/v3/covid-19/all";
export const countriesUrl = "https://disease.sh/v3/covid-19/countries";
export const worldDaily = "https://disease.sh/v3/covid-19/historical/all?lastdays=90";
