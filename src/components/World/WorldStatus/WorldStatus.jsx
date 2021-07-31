import React from "react";
import * as GS from "style/Component.style";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "store/modules/state";
const WorldStatus = () => {
    const dispatch = useDispatch();
    const worldData = useSelector(({ world }) => world.worldData.data);
    const currentState = useSelector(({ state }) => state.currentState);

    const names = ["확진환자", "격리해제", "사망자"];
    const data = ["cases", "recovered", "deaths"];
    const todayData = ["todayCases", "todayRecovered", "todayDeaths"];

    const onClick = (e) => {
        dispatch(changeState(e.currentTarget.childNodes[0].innerHTML));
    };

    return (
        <>
            <GS.StatusTitle>세계현황</GS.StatusTitle>
            <GS.StatusContainer>
                {names.map((name, i) => {
                    return (
                        <GS.TotalContainer
                            onClick={onClick}
                            key={i}
                            color={name}
                            activeColor={currentState}
                        >
                            <GS.Title>{name}</GS.Title>
                            <>
                                <GS.Data color={name}>
                                    {worldData[data[i]].toLocaleString()}
                                </GS.Data>
                                <GS.TodayData color={name}>
                                    <div>
                                        {worldData[data[i]] > 0 ? "+" : ""}
                                    </div>
                                    <div>
                                        {worldData[
                                            todayData[i]
                                        ].toLocaleString()}
                                    </div>
                                </GS.TodayData>
                            </>
                        </GS.TotalContainer>
                    );
                })}
            </GS.StatusContainer>
        </>
    );
};

export default WorldStatus;
