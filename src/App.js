import React, { useEffect } from "react";
import GlobalStyle from "style/global";
import SideBar from "components/SideBar/SideBar";
import { World, Domestic } from "pages/index";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "style/theme";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as GS from "style/Component.style";
import { fetchKoreaData } from "store/modules/korea";
import { fetchWorldData } from "store/modules/world";
import { fetchWorldDailyData } from "store/modules/worldDaily";

const AppStyle = styled.div`
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.device.TabletPortrait} {
        width: 100%;
    }
`;
// 누적 확진자 : TotalCase, city_url.korea.newCase
// 격리해제(완치) : TotalRecovered, TodayRecovered
// 격리중(치료중) : NowCase, TotalCaseBefore
// 사망자 수 : TotalDeath, TodayDeath
const App = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(({ mode }) => mode.isDark);

    useEffect(() => {
        dispatch(fetchKoreaData());
        dispatch(fetchWorldData());
        dispatch(fetchWorldDailyData());
    }, [dispatch]);

    return (
        <>
            <Router basename="/covid19">
                <ThemeProvider
                    theme={isDark ? theme.darkMode : theme.lightMode}
                >
                    <GlobalStyle />
                    <AppStyle>
                        <SideBar></SideBar>
                        <Switch>
                            <Route exact path="/">
                                <GS.MainContainer>
                                    <Domestic></Domestic>
                                </GS.MainContainer>
                            </Route>
                            <Route exact path="/world">
                                <GS.MainContainer>
                                    <World></World>
                                </GS.MainContainer>
                            </Route>
                        </Switch>
                    </AppStyle>
                </ThemeProvider>
            </Router>
        </>
    );
};

export default App;
