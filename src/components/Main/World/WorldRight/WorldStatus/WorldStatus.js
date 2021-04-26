import React from 'react';
import styled, {css} from 'styled-components';

const CityContainer = styled.div`
margin: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
`;

const TableContainer = styled.div`
margin: 0 1rem;
display: flex;
flex-direction: column;
overflow: auto;
max-height: 100vh;
`;
const TitleContainer = styled.div`
display: flex;
`;

const Content = css`
text-align: center;
min-width: 6rem;
border-radius: 5px;
padding: 0.5rem; 
margin-bottom: 0.25rem;
margin-right: 0.25rem;
cursor: default;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`;

const TableTitle = styled.div`
${Content};
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.sm};
border: none;
background-color: ${(props) => props.theme.color.bgColor};
align-items: center;
justify-content: center;
`;
const TableTitleCity = styled(TableTitle)`
position: sticky;
left: 0;
margin-bottom: 0.25rem;
margin-right: 0.25rem;
max-width: 4rem;
justify-content: center;
`;
const CityName = styled.div`
${Content}
background-color: ${(props) => props.theme.color.bgColor};
position: sticky;
left: 0;
max-width: 4rem;
justify-content: center;
`;
const TotalCase = styled.div`
${Content}
background-color: ${(props) => props.bgColor? props.theme.color.bgColor:props.theme.color.wallpaperColor};
`;
const Recovered = styled.div`
${Content}
background-color: ${(props) => props.bgColor? props.theme.color.bgColor:props.theme.color.wallpaperColor};
`;
const Death = styled.div`
${Content}
background-color: ${(props) => props.bgColor? props.theme.color.bgColor:props.theme.color.wallpaperColor};
`;
const Percentage = styled.div`
${Content}
background-color: ${(props) => props.bgColor? props.theme.color.bgColor:props.theme.color.wallpaperColor};
`;

function WorldStatus({countriesData}) {

   const countries = Object.entries(countriesData);
   console.log(countries);
    return(
        <>
        <CityContainer>나라 별 현황</CityContainer>
        <TableContainer>
            <TitleContainer>
                <TableTitleCity>지역</TableTitleCity>
                <TableTitle>확진자</TableTitle>
                <TableTitle>완치자</TableTitle>
                <TableTitle>사망자</TableTitle>
                <TableTitle>백만 명당</TableTitle>
            </TitleContainer>
            {countries.map((data, i)=>{
                if(i%2 === 0){
                    return(
                        <TitleContainer key={i}>
                            <CityName>{data[1].country}</CityName>
                            <TotalCase>{data[1].cases.toLocaleString()}</TotalCase>
                            <Recovered>{data[1].recovered.toLocaleString()}</Recovered>
                            <Death>{data[1].deaths.toLocaleString()}</Death>
                            <Percentage>{data[1].casesPerOneMillion.toLocaleString()}</Percentage>
                        </TitleContainer>
                    )
                }else{
                return(
                    <TitleContainer key={i}>
                        <CityName>{data[1].country}</CityName>
                        <TotalCase bgColor>{data[1].cases.toLocaleString()}</TotalCase>
                        <Recovered bgColor>{data[1].recovered.toLocaleString()}</Recovered>
                        <Death bgColor>{data[1].deaths.toLocaleString()}</Death>
                        <Percentage bgColor>{data[1].casesPerOneMillion.toLocaleString()}</Percentage>
                    </TitleContainer>
                )}
            })}
        </TableContainer>
        </>
    )
}
export default WorldStatus;