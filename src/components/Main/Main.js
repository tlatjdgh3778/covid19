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
    width: 100%;
    margin-right: 3rem;
    padding-top: 5rem;
  
    @media ${(props) => props.theme.device.TabletLandscape}{
        margin-left: 9rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait}{
        display: flex;
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
        padding-top: 6rem;
        width: 100%;
        align-items: center;
    }
    
`;
function Main({koreaData, cityData}) {
console.log(koreaData);
    return(
        <MainContainer>
            <MainLeft koreaData={koreaData} cityData={cityData}></MainLeft>
            <MainRight></MainRight>
        </MainContainer>
    );

}

export default Main;