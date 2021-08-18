import React from "react";
import * as GS from "style/Component.style";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "store/modules/state";
import { RootState } from "store/index";

const WorldStatus = () => {
    const dispatch = useDispatch();
    const worldData = useSelector((state: RootState) => state.world.worldData.data);
    const currentState = useSelector((state: RootState) => state.state.currentState);

    const names = ["확진환자", "격리해제", "사망자"];
    const data = ["cases", "recovered", "deaths"];
    const todayData = ["todayCases", "todayRecovered", "todayDeaths"];

    const onClick = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        const value = currentTarget.childNodes[0].textContent as string;
        dispatch(changeState(value));
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
                            style={{ width: "calc(33%)" }}
                        >
                            <GS.Title>{name}</GS.Title>
                            <>
                                <GS.Data color={name}>
                                    {worldData[data[i]].toLocaleString()}
                                </GS.Data>
                                <GS.TodayData color={name}>
                                    <div>{Number(worldData[data[i]]) > 0 ? "+" : ""}</div>
                                    <div>{worldData[todayData[i]].toLocaleString()}</div>
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
