import React from 'react';
import WorldData from './WorldData/WorldData';
import Chart from './Chart/Chart';
import * as S from './WorldLeft.style';

function WorldLeft({world}) {

    return(
        <S.MainLeftContainer>
            <WorldData world={world}></WorldData>
            <Chart></Chart>
        </S.MainLeftContainer>
    );
}

export default WorldLeft;
