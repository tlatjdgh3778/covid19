import React from 'react';
import Map from './Map/Map';
import * as S from './MainRight.style';

function MainRight({koreaData, cityData, isDark}) {

    return(
        <S.MainRightContainer>
            <Map koreaData={koreaData} cityData={cityData} isDark={isDark}></Map>
        </S.MainRightContainer>
    );
}

export default MainRight;