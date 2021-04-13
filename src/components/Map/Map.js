import React, { useState } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapData from '../../data/cities.json';
import styled from 'styled-components';

const MapContainerCustom = styled(MapContainer)`
height: 70vh;
width: 70vh;
background-color: #233044;
`;

const cityStyle = {
    fillColor: '#656f7d',
    color: '#233044',
    weight: 3,
}

function Map() {
    const [name, setName] = useState('');

    const onEachCity = (city, layer) => {
        const cityName = city.properties.CTP_KOR_NM;
        // layer.bindPopup(cityName);
    
        layer.on({
            mouseover: e => {
                layer.bindPopup(cityName);
                e.target.setStyle({fillColor: 'red'});
                setName(cityName);
            },
            mouseout: e => {
                e.target.setStyle({fillColor: '#656f7d'});
                layer.closePopup();
            },
    
        });
    }
    return(
        <>
        <div>{name}</div>
            <MapContainerCustom
            zoom={6.5}
            center={[36, 128]}>
                <GeoJSON style={cityStyle} data={mapData.features}
                onEachFeature={onEachCity} />
            </MapContainerCustom>
        </>
    );
}

export default Map;