import React from "react";
import { DomesticStatus, DomesticCityStatus } from "components/Domestic/index";
import Map from "components/Map/Map";
import * as GS from "style/Component.style";
import Loading from "components/Loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "store/index";

const Domestic = () => {
    const loadingKorea = useSelector((state: RootState) => state.korea.koreaData.loading);
    const loadingCity = useSelector((state: RootState) => state.korea.cityData.loading);

    return (
        <>
            <GS.MainContainer>
                {loadingKorea || loadingCity ? (
                    <Loading />
                ) : (
                    <>
                        <GS.LeftContainer>
                            <DomesticStatus></DomesticStatus>
                            <DomesticCityStatus></DomesticCityStatus>
                        </GS.LeftContainer>
                        <GS.RightContainer>
                            <Map></Map>
                        </GS.RightContainer>
                    </>
                )}
            </GS.MainContainer>
        </>
    );
};

export default Domestic;
