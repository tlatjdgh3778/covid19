import React from 'react';
import styled, {css} from 'styled-components';
import CountUp from 'react-countup';

const WorldLeftContainer = styled.div`

margin-right: 6rem;
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

const WorldStatusTitle = styled.div`
margin: 1rem;
padding-bottom: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
border-bottom: 1px solid ${(props) => props.theme.color.fontColor};
`;
const WorldStatusContainer = styled.div`
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
width: 9rem;
height: 5rem;
justify-content: space-between;
cursor: default;



    @media ${(props) => props.theme.device.TabletPortrait}{
            margin: 0;
        }
    @media ${(props) => props.theme.device.MobileLandscape}{
        width: 6rem;
        height: 4rem;
        padding: 0.25rem;
    }
        
`;

const TotalContainer = styled.div`
${container};
    &:hover{
        background-color: ${(props) => props.theme.color.bgColor};
    }
`;

const Title = styled.div`

    @media ${(props) => props.theme.device.TabletPortrait}{
        font-size: ${(props) => props.theme.fontSize.sm};
    }
    @media ${(props) => props.theme.device.MobileLandscape}{
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

function WorldLeft({world}) {
// 누적 확진자 : TotalCase, city_url.korea.newCase
// 격리해제(완치) : TotalRecovered, TodayRecovered
// 격리중(치료중) : NowCase, TotalCaseBefore
// 사망자 수 : TotalDeath, TodayDeath
    const names = ['확진환자', '격리해제', '사망자'];
console.log(typeof(world.confirmed))
console.log(typeof(world.recovered))
console.log(typeof(world.deaths))
    return(
        <WorldLeftContainer>
            <WorldStatusTitle>세계 현황</WorldStatusTitle>
            <WorldStatusContainer>
            {names.map((name, i)=>{
                    return(
                        <TotalContainer key={i} >
                            {
                            <>
                            <Title>{name}</Title>
                            {name==='확진환자'?
                            <>
                            <Data color={'#df0736'}>
                                {world.confirmed.toLocaleString()}
                            </Data>
                            </>
                            :
                            (
                                name==='격리해제'?
                                <>
                                <Data color={'#0562cb'}>
                                    {world.recovered.toLocaleString()}
                                </Data>
                                </>
                                :
                                <>
                                <Data>
                                    {world.deaths.toLocaleString()}
                                </Data>

                                </>
                            )}
                            </>}
                        </TotalContainer>
                    )
                })}
                
            </WorldStatusContainer>
        </WorldLeftContainer>
    );
}

export default WorldLeft;