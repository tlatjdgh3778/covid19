import React from 'react';
import * as S from './WorldStatus.style';

function WorldStatus({countriesData}) {

   const countries = Object.entries(countriesData);
    return(
        <>
        <S.CityContainer>나라 별 현황</S.CityContainer>
        <S.TableContainer>
            <S.TitleContainer>
                <S.TableTitleCity>지역</S.TableTitleCity>
                <S.TableTitle>완치자</S.TableTitle>
                <S.TableTitle>사망자</S.TableTitle>
                <S.TableTitle>확진자</S.TableTitle>
                <S.TableTitle>백만 명당</S.TableTitle>
            </S.TitleContainer>
            {countries.map((data, i)=>{
                if(i%2 === 0){
                    return(
                        <S.TitleContainer key={i}>
                            <S.CityName>{data[1].country}</S.CityName>
                            <S.TotalCase>{data[1].cases.toLocaleString()}</S.TotalCase>
                            <S.Recovered>{data[1].recovered.toLocaleString()}</S.Recovered>
                            <S.Death>{data[1].deaths.toLocaleString()}</S.Death>
                            <S.Percentage>{data[1].casesPerOneMillion.toLocaleString()}</S.Percentage>
                        </S.TitleContainer>
                    )
                }else{
                return(
                    <S.TitleContainer key={i}>
                        <S.CityName>{data[1].country}</S.CityName>
                        <S.TotalCase bgColor>{data[1].cases.toLocaleString()}</S.TotalCase>
                        <S.Recovered bgColor>{data[1].recovered.toLocaleString()}</S.Recovered>
                        <S.Death bgColor>{data[1].deaths.toLocaleString()}</S.Death>
                        <S.Percentage bgColor>{data[1].casesPerOneMillion.toLocaleString()}</S.Percentage>
                    </S.TitleContainer>
                )}
            })}
        </S.TableContainer>
        </>
    )
}
export default WorldStatus;