import React from "react";
import { DomesticStatus, DomesticCityStatus } from "components/Domestic/index";
import Map from "components/Map/Map";
import * as GS from "style/Component.style";
import Loading from "components/Loading/Loading";
import { useSelector } from "react-redux";

const Domestic = () => {
    const loadingKorea = useSelector(({ korea }) => korea.koreaData.loading);
    const loadingCity = useSelector(({ korea }) => korea.cityData.loading);

    return (
        <>
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
        </>
    );
};

export default Domestic;
