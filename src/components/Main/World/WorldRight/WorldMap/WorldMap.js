import React, { useState } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapData from '../../../../../data/countries.json';
import styled from 'styled-components';

const MapContainerCustom = styled(MapContainer)`
/* background-color: ${(props) => props.theme.color.bgColor}; */
width: 35rem;
height: 70vh;

    @media ${(props) => props.theme.device.TabletPortrait}{
        width: 100%;
    }
`;

const cityStyle = {
    fillColor: '#656f7d',
    color: '#233044',
    weight: 3,
}

const CityName = styled.div`
margin: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
`;

const CityCaseContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;
`;

const CityCase = styled.div`
font-weight: 700;
color: ${(props) => props.theme.color.fontRed};
font-size: ${(props) => props.theme.fontSize.lg};
`;
const CityCaseStatus = styled.div`
`;

const UpdateTime = styled.div`
margin-left: 1rem;
margin-right: 1rem;
margin-bottom: 0.5rem;
font-size: ${(props) => props.theme.fontSize.ssm};
`;

function WorldMap() {

    return(
        <>
        <button onClick={()=>{
            console.log(mapData);
        }}>눌러바</button>
        </>
    );
}

export default WorldMap;