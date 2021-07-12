import React from 'react';
import * as S from './DomesticCityStatus.style';

const DomesticCityStatus = ({cityData}) => {

const ew = Object.entries(cityData);
    return(
        <>
        <S.CityContainer>시 도 별 현황</S.CityContainer>
        <S.TableContainer>
            <S.TitleContainer>
                <S.TableTitleCity>지역</S.TableTitleCity>
                <S.TableTitle>확진자</S.TableTitle>
                <S.TableTitle>완치자</S.TableTitle>
                <S.TableTitle>사망자</S.TableTitle>
                <S.TableTitle>발생률</S.TableTitle>
            </S.TitleContainer>
            {ew.map((data, i)=>{
                if(i%2 === 0){
                    return(
                        <S.TitleContainer key={i}>
                            <S.CityName>{data[1].countryName}</S.CityName>
                            <S.TotalCase>{data[1].totalCase}</S.TotalCase>
                            <S.Recovered>{data[1].recovered}</S.Recovered>
                            <S.Death>{data[1].death}</S.Death>
                            <S.Percentage>{data[1].percentage}</S.Percentage>
                        </S.TitleContainer>
                    )
                }else{
                    return(
                        <S.TitleContainer key={i}>
                            <S.CityName>{data[1].countryName}</S.CityName>
                            <S.TotalCase bgColor>{data[1].totalCase}</S.TotalCase>
                            <S.Recovered bgColor>{data[1].recovered}</S.Recovered>
                            <S.Death bgColor>{data[1].death}</S.Death>
                            <S.Percentage bgColor>{data[1].percentage}</S.Percentage>
                        </S.TitleContainer>
                    )
                }
            })}
        </S.TableContainer>
        </>
    )
}
export default DomesticCityStatus;