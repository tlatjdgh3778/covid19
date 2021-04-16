import React from 'react';
import styled from 'styled-components';

const MainLeftContainer = styled.div`
margin: 1rem;
min-height: 60rem;
color: white;
min-width: 39rem;
border: 1px solid white;

    @media ${(props) => props.theme.device.    TabletPortrait}{
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        margin: 0;
        width: 100%;
        min-width: 100%;
    }
`;

const DomesticStatus = styled.div`

`;

function MainLeft({koreaData, cityData}) {

    return(
        <MainLeftContainer>
            <DomesticStatus>국내현황</DomesticStatus>
        </MainLeftContainer>
    );
}

export default MainLeft;