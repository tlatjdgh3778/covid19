import React from 'react';
import styled from 'styled-components';

const MainRightContainer = styled.div`
color: white;
margin: 1rem;
min-height: 60rem;
min-width: 39rem;
border: 1px solid white;

    @media ${(props) => props.theme.device.TabletPortrait}{
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        width: 100%;
        min-width: 100%;
    }
`;
function MainRight() {

    return(
        <MainRightContainer>Right</MainRightContainer>
    );
}

export default MainRight;