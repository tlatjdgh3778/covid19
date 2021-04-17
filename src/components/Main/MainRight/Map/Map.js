import React, { useState } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapData from '../../../../data/cities.json';
import styled from 'styled-components';

const MapContainerCustom = styled(MapContainer)`
background-color: #233044;
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
font-size: ${(props) => props.theme.fontSize.lg};
`;

function Map({koreaData, cityData}) {
    const [name, setName] = useState({
        name:'서울',
        case:cityData.seoul.newCase
    });

    const onEachCity = (city, layer) => {
        const cityName = city.properties.CTP_ENG_NM;

        layer.on({
            click: e => {

                e.target.setStyle({fillColor: 'red'});
                switch(cityName){
                    case 'seoul':
                        setName({name: '서울', case: cityData.seoul.newCase});
                        break;
                    case 'incheon':
                        setName({name: '인천', case: cityData.incheon.newCase});
                        break;
                    case 'gyeonggi':
                        setName({name: '경기', case: cityData.gyeonggi.newCase});
                        break;
                    case 'gangwon':
                        setName({name: '강원', case: cityData.gangwon.newCase});
                        break;
                    case 'chungbuk':
                        setName({name: '충북', case: cityData.chungbuk.newCase});
                        break;
                    case 'chungnam':
                        setName({name: '충남', case: cityData.chungnam.newCase});
                        break;
                    case 'daejeon':
                        setName({name: '대전', case: cityData.daejeon.newCase});
                        break;
                    case 'sejong':
                        setName({name: '세종', case: cityData.sejong.newCase});
                        break;
                    case 'jeonnam':
                        setName({name: '전남', case: cityData.jeonnam.newCase});
                        break;
                    case 'jeonbuk':
                        setName({name: '전북', case: cityData.jeonbuk.newCase});
                        break;
                    case 'gwangju':
                        setName({name: '광주', case: cityData.gwangju.newCase});
                        break;
                    case 'gyeongbuk':
                        setName({name: '경북', case: cityData.gyeongbuk.newCase});
                        break;
                    case 'daegu':
                        setName({name: '대구', case: cityData.daegu.newCase});
                        break;
                    case 'ulsan':
                        setName({name: '울산', case: cityData.ulsan.newCase});
                        break;
                    case 'busan':
                        setName({name: '부산', case: cityData.busan.newCase});
                        break;
                    case 'gyeongnam':
                        setName({name: '경남', case: cityData.gyeongnam.newCase});
                        break;
                    case 'jeju':
                        setName({name: '제주', case: cityData.jeju.newCase});
                        break;
                }
            },
            mouseover: e => {
                e.target.setStyle({fillColor: 'red'});
            },
            mouseout: e => {
                e.target.setStyle({fillColor: '#656f7d'});
                // layer.closePopup();
            },
        });
}
    return(
        <>
        <CityName>{name.name}</CityName>
        <CityName>당일 확진자 : {name.case}</CityName>
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