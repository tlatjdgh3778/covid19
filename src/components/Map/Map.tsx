import React, { useState } from "react";
import { GeoJSON } from "react-leaflet";
import { Layer, LeafletMouseEvent } from "leaflet";
import * as geojson from "geojson";
import "leaflet/dist/leaflet.css";
import { mapData } from "data/koreaMapData";
import CountUp from "react-countup";
import * as S from "./Map.style";
import { useSelector } from "react-redux";
import { RootState } from "store/index";

const Map = () => {
    const koreaData = useSelector((state: RootState) => state.korea.koreaData.data);
    const cityData = useSelector((state: RootState) => state.korea.cityData.data);
    const currentState = useSelector((state: RootState) => state.state.currentState);

    const [name, setName] = useState({
        name: "서울",
        case: cityData.seoul.newCase,
        totalCase: cityData.seoul.totalCase,
        recovered: cityData.seoul.recovered,
        death: cityData.seoul.death,
    });

    const clickCity = (e: LeafletMouseEvent, target: string, cityName: string) => {
        e.target.setStyle({ fillColor: "red" });

        setName({
            name: cityName,
            case: cityData[`${target}`].newCase,
            totalCase: cityData[`${target}`].totalCase,
            recovered: cityData[`${target}`].recovered,
            death: cityData[`${target}`].death,
        });
    };
    const cityStyle = {
        fillColor: "#656f7d",
        color: "#233044",
        weight: 3,
    };

    const onEachCity = (city: geojson.Feature<geojson.Geometry, any>, layer: Layer) => {
        const target = city.properties.CTP_ENG_NM;
        const cityName = city.properties.CTP_KOR_NM;
        if (currentState === cityName) {
        }
        layer.on({
            click: (e: LeafletMouseEvent) => {
                clickCity(e, target, cityName);
            },
            mouseover: (e: LeafletMouseEvent) => {
                e.target.setStyle({ fillColor: "red" });
            },
            mouseout: (e: LeafletMouseEvent) => {
                e.target.setStyle({ fillColor: "#656f7d" });
            },
        });
    };

    const newCase = parseInt(name.case.replace(/,/g, ""));

    const newTotalCase = parseInt(name.totalCase.replace(/,/g, ""));
    const newRecovered = parseInt(name.recovered.replace(/,/g, ""));
    const newDeath = parseInt(name.death.replace(/,/g, ""));

    return (
        <>
            <S.UpdateTime>{koreaData.updateTime}</S.UpdateTime>
            <S.CityName>{name.name}</S.CityName>
            <S.CityCaseContainer>
                <S.CityCase>
                    <CountUp start={0} end={newCase} duration={1.5} separator=","></CountUp>
                </S.CityCase>
                <S.CityCaseStatus>당일 확진환자 수</S.CityCaseStatus>
            </S.CityCaseContainer>
            <S.CityCaseContainer>
                <S.CityCase color={currentState}>
                    <CountUp
                        start={0}
                        end={
                            currentState === "확진환자"
                                ? newTotalCase
                                : currentState === "격리해제"
                                ? newRecovered
                                : currentState === "치료중"
                                ? 0
                                : newDeath
                        }
                        duration={1.5}
                        separator=","
                    ></CountUp>
                </S.CityCase>
                {currentState === "치료중" ? (
                    <S.CityCaseStatus>
                        {currentState} 수(치료중 수는 데이터가 제공되지 않습니다.)
                    </S.CityCaseStatus>
                ) : (
                    <S.CityCaseStatus>{currentState} 수</S.CityCaseStatus>
                )}
            </S.CityCaseContainer>
            <S.MapContainerCustom zoom={6.5} center={[36, 128]}>
                <GeoJSON style={cityStyle} data={mapData.features} onEachFeature={onEachCity} />
            </S.MapContainerCustom>
        </>
    );
};

export default Map;
