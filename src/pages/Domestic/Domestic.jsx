import React from "react";
import { DomesticStatus, DomesticCityStatus } from "components/Domestic/index";
import Map from "components/Map/Map";
import * as GS from "style/Component.style";

const Domestic = ({ koreaData, cityData, isDark }) => {
    return (
        <>
            <GS.LeftContainer>
                <DomesticStatus
                    koreaData={koreaData}
                    cityData={cityData}
                ></DomesticStatus>
                <DomesticCityStatus cityData={cityData}></DomesticCityStatus>
            </GS.LeftContainer>
            <GS.RightContainer>
                <Map
                    koreaData={koreaData}
                    cityData={cityData}
                    isDark={isDark}
                ></Map>
            </GS.RightContainer>
            {/* <div>국내 api 주소 작업 중</div> */}
        </>
    );
};

export default Domestic;
