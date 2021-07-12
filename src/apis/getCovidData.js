import { koreaUrl, cityUrl, worldUrl, countriesUrl } from 'utils/constant';

const getKoreaData = async() => {
    try {
        const koreaResponse = await fetch(koreaUrl);
        const koreaData = await koreaResponse.json();

        return koreaData;
    }
    catch(error){
        console.log(error);
    }
}

const getCityData = async() => {
    try {
        const cityResponse = await fetch(cityUrl);
        const cityData = await cityResponse.json();

        return cityData;
    }
    catch(error){
        console.log(error);
    }
}

const getWorldData = async() => {
    try {
        const worldResponse = await fetch(worldUrl);
        const worldData = await worldResponse.json();

        return worldData;
    }
    catch(error){
        console.log(error);
    }
}

const getCountriesData = async() => {
    try {
        const countriesResponse = await fetch(countriesUrl);
        const countriesData = await countriesResponse.json();

        return countriesData;
    }
    catch(error){
        console.log(error);
    }
}

export { getKoreaData, getCityData, getWorldData, getCountriesData };