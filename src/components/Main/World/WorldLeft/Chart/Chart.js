import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartContainer = styled.div`

`;
const Title = styled.div`
margin: 1rem;
padding-bottom: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
`;
const Source = styled.div`
text-align: right;
`;
function Chart(){
    const [dailyData, setDailyData] = useState([]);

    const daily_url = 'https://covid19.mathdro.id/api/daily';

    useEffect(()=>{
        const getData = async () => {
            const response = await fetch(daily_url);
            const data = await response.json();

            const modData = data.map((daily)=>({
                confirmed: daily.confirmed.total,
                deaths: daily.deaths.total,
                date: daily.reportDate,
            }));
            setDailyData(modData);
        }
        getData();
    }, []);

    const lineChart = (
        dailyData.length // 
        ? (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets:[{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: "확진환자 수",
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: dailyData.map(({ deaths }) => deaths),
                    label: "사망자 수",
                    borderColor: 'red',
                    fill: true,
                }],
            }}
            width={300}
            height={200}
        />) : null
    );

    return(
        <>
        <Title>전 세계 코로나 차트</Title>
        <ChartContainer>
            {lineChart}
        </ChartContainer>
        <Source>데이터 출처 : mathdroid</Source>
        </>
    );
}
export default Chart;