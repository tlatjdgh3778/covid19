import React from 'react';
import styled from 'styled-components';
import WorldData from './WorldData/WorldData';
import Chart from './Chart/Chart';

const MainLeftContainer = styled.div`
margin: 0 3rem;
color: ${(props) => props.theme.color.fontColor};


    @media ${(props) => props.theme.device.TabletLandscape}{
        margin: 1rem;
        width: 90%;
    }
    @media ${(props) => props.theme.device.TabletPortrait}{
        display: flex;
        flex-direction: column;
        margin: 0;
        width: 85%;
        /* min-width: 100%; */
    }
`;

function WorldLeft({world}) {

    return(
        <MainLeftContainer>
            <WorldData world={world}></WorldData>
            <Chart></Chart>
        </MainLeftContainer>
    );
}

export default WorldLeft;
