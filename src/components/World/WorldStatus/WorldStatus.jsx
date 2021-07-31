import React from "react";
import * as GS from "style/Component.style";
import { useSelector } from "react-redux";

const WorldStatus = () => {
    const worldData = useSelector(({ world }) => world.worldData.data);

    const names = ["확진환자", "격리해제", "사망자"];

    return (
        <>
            <GS.StatusTitle>세계현황</GS.StatusTitle>
            <GS.StatusContainer>
                {names.map((name, i) => {
                    return (
                        <GS.TotalContainer key={i}>
                            {
                                <>
                                    <GS.Title>{name}</GS.Title>
                                    {name === "확진환자" ? (
                                        <>
                                            <GS.Data color={"#df0736"}>
                                                {worldData.cases.toLocaleString()}
                                            </GS.Data>
                                            <GS.TodayData color={"#df0736"}>
                                                <div>
                                                    {worldData.cases > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {worldData.todayCases.toLocaleString()}
                                                </div>
                                            </GS.TodayData>
                                        </>
                                    ) : name === "격리해제" ? (
                                        <>
                                            <GS.Data color={"#27a643"}>
                                                {worldData.recovered.toLocaleString()}
                                            </GS.Data>
                                            <GS.TodayData color={"#27a643"}>
                                                <div>
                                                    {worldData.recovered > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {worldData.todayRecovered.toLocaleString()}
                                                </div>
                                            </GS.TodayData>
                                        </>
                                    ) : (
                                        <>
                                            <GS.Data>
                                                {worldData.deaths.toLocaleString()}
                                            </GS.Data>
                                            <GS.TodayData>
                                                <div>
                                                    {worldData.deaths > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {worldData.todayDeaths.toLocaleString()}
                                                </div>
                                            </GS.TodayData>
                                        </>
                                    )}
                                </>
                            }
                        </GS.TotalContainer>
                    );
                })}
            </GS.StatusContainer>
        </>
    );
};

export default WorldStatus;
