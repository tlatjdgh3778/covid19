import React, { useEffect } from "react";
import GlobalStyle from "style/global-style";
import SideBar from "components/SideBar/SideBar";
import { World, Domestic } from "pages/index";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { darkMode, lightMode } from "style/theme";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchKoreaData, fetchKoreaCityData } from "store/modules/korea";
import { fetchWorldData, fetchWorldCountriesData } from "store/modules/world";
import { fetchWorldDailyData } from "store/modules/worldDaily";
import { RootState } from "store/index";

const AppStyle = styled.div`
    display: flex;
    flex-direction: column;

    @media ${({ theme }) => theme.device.TabletPortrait} {
        width: 100%;
    }
`;
// 누적 확진자 : TotalCase, city_url.korea.newCase
// 격리해제(완치) : TotalRecovered, TodayRecovered
// 격리중(치료중) : NowCase, TotalCaseBefore
// 사망자 수 : TotalDeath, TodayDeath
const App = () => {
    const dispatch = useDispatch();
    const isDark = useSelector((state: RootState) => state.mode.isDark);

    useEffect(() => {
        dispatch(fetchKoreaData());
        dispatch(fetchKoreaCityData());
        dispatch(fetchWorldData());
        dispatch(fetchWorldCountriesData());
        dispatch(fetchWorldDailyData());
    }, [dispatch]);

    return (
        <>
            <Router basename="/covid19">
                <ThemeProvider theme={isDark ? darkMode : lightMode}>
                    <GlobalStyle />
                    <AppStyle>
                        <SideBar></SideBar>
                        <Switch>
                            <Route exact path="/" component={Domestic}></Route>
                            <Route exact path="/world" component={World}></Route>
                        </Switch>
                    </AppStyle>
                </ThemeProvider>
            </Router>
        </>
    );
};

export default App;
