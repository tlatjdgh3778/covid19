import React, { useState, useEffect } from 'react';
// import Map from './components/Map/Map';
import GlobalStyle from '../src/style/global';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import styled, { ThemeProvider } from 'styled-components';
import theme from './style/theme';

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
  const [isDark, setIsDark ] = useState(true);
  const [page, setPage] = useState('domestic');
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

  const getData = async () => {
    const korea_response = await fetch(korea_url);
    const korea_data = await korea_response.json();

    const city_response = await fetch(city_url);
    const data = await city_response.json();

    setData({koreaData: korea_data, cityData:{
      seoul:data.seoul,
      incheon:data.incheon,
      gyeonggi:data.gyeonggi,
      gangwon:data.gangwon,
      chungbuk:data.chungbuk,
      chungnam:data.chungnam,
      daejeon:data.daejeon,
      sejong:data.sejong,
      jeonbuk:data.jeonbuk,
      jeonnam:data.jeonnam,
      gwangju:data.gwangju,
      gyeongbuk:data.gyeongbuk,
      daegu:data.daegu,
      ulsan:data.ulsan,
      gyeongnam:data.gyeongnam,
      busan:data.busan,
      jeju:data.jeju,
      korea:data.korea,
    }})
    setIsLoading(false);
    
  }
  useEffect(()=>{
    getData();
  },[]);
  
  const LoadingContainer = styled.div`
  background-color: white;
  width: 100px;
  height: 300px;
  text-align: center;
  top: 30rem;
  `;
  return (
    <>
    <ThemeProvider theme={isDark? theme.darkMode : theme.lightMode}>
      <GlobalStyle/>
        <AppStyle>
            <SideBar></SideBar>
            {isLoading || !data.koreaData ? 
            <LoadingContainer>loading...</LoadingContainer> : 
            <Main koreaData={data.koreaData} cityData={data.cityData}></Main>}
        </AppStyle>
    </ThemeProvider>
    </>
  );
}

export default App;
