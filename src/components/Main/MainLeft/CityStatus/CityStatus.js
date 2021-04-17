import React from 'react';
import styled, {css} from 'styled-components';

const CityContainer = styled.div`
margin: 1rem;
font-size: ${(props) => props.theme.fontSize.lg};
`;

const TableContainer = styled.div`
margin: 0 1rem;
display: flex;
flex-direction: column;
overflow-x: auto;
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
`;
const TableTitle = styled.div`
${Content};
font-size: ${(props) => props.theme.fontSize.ssm};
border: none;
background-color: ${(props) => props.theme.color.bgColor};
`;
const TableTitleCity = styled(TableTitle)`
position: sticky;
left: 0;
min-width: 4rem;
margin-bottom: 0.25rem;
margin-right: 0.25rem;
`;
const CityName = styled.div`
${Content}
background-color: ${(props) => props.theme.color.bgColor};
position: sticky;
left: 0;
min-width: 4rem;

`;
const TotalCase = styled.div`
${Content}
`;
const Recovered = styled.div`
${Content}
`;
const Death = styled.div`
${Content}
`;
const Percentage = styled.div`
${Content}
`;

function CityStatus({cityData}) {

const ew = Object.entries(cityData);

    return(
        <>
        <CityContainer>시 도 별 현황</CityContainer>
        <TableContainer>
            <TitleContainer>
                <TableTitleCity>지역</TableTitleCity>
                <TableTitle>확진자</TableTitle>
                <TableTitle>완치자</TableTitle>
                <TableTitle>사망자</TableTitle>
                <TableTitle>발생률</TableTitle>
            </TitleContainer>
            {ew.map((data, i)=>{
                return(
                    <TitleContainer key={i}>
                        <CityName>{data[1].countryName}</CityName>
                        <TotalCase>{data[1].totalCase}</TotalCase>
                        <Recovered>{data[1].recovered}</Recovered>
                        <Death>{data[1].death}</Death>
                        <Percentage>{data[1].percentage}</Percentage>
                    </TitleContainer>
                )
            })}
        </TableContainer>
        </>
    )
}
export default CityStatus;