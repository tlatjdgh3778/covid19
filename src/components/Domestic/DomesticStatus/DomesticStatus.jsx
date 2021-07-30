import React from "react";
import * as S from "./DomesticStatus.style";
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
            <S.DomesticStatusTitle>국내현황</S.DomesticStatusTitle>
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
                                                {koreaData.TotalCase}
                                            </S.Data>
                                            <S.TodayData color={"#df0736"}>
                                                <div>
                                                    {cityData.korea.newCase > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {cityData.korea.newCase}
                                                </div>
                                            </S.TodayData>
                                        </>
                                    ) : name === "치료중" ? (
                                        <>
                                            <S.Data color={"#0562cb"}>
                                                {koreaData.NowCase}
                                            </S.Data>
                                            <S.TodayData color={"#0562cb"}>
                                                <div>
                                                    {koreaData.TotalCaseBefore >
                                                    0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {koreaData.TotalCaseBefore}
                                                </div>
                                            </S.TodayData>
                                        </>
                                    ) : name === "격리해제" ? (
                                        <>
                                            <S.Data color={"#27a643"}>
                                                {koreaData.TotalRecovered}
                                            </S.Data>
                                            <S.TodayData color={"#27a643"}>
                                                <div>
                                                    {koreaData.TodayRecovered >
                                                    0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {koreaData.TodayRecovered}
                                                </div>
                                            </S.TodayData>
                                        </>
                                    ) : (
                                        <>
                                            <S.Data>
                                                {koreaData.TotalDeath}
                                            </S.Data>
                                            <S.TodayData>
                                                <div>
                                                    {koreaData.TodayDeath > 0
                                                        ? "+"
                                                        : ""}
                                                </div>
                                                <div>
                                                    {koreaData.TodayDeath}
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
        </>
    );
};

export default DomesticStatus;
