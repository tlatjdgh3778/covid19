// worldData type
export type WorldDataType = {
    [data: string]: number;
    // "updated": 1629285803392,
    // "cases": 209553889,
    // "todayCases": 210626,
    // "deaths": 4398213,
    // "todayDeaths": 4704,
    // "recovered": 187826311,
    // "todayRecovered": 198211,
    // "active": 17329365,
    // "critical": 107853,
    // "casesPerOneMillion": 26884,
    // "deathsPerOneMillion": 564.2,
    // "tests": 3176574144,
    // "testsPerOneMillion": 404952.52,
    // "population": 7844312536,
    // "oneCasePerPeople": 0,
    // "oneDeathPerPeople": 0,
    // "oneTestPerPeople": 0,
    // "activePerOneMillion": 2209.16,
    // "recoveredPerOneMillion": 23944.27,
    // "criticalPerOneMillion": 13.75,
    // "affectedCountries": 222
};
// initial State
export const worldData: WorldDataType = {
    updated: 0,
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    active: 0,
};

// world countries Data type

export type WorldCountriesDataType = {
    // country, cases, recovered, deaths, casesPerOneMillion
    country: string;
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    casesPerOneMillion: number;

    // "active": 37437,
    // "critical": 1124,
    // "deathsPerOneMillion": 177,
    // "tests": 747196,
    // "testsPerOneMillion": 18721,
    // "population": 39912306,
    // "continent": "Asia",
    // "oneCasePerPeople": 262,
    // "oneDeathPerPeople": 5664,
    // "oneTestPerPeople": 53,
    // "activePerOneMillion": 937.98,
    // "recoveredPerOneMillion": 2704.1,
    // "criticalPerOneMillion": 28.16
};

export const worldCountriesData = {
    country: "",
    updated: 0,
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    casesPerOneMillion: 0,
};

// dailyData 90days
type DayType = {
    [index: string]: number;
};
export type WorldDailyDataType = {
    [index: string]: DayType;
};

export const WorldDailyData = {
    case: {},
    deaths: {},
    recovered: {},
};
