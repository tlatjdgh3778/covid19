import React from 'react'
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';
import World from './World/World';
import { Route, Switch } from 'react-router-dom';
import * as S from './Main.style';

function Main({koreaData, cityData, isDark}) {
    return(
        <Switch>
            <Route exact path="/">
                <S.MainContainer>
                    <MainLeft koreaData={koreaData} cityData={cityData}></MainLeft>
                    <MainRight koreaData={koreaData} cityData={cityData} isDark={isDark}></MainRight>
                </S.MainContainer>
            </Route>
            <Route exact path="/world">
                <S.MainContainer>
                    <World></World>
                </S.MainContainer>
            </Route>
        </Switch>
    );
}

export default Main;