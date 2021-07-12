import React from 'react'
import DomesticStatus from 'components/Domestic/DomesticStatus/DomesticStatus';
import DomesticCityStatus from 'components/Domestic/DomesticCityStatus/DomesticCityStatus';
import Map from 'components/Map/Map';
import * as GS from 'style/Component.style';

const Domestic = ({koreaData, cityData, isDark}) => {
    return(
        <>
            <GS.LeftContainer>
                <DomesticStatus koreaData={koreaData} cityData={cityData}></DomesticStatus>
                <DomesticCityStatus cityData={cityData}></DomesticCityStatus>
            </GS.LeftContainer>
            <GS.RightContainer>
                <Map koreaData={koreaData} cityData={cityData} isDark={isDark}></Map>
            </GS.RightContainer>  
        </>
    );
}

export default Domestic;