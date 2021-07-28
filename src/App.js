import React, { useState, useEffect } from 'react';
import GlobalStyle from 'style/global';
import SideBar from 'components/SideBar/SideBar';
import { World, Domestic } from 'pages/index';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'style/theme';
import Loader from 'react-loader-spinner';
import { Route, Switch } from 'react-router-dom';
import { getKoreaData, getCityData, getWorldData, getCountriesData } from 'apis/getCovidData';
import * as GS from 'style/Component.style';

const AppStyle = styled.div`
display: flex;
flex-direction: column;

    @media ${(props) => props.theme.device.TabletPortrait}{
        width: 100%;
    }
`;
// 누적 확진자 : TotalCase, city_url.korea.newCase
// 격리해제(완치) : TotalRecovered, TodayRecovered
// 격리중(치료중) : NowCase, TotalCaseBefore
// 사망자 수 : TotalDeath, TodayDeath
function App() {

    const [isDark, setIsDark ] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({
    koreaData:"",
    cityData:{
        seoul:"",
        incheon:"",
        gyeonggi:"",
        gangwon:"",
        chungbuk:"",
        chungnam:"",
        daejeon:"",
        sejong:"",
        jeonbuk:"",
        jeonnam:"",
        gwangju:"",
        gyeongbuk:"",
        daegu:"",
        ulsan:"",
        gyeongnam:"",
        busan:"",
        jeju:"",
        korea:"",
    }
    });
    const [world, setWorld] = useState({
        worldData:{
            confirmed:'',
            deaths:'',
            recovered:'',
        },
        countriesData:'',
    });

    useEffect(()=>{
    const getData = async () => {
        const koreaData = await getKoreaData();
        const cityData = await getCityData(); 
        const worldData = await getWorldData();
        const countriesData = await getCountriesData();

        setWorld({
            worldData:{
                confirmed:worldData.cases,
                deaths:worldData.deaths,
                recovered:worldData.recovered,
            },
            countriesData,
        });

        setData({koreaData, cityData:{
        seoul:cityData.seoul,
        incheon:cityData.incheon,
        gyeonggi:cityData.gyeonggi,
        gangwon:cityData.gangwon,
        chungbuk:cityData.chungbuk,
        chungnam:cityData.chungnam,
        daejeon:cityData.daejeon,
        sejong:cityData.sejong,
        jeonbuk:cityData.jeonbuk,
        jeonnam:cityData.jeonnam,
        gwangju:cityData.gwangju,
        gyeongbuk:cityData.gyeongbuk,
        daegu:cityData.daegu,
        ulsan:cityData.ulsan,
        gyeongnam:cityData.gyeongnam,
        busan:cityData.busan,
        jeju:cityData.jeju,
        korea:cityData.korea,
        }});

        setIsLoading(false);
    }
    getData();
    },[]);
    console.log(data)
    const changeTheme = () => {
        setIsDark(!isDark);
    };

    return (
    <>
    <Router basename="/covid19">
    <ThemeProvider theme={isDark? theme.darkMode : theme.lightMode}>
        <GlobalStyle/>
        <AppStyle>
            <SideBar changeTheme={changeTheme} isDark={isDark}></SideBar>
            {isLoading || !data.koreaData ? 
            <Loader
            type="Oval"
            color='#6c757d'
            height={50}
            width={50}
            timeout={3000}
            style={{
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)",
            }}
            />: 
            (
            <Switch>
                <Route exact path="/">
                    <GS.MainContainer>
                        <Domestic koreaData={data.koreaData} cityData={data.cityData} isDark={isDark}></Domestic>
                    </GS.MainContainer>
                </Route>
                <Route exact path="/world">
                    <GS.MainContainer>
                        <World world={world}></World>
                    </GS.MainContainer>
                </Route>
            </Switch>
            )}
        </AppStyle>
    </ThemeProvider>
    </Router>
    </>
);    
}

export default App;
