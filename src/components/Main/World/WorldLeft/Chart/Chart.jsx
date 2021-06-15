import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import * as S from './Chart.style';

function Chart(){
    const [dailyData, setDailyData] = useState({});

    const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=90';

    useEffect(()=>{
        const getData = async () => {

            const res = await fetch(url);
            const res_data = await res.json();
    
            setDailyData(res_data);
        }
        getData();
    }, []);
    let dateLabels;
    let casesData;
    let deathsData;
    let recoveredData;
    const ew = Object.entries(dailyData);
    console.log(Object.keys(ew));
    console.log(ew.length);

    if(ew.length !== 0){
        dateLabels = Object.keys(ew[0][1]);
        casesData = Object.values(ew[0][1]);
        deathsData = Object.values(ew[1][1]);
        recoveredData = Object.values(ew[2][1]);
    }
    const casesChart = {
        labels: dateLabels,
        datasets: [
          {
            label: "확진자 수",
            data: casesData,
            fill: false,
            borderColor: "#df0736",
          },]
      };
      const recoveredChart = {
        labels: dateLabels,
        datasets: [
          {
            label: "완치자 수",
            data: recoveredData,
            fill: false,
            borderColor: "#27a643",

          },]
      };
      const deathsChart = {
        labels: dateLabels,
        datasets: [
          {
            label: "사망자 수",
            data: deathsData,
            fill: false,
            borderColor: "#373737",
          },],
      };

    return(
        <>
        <S.Title>전 세계 코로나 차트</S.Title>
        <S.CasesChartContainer>
            <S.CasesTitle>확진자 수</S.CasesTitle>
            <Line data={casesChart} options={S.options}></Line>
        </S.CasesChartContainer>
        <S.RecoveredChartContainer>
            <S.RecoveredTitle>완치자 수</S.RecoveredTitle>
            <Line data={recoveredChart} options={S.options}></Line>
        </S.RecoveredChartContainer>
        <S.DeathsChartContainer>
            <S.DeathsTitle>사망자 수</S.DeathsTitle>
            <Line data={deathsChart} options={S.options}></Line>
        </S.DeathsChartContainer>
        </>
    );
}
export default Chart;