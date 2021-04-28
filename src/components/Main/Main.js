import React from 'react'
import styled from 'styled-components';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';
import World from './World/World';
import { Route, Switch } from 'react-router-dom';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 11rem;
    margin-right: 3rem;
    padding-top: 5rem;
    color: ${(props) => props.theme.color.fontColor};
  
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
function Main({koreaData, cityData, isDark}) {
    return(
        <Switch>
            <Route exact path="/">
                <MainContainer>
                    <MainLeft koreaData={koreaData} cityData={cityData}></MainLeft>
                    <MainRight koreaData={koreaData} cityData={cityData} isDark={isDark}></MainRight>
                </MainContainer>
            </Route>
            <Route exact path="/world">
                <MainContainer>
                    <World></World>
                </MainContainer>
            </Route>
        </Switch>
    );
}

export default Main;