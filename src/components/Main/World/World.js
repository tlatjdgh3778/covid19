import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import WorldLeft from './WorldLeft/WorldLeft';
import WorldRight from './WorldRight/WorldRight';

function World() {
    const [world, setWorld] = useState({
        confirmed:'',
        deaths:'',
        recovered:'',
        lastUpdate:'',
    });

    const url = 'https://covid19.mathdro.id/api';

    const getData = async () => {
        const response = await fetch(url);

        const data = await response.json();
        setWorld({
            confirmed:data.confirmed.value,
            deaths:data.deaths.value,
            recovered:data.recovered.value,
            lastUpdate:data.lastUpdate,
        })
        console.log(data);
    }
    useEffect(()=>{
        getData();
    }, [])
    return(
        <>
            <WorldLeft world={world}></WorldLeft>
            <WorldRight></WorldRight>
        </>
    );
}

export default World;