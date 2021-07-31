import React from "react";
import * as GS from "style/Component.style";
import { useSelector } from "react-redux";

const DomesticStatus = () => {
    // 누적 확진자 : TotalCase, city_url.korea.newCase
    // 격리해제(완치) : TotalRecovered, TodayRecovered
    // 격리중(치료중) : NowCase, TotalCaseBefore
    // 사망자 수 : TotalDeath, TodayDeath

    const names = ["확진환자", "치료중", "격리해제", "사망자"];
    const koreaData = useSelector(({ korea }) => korea.koreaData.data);
    const cityData = useSelector(({ korea }) => korea.cityData.data);

    return (
        <>
            <GS.StatusTitle>국내현황</GS.StatusTitle>
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
                                                {koreaData.TotalCase.toLocaleString()}
                                            </GS.Data>
                                            <GS.TodayData color={"#df0736"}>
                                                <div>
                                                    {cityData.korea.newCase > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {cityData.korea.newCase.toLocaleString()}
                                                </div>
                                            </GS.TodayData>
                                        </>
                                    ) : name === "치료중" ? (
                                        <>
                                            <GS.Data color={"#0562cb"}>
                                                {koreaData.NowCase.toLocaleString()}
                                            </GS.Data>
                                            <GS.TodayData color={"#0562cb"}>
                                                <div>
                                                    {koreaData.TotalCaseBefore >
                                                    0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {koreaData.TotalCaseBefore.toLocaleString()}
                                                </div>
                                            </GS.TodayData>
                                        </>
                                    ) : name === "격리해제" ? (
                                        <>
                                            <GS.Data color={"#27a643"}>
                                                {koreaData.TotalRecovered.toLocaleString()}
                                            </GS.Data>
                                            <GS.TodayData color={"#27a643"}>
                                                <div>
                                                    {koreaData.TodayRecovered >
                                                    0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {koreaData.TodayRecovered.toLocaleString()}
                                                </div>
                                            </GS.TodayData>
                                        </>
                                    ) : (
                                        <>
                                            <GS.Data>
                                                {koreaData.TotalDeath.toLocaleString()}
                                            </GS.Data>
                                            <GS.TodayData>
                                                <div>
                                                    {koreaData.TodayDeath > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {koreaData.TodayDeath.toLocaleString()}
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

export default DomesticStatus;
