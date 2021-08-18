import React from "react";
import * as S from "./DomesticCityStatus.style";
import { useSelector } from "react-redux";
import { RootState } from "store/index";

const DomesticCityStatus = () => {
    const cityData = useSelector((state: RootState) => state.korea.cityData.data);

    const newData = Object.entries(cityData).slice(2, 20);

    const total = newData.splice(0, 1); // 합계
    newData.splice(newData.length, 0, total[0]); // 표의 제일 밑으로 보내기

    // arr.splice(to, 0, item[0]); item 을 to 위치로 이동.
    // const arr = [...newData];
    // const item = arr.splice(0, 1); //
    // arr.splice(newData.length, 0, item[0]);
    // console.log(arr);
    return (
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
                {newData.map((data, i) => {
                    if (i % 2 === 0) {
                        return (
                            <S.TitleContainer key={i}>
                                <S.CityName>{data[1].countryName}</S.CityName>
                                <S.TotalCase>{data[1].totalCase}</S.TotalCase>
                                <S.Recovered>{data[1].recovered}</S.Recovered>
                                <S.Death>{data[1].death}</S.Death>
                                <S.Percentage>{data[1].percentage}</S.Percentage>
                            </S.TitleContainer>
                        );
                    } else {
                        return (
                            <S.TitleContainer key={i}>
                                <S.CityName>{data[1].countryName}</S.CityName>
                                <S.TotalCase bgColor>{data[1].totalCase}</S.TotalCase>
                                <S.Recovered bgColor>{data[1].recovered}</S.Recovered>
                                <S.Death bgColor>{data[1].death}</S.Death>
                                <S.Percentage bgColor>{data[1].percentage}</S.Percentage>
                            </S.TitleContainer>
                        );
                    }
                })}
            </S.TableContainer>
        </>
    );
};
export default DomesticCityStatus;
