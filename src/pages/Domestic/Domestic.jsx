import React from "react";
import { DomesticStatus, DomesticCityStatus } from "components/Domestic/index";
import Map from "components/Map/Map";
import * as GS from "style/Component.style";

const Domestic = () => {
    return (
        <>
            <GS.LeftContainer>
                <DomesticStatus></DomesticStatus>
                <DomesticCityStatus></DomesticCityStatus>
            </GS.LeftContainer>
            <GS.RightContainer>
                <Map></Map>
            </GS.RightContainer>
        </>
    );
};

export default Domestic;
