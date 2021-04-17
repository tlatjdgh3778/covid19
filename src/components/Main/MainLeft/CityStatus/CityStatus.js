import React from 'react';
import styled from 'styled-components';

const CityContainer = styled.div`
border: 1px solid white;
margin: 1rem;
font-size: ${(props) => props.theme.fontSize.lg};
`;

const TableContainer = styled.div`
border: 1px solid white;
margin: 0 1rem;
display: flex;
flex-direction: column;
overflow-x: auto;
`;
const TitleContainer = styled.div`
border: 1px solid blue;
display: flex;
`;
const Title = styled.div`
font-size: ${(props) => props.theme.fontSize.md};
font-weight: 700;
margin-right: 2rem;

    ${(props) => props.theme.device.mobileLandscape}{
        font-size: ${(props) => props.theme.fontSize.sm};
    }
`;

const CityName = styled.div`
text-align: center;
min-width: 6rem;
`;
const TotalCase = styled.div`
text-align: center;
min-width: 6rem;
`;
const Recovered = styled.div`
text-align: center;
min-width: 6rem;
`;
const Death = styled.div`
text-align: center;
min-width: 6rem;
`;
const Percentage = styled.div`
text-align: center;
min-width: 6rem;
`;
function CityStatus({cityData}) {

const ew = Object.entries(cityData);

    return(
        <>
        <CityContainer>시.도 별 현황</CityContainer>
        <TableContainer>
            <TitleContainer>
                <CityName>지역</CityName>
                <TotalCase>확진자</TotalCase>
                <Recovered>완치자</Recovered>
                <Death>사망자</Death>
                <Percentage>발생률</Percentage>
            </TitleContainer>
            {ew.map((data, i)=>{
                return(
                    <TitleContainer key={i}>
                        <CityName>{data[1].countryName}</CityName>
                        <CityName>{data[1].totalCase}</CityName>
                        <CityName>{data[1].recovered}</CityName>
                        <CityName>{data[1].death}</CityName>
                        <CityName>{data[1].percentage}</CityName>
                    </TitleContainer>
                )
            })}
        </TableContainer>
        </>
    )
}
export default CityStatus;