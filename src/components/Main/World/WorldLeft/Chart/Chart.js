import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import styled, { css } from 'styled-components';
import numeral from 'numeral';

const ChartStyle = css`
border-radius: 10px;
margin: 1rem 0;
padding: 0.5rem 0;
`;
const ChartTitle = css`
margin: 0.5rem;
font-weight: 700;
text-align: center;
`;

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    },
    legend: {
        // labels: {
        //     fontSize: 16,
        //     fontWeight: 900,
        // }
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    // maintainAspectRatio: false,

    tooltips: {
        mode: "index",
        intersect: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: false,
                },
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },       
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
}
const CasesChartContainer = styled.div`
${ChartStyle};
background-color: ${(props) => props.theme.color.chartRed};
`;
const RecoveredChartContainer = styled.div`
${ChartStyle};
background-color: ${(props) => props.theme.color.chartGreen};
`;
const DeathsChartContainer = styled.div`
${ChartStyle};
background-color: ${(props) => props.theme.color.chartColor};
`;
const CasesTitle = styled.div`
${ChartTitle}
color: ${(props) => props.theme.color.fontRed};
`;
const RecoveredTitle = styled.div`
${ChartTitle}
color: ${(props) => props.theme.color.fontGreen};
`;
const DeathsTitle = styled.div`
${ChartTitle}
color: ${(props) => props.theme.color.fontColor};
`;

const Title = styled.div`
margin: 1rem;
padding-bottom: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
`;
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
        <Title>전 세계 코로나 차트</Title>
        <CasesChartContainer>
            <CasesTitle>확진자 수</CasesTitle>
            <Line data={casesChart} options={options}></Line>
        </CasesChartContainer>
        <RecoveredChartContainer>
            <RecoveredTitle>완치자 수</RecoveredTitle>
            <Line data={recoveredChart} options={options}></Line>
        </RecoveredChartContainer>
        <DeathsChartContainer>
            <DeathsTitle>사망자 수</DeathsTitle>
            <Line data={deathsChart} options={options}></Line>
        </DeathsChartContainer>
        </>
    );
}
export default Chart;