import React from 'react';
import WorldStatus from './WorldStatus/WorldStatus';
import * as S from './WorldRight.style';

function WorldRight({countriesData}) {
    return(
        <S.MainRightContainer>
            <WorldStatus countriesData={countriesData}></WorldStatus>
        </S.MainRightContainer>
    )
}

export default WorldRight;