import React, { useState, useEffect } from 'react';
// import Map from './components/Map/Map';
import GlobalStyle from '../src/style/global';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './style/theme';
import Loader from 'react-loader-spinner';

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
  const API_KEY = process.env.REACT_APP_API_KEY;

  const korea_url = `https://ajax-api.corona-19.kr/?dir=korea&serviceKey=${API_KEY}`;
  const city_url = `https://ajax-api.corona-19.kr/?dir=country&serviceKey=${API_KEY}`;
  // https://api.corona-19.kr/korea/?serviceKey=APIKey
  // https://api.corona-19.kr/korea/country/new/?serviceKey=APIKey
  
  useEffect(()=>{
    const getData = async () => {
      const korea_response = await fetch(korea_url);
      const korea_data = await korea_response.json();
  
      const city_response = await fetch(city_url);
      const city_data = await city_response.json();
      console.log(korea_response);
      console.log(city_response);
      console.log(korea_data);
      console.log(city_data);
      
      // console.log(city_data);
      setData({koreaData: korea_data, cityData:{
        seoul:city_data.seoul,
        incheon:city_data.incheon,
        gyeonggi:city_data.gyeonggi,
        gangwon:city_data.gangwon,
        chungbuk:city_data.chungbuk,
        chungnam:city_data.chungnam,
        daejeon:city_data.daejeon,
        sejong:city_data.sejong,
        jeonbuk:city_data.jeonbuk,
        jeonnam:city_data.jeonnam,
        gwangju:city_data.gwangju,
        gyeongbuk:city_data.gyeongbuk,
        daegu:city_data.daegu,
        ulsan:city_data.ulsan,
        gyeongnam:city_data.gyeongnam,
        busan:city_data.busan,
        jeju:city_data.jeju,
        korea:city_data.korea,
      }})
      setIsLoading(false);
    }
    getData();
  },[city_url, korea_url]);
  

  const changeTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <>
    <BrowserRouter>
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
            }}
            />: 
            <Main koreaData={data.koreaData} cityData={data.cityData} isDark={isDark}></Main>}
        </AppStyle>
    </ThemeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
