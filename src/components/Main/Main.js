import React, { useState, useEffect} from 'react'
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
    @media ${(props) => props.theme.device.    TabletPortrait}{
        display: flex;
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
        padding-top: 6rem;
        width: 100%;
    }
    
`;
function Main() {

    const [koreaData, setKoreaData] = useState("");
    const [cityData, setCityData] = useState("");
  
    const API_KEY = process.env.REACT_APP_API_KEY;
  
    const korea_url = ` https://ajax-api.corona-19.kr/?dir=korea&serviceKey=${API_KEY}`;
    const city_url = `https://ajax-api.corona-19.kr/?dir=country&serviceKey=${API_KEY}`;
  
    const getKoreaData = async () => {
      const korea_response = await fetch(korea_url);
      const korea_response_data = await korea_response.json();
  
      setKoreaData(korea_response_data);
    }
    const getCityData = async () => {
      const city_response = await fetch(city_url);
      const city_response_data = await city_response.json();
  
      setCityData(city_response_data);
    }
  
    // 누적 확진자 : TotalCase, city_url.korea.newCase
    // 격리해제(완치) : TotalRecovered, TodayRecovered
    // 격리중(치료중) : NowCase, TotalCaseBefore
    // 사망자 수 : TotalDeath, TodayDeath
    useEffect(()=>{
      getKoreaData();
      getCityData();
    },[]);

    return(
        <MainContainer>
            <MainLeft koreaData={koreaData} cityData={cityData}></MainLeft>
            <MainRight></MainRight>
        </MainContainer>
    );

}

export default Main;