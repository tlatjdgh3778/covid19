import React from 'react'
import styled from 'styled-components';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 11rem;
    margin-right: 3rem;
    padding-top: 5rem;
`;
function Main() {

    return(
        <MainContainer>
            <MainLeft></MainLeft>
            <MainRight></MainRight>
        </MainContainer>
    );

}

export default Main;