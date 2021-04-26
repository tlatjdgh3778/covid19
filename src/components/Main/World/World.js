import React, { useEffect, useState } from 'react'
// import WorldData from './WorldData/WorldData';
// import Chart from './Chart/Chart';
import WorldLeft from './WorldLeft/WorldLeft';
import WorldRight from './WorldRight/WorldRight';

function World() {
    const [world, setWorld] = useState({
        worldData:{
            confirmed:'',
            deaths:'',
            recovered:'',
            lastUpdate:'',
        },
        countriesData:'',
    });

    const world_url = 'https://covid19.mathdro.id/api';
    const countries_url = 'https://disease.sh/v3/covid-19/countries';

    const getData = async () => {
        const response = await fetch(world_url);
        const data = await response.json();

        const countries_response = await fetch(countries_url);
        const countries_data = await countries_response.json();
        setWorld({
            worldData:{
                confirmed:data.confirmed.value,
                deaths:data.deaths.value,
                recovered:data.recovered.value,
                lastUpdate:data.lastUpdate,
            },
            countriesData:countries_data,
        })
    }
    useEffect(()=>{
        getData();
    }, [])

    return(
        <>
        <WorldLeft world={world.worldData}></WorldLeft>
        <WorldRight countriesData={world.countriesData}></WorldRight>
        </>
    );
}

export default World;