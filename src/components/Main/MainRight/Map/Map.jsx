import React, { useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapData from '../../../../data/cities.json';
import CountUp from 'react-countup';
import * as S from './Map.style';

function Map({koreaData, cityData, isDark}) {
    const [name, setName] = useState({
        name:'서울',
        case:cityData.seoul.newCase,
        totalCase:cityData.seoul.totalCase,
    });
    
    const onEachCity = (city, layer) => {
        const cityName = city.properties.CTP_ENG_NM;

        layer.on({
            click: e => {
                e.target.setStyle({fillColor: '#656f7d'});
                e.target.setStyle({fillColor: 'red'});
                switch(cityName){
                    case 'seoul':
                        setName({name: '서울', case: cityData.seoul.newCase, totalCase: cityData.seoul.totalCase});
                        break;
                    case 'incheon':
                        setName({name: '인천', case: cityData.incheon.newCase, totalCase: cityData.incheon.totalCase});
                        break;
                    case 'gyeonggi':
                        setName({name: '경기', case: cityData.gyeonggi.newCase, totalCase: cityData.gyeonggi.totalCase});
                        break;
                    case 'gangwon':
                        setName({name: '강원', case: cityData.gangwon.newCase, totalCase: cityData.gangwon.totalCase});
                        break;
                    case 'chungbuk':
                        setName({name: '충북', case: cityData.chungbuk.newCase, totalCase: cityData.chungbuk.totalCase});
                        break;
                    case 'chungnam':
                        setName({name: '충남', case: cityData.chungnam.newCase, totalCase: cityData.chungnam.totalCase});
                        break;
                    case 'daejeon':
                        setName({name: '대전', case: cityData.daejeon.newCase, totalCase: cityData.daejeon.totalCase});
                        break;
                    case 'sejong':
                        setName({name: '세종', case: cityData.sejong.newCase, totalCase: cityData.sejong.totalCase});
                        break;
                    case 'jeonnam':
                        setName({name: '전남', case: cityData.jeonnam.newCase, totalCase: cityData.jeonnam.totalCase});
                        break;
                    case 'jeonbuk':
                        setName({name: '전북', case: cityData.jeonbuk.newCase, totalCase: cityData.jeonbuk.totalCase});
                        break;
                    case 'gwangju':
                        setName({name: '광주', case: cityData.gwangju.newCase, totalCase: cityData.gwangju.totalCase});
                        break;
                    case 'gyeongbuk':
                        setName({name: '경북', case: cityData.gyeongbuk.newCase, totalCase: cityData.gyeongbuk.totalCase});
                        break;
                    case 'daegu':
                        setName({name: '대구', case: cityData.daegu.newCase, totalCase: cityData.daegu.totalCase});
                        break;
                    case 'ulsan':
                        setName({name: '울산', case: cityData.ulsan.newCase, totalCase: cityData.ulsan.totalCase});
                        break;
                    case 'busan':
                        setName({name: '부산', case: cityData.busan.newCase, totalCase: cityData.busan.totalCase});
                        break;
                    case 'gyeongnam':
                        setName({name: '경남', case: cityData.gyeongnam.newCase, totalCase: cityData.gyeongnam.totalCase});
                        break;
                    case 'jeju':
                        setName({name: '제주', case: cityData.jeju.newCase, totalCase: cityData.jeju.totalCase});
                        break;
                    default:
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

const newCase = parseInt(name.case.replace(/,/g , ''))
const newTotalCase = parseInt(name.totalCase.replace(/,/g , ''))
    return(
        <>
        <S.UpdateTime>{koreaData.updateTime}</S.UpdateTime>
        <S.CityName>{name.name}</S.CityName>
        <S.CityCaseContainer>
            <S.CityCase>
                <CountUp
                start={0}
                end={newCase}
                duration={1.5}
                separator=",">
                </CountUp>
            </S.CityCase>
            <S.CityCaseStatus>당일 확진자</S.CityCaseStatus>
        </S.CityCaseContainer>
        <S.CityCaseContainer>
            <S.CityCase>
                <CountUp
                start={0}
                end={newTotalCase}
                duration={1.5}
                separator=",">
                </CountUp>
            </S.CityCase>
            <S.CityCaseStatus>누적 확진자</S.CityCaseStatus>
        </S.CityCaseContainer>
        <S.MapContainerCustom
        zoom={6.5}
        center={[36, 128]}>
            <GeoJSON style={S.cityStyle} data={mapData.features}
            onEachFeature={onEachCity} />
        </S.MapContainerCustom>
        </>
    );
}

export default Map;