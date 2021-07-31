import React from "react";
import * as GS from "style/Component.style";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "store/modules/state";

const DomesticStatus = () => {
    // 누적 확진자 : TotalCase, city_url.korea.newCase
    // 격리해제(완치) : TotalRecovered, TodayRecovered
    // 격리중(치료중) : NowCase, TotalCaseBefore
    // 사망자 수 : TotalDeath, TodayDeath
    const dispatch = useDispatch();
    const names = ["치료중", "격리해제", "사망자"];
    const koreaData = useSelector(({ korea }) => korea.koreaData.data);
    const cityData = useSelector(({ korea }) => korea.cityData.data);
    const currentState = useSelector(({ state }) => state.currentState);

    const onClick = (e) => {
        dispatch(changeState(e.currentTarget.childNodes[0].innerHTML));
    };

    const data = ["NowCase", "TotalRecovered", "TotalDeath"];
    const todayData = ["TotalCaseBefore", "TodayRecovered", "TodayDeath"];

    return (
        <>
            <GS.StatusTitle>국내현황</GS.StatusTitle>
            <GS.StatusContainer>
                <GS.TotalContainer
                    onClick={onClick}
                    color="확진환자"
                    activeColor={currentState}
                >
                    {
                        <>
                            <GS.Title>확진환자</GS.Title>
                            <GS.Data color="확진환자">
                                {koreaData.TotalCase}
                            </GS.Data>
                            <GS.TodayData color="확진환자">
                                <div>
                                    {cityData.korea.newCase.replace(",", "") > 0
                                        ? "+"
                                        : ""}
                                </div>
                                <div>{cityData.korea.newCase}</div>
                            </GS.TodayData>
                        </>
                    }
                </GS.TotalContainer>
                {names.map((name, i) => {
                    return (
                        <GS.TotalContainer
                            key={i}
                            onClick={onClick}
                            color={name}
                            activeColor={currentState}
                        >
                            {
                                <>
                                    <GS.Title>{name}</GS.Title>
                                    <GS.Data color={name}>
                                        {koreaData[data[i]]}
                                    </GS.Data>
                                    <GS.TodayData color={name}>
                                        <div>
                                            {koreaData[todayData[i]] > 0
                                                ? "+"
                                                : ""}
                                        </div>
                                        <div>
                                            {Number(
                                                koreaData[todayData[i]]
                                            ).toLocaleString()}
                                        </div>
                                    </GS.TodayData>
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
