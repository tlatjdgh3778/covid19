import React from 'react';
import * as S from './WorldData.style';

function WorldData({world}) {
    const names = ['확진환자', '격리해제', '사망자'];

    return(
        <S.WorldDataContainer>
            <S.DomesticStatusTitle>세계현황</S.DomesticStatusTitle>
            <S.DomesticStatusContainer>
                {names.map((name, i)=>{
                    return(
                        <S.TotalContainer key={i} >
                            {
                            <>
                            <S.Title>{name}</S.Title>
                                {name==='확진환자'?
                                <>
                                <S.Data color={'#df0736'}>
                                    {world.confirmed.toLocaleString()}
                                </S.Data>                      
                                </>
                                :
                                (
                                name==='격리해제'?
                                <>
                                <S.Data color={'#27a643'}>{world.recovered.toLocaleString()}</S.Data>
                                </>
                                :
                                <>
                                <S.Data>{world.deaths.toLocaleString()}</S.Data>
                                </>
                                )}
                            </>
                            }
                        </S.TotalContainer>
                    )
                })}
            </S.DomesticStatusContainer>
        </S.WorldDataContainer>
    );
}

export default WorldData;
