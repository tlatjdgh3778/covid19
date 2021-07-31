import React from "react";
import * as S from "./WorldStatus.style";
import { useSelector } from "react-redux";

const WorldStatus = () => {
    const worldData = useSelector(({ world }) => world.worldData.data);

    const names = ["확진환자", "격리해제", "사망자"];

    return (
        <S.WorldDataContainer>
            <S.DomesticStatusTitle>세계현황</S.DomesticStatusTitle>
            <S.DomesticStatusContainer>
                {names.map((name, i) => {
                    return (
                        <S.TotalContainer key={i}>
                            {
                                <>
                                    <S.Title>{name}</S.Title>
                                    {name === "확진환자" ? (
                                        <>
                                            <S.Data color={"#df0736"}>
                                                {worldData.cases.toLocaleString()}
                                            </S.Data>
                                            <S.TodayData color={"#df0736"}>
                                                <div>
                                                    {worldData.cases > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {worldData.todayCases.toLocaleString()}
                                                </div>
                                            </S.TodayData>
                                        </>
                                    ) : name === "격리해제" ? (
                                        <>
                                            <S.Data color={"#27a643"}>
                                                {worldData.recovered.toLocaleString()}
                                            </S.Data>
                                            <S.TodayData color={"#27a643"}>
                                                <div>
                                                    {worldData.recovered > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {worldData.todayRecovered.toLocaleString()}
                                                </div>
                                            </S.TodayData>
                                        </>
                                    ) : (
                                        <>
                                            <S.Data>
                                                {worldData.deaths.toLocaleString()}
                                            </S.Data>
                                            <S.TodayData>
                                                <div>
                                                    {worldData.deaths > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {worldData.todayDeaths.toLocaleString()}
                                                </div>
                                            </S.TodayData>
                                        </>
                                    )}
                                </>
                            }
                        </S.TotalContainer>
                    );
                })}
            </S.DomesticStatusContainer>
        </S.WorldDataContainer>
    );
};

export default WorldStatus;
