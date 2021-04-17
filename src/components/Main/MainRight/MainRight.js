import React from 'react';
import styled from 'styled-components';
import Map from './Map/Map';

const MainRightContainer = styled.div`
color: ${(props) => props.theme.color.fontColor};
margin: 1rem;
min-height: 60rem;
border: 1px solid white;

    @media ${(props) => props.theme.device.TabletPortrait}{
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        width: 85%;
        /* min-width: 100%; */
    }
`;
function MainRight({koreaData, cityData}) {

    return(
        <MainRightContainer>
            <Map koreaData={koreaData} cityData={cityData}></Map>
        </MainRightContainer>
    );
}

export default MainRight;