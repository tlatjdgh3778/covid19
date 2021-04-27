import React from 'react';
import styled, {css} from 'styled-components';
import CityStatus from './CityStatus/CityStatus';

const MainLeftContainer = styled.div`
margin: 0 3rem;
color: ${(props) => props.theme.color.fontColor};


    @media ${(props) => props.theme.device.TabletLandscape}{
        margin: 1rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait}{
        display: flex;
        flex-direction: column;
        margin: 0;
        width: 85%;
        /* min-width: 100%; */
    }
`;

const DomesticStatusTitle = styled.div`
margin: 1rem;
padding-bottom: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
border-bottom: 1px solid ${(props) => props.theme.color.fontColor};
`;
const DomesticStatusContainer = styled.div`
display: flex;
margin: 0 1rem;
justify-content: space-between;
`;

const container = css`
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
/* margin: 0 1rem; */
padding: 0.5rem 1rem;
width: 4rem;
height: 5rem;
justify-content: space-between;
cursor: default;

    @media ${(props) => props.theme.device.TabletPortrait}{
            margin: 0;
        }
    @media ${(props) => props.theme.device.MobileLandscape}{
        width: 3rem;
        height: 4rem;
        padding: 0.25rem;
    }

`;

const TotalContainer = styled.div`
${container};
    &:hover{
            background-color: ${(props) => props.theme.color.hoverColor};
        }
        
`;

const Title = styled.div`

    @media ${(props) => props.theme.device.TabletPortrait}{
        font-size: ${(props) => props.theme.fontSize.ssm};
    }
`;

const Data = styled.div`
font-size: ${(props) => props.theme.fontSize.lg};
font-weight: 700;
color: ${(props) => props.color || props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletPortrait}{
        font-size: ${(props) => props.theme.fontSize.md};
    }
    @media ${(props) => props.theme.device.MobileLandscape}{
        font-size: ${(props) => props.theme.fontSize.sm};
    }
`;
const TodayData = styled.div`
color: ${(props) => props.color || props.theme.color.fontColor};

display: flex;
    @media ${(props) => props.theme.device.TabletPortrait}{
        font-size: ${(props) => props.theme.fontSize.ssm};
    }
`;

function MainLeft({koreaData, cityData}) {
// 누적 확진자 : TotalCase, city_url.korea.newCase
// 격리해제(완치) : TotalRecovered, TodayRecovered
// 격리중(치료중) : NowCase, TotalCaseBefore
// 사망자 수 : TotalDeath, TodayDeath

    const names = ['확진환자', '치료중', '격리해제', '사망자'];


    return(
        <MainLeftContainer>
            <DomesticStatusTitle>국내현황</DomesticStatusTitle>
            <DomesticStatusContainer>
                {names.map((name, i)=>{
                    return(
                        <TotalContainer key={i}>
                            {
                            <>
                            <Title>{name}</Title>
                            {name==='확진환자'?
                            <>
                            <Data color={(props) => props.theme.color.fontRed}>
                                {koreaData.TotalCase}
                            </Data>                      
                            <TodayData color={(props) => props.theme.color.fontRed}><div>{cityData.korea.newCase>0?'+':''}</div><div>{cityData.korea.newCase}</div></TodayData>
                            </>
                            :
                            (
                                name==='치료중'?
                                <>
                                <Data color={(props) => props.theme.color.fontBlue}>
                                    {koreaData.NowCase}
                                </Data>
                                <TodayData color={(props) => props.theme.color.fontBlue}><div>{koreaData.TotalCaseBefore>0?'+':''}</div><div>{koreaData.TotalCaseBefore}</div></TodayData>
                                </>
                                :
                                (
                                    name==='격리해제'?
                                    <>
                                    <Data color={(props) => props.theme.color.fontGreen}>
                                        {koreaData.TotalRecovered}
                                    </Data>
                                    <TodayData color={(props) => props.theme.color.fontGreen}><div>{koreaData.TodayRecovered>0?'+':''}</div><div>{koreaData.TodayRecovered}</div></TodayData>
                                    </>
                                    :
                                    <>
                                    <Data>
                                        {koreaData.TotalDeath}
                                    </Data>
                                    <TodayData><div>{koreaData.TodayDeath>0?'+':''}</div><div>{koreaData.TodayDeath}</div></TodayData>
                                    </>
                                )
                            )}
                            </>}
                        </TotalContainer>
                    )
                })}
                
            </DomesticStatusContainer>
            <CityStatus cityData={cityData}></CityStatus>
        </MainLeftContainer>
    );
}

export default MainLeft;
