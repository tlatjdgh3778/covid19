import React, { useEffect, useState, useContext } from 'react';
import WorldLeft from './WorldLeft/WorldLeft';
import { ThemeContext } from "styled-components";
import WorldRight from './WorldRight/WorldRight';
import Loader from 'react-loader-spinner';

function World() {
    const themeContext = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
    }
    useEffect(()=>{
        getData();
    }, [])

    return(
        <>
        {isLoading || !world ? 
        <Loader
        type="Oval"
        color={themeContext.color.fontColor}
        height={50}
        width={50}
        timeout={3000}
        />: 
        <>
            <WorldLeft world={world.worldData}></WorldLeft>
            <WorldRight countriesData={world.countriesData}></WorldRight>
        </>}
        </>
    );
}

export default World;