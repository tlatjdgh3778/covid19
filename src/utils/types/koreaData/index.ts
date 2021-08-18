export type KoreaDataType = {
    [data: string]: string;
    // resultCode: string;
    // TotalCase: string;
    // TotalRecovered: string;
    // TotalDeath: string;
    // NowCase: string;
    // city1n: string;
    // city2n: string;
    // city3n: string;
    // city4n: string;
    // city5n: string;
    // city1p: string;
    // city2p: string;
    // city3p: string;
    // city4p: string;
    // city5p: string;
    // recoveredPercentage: number;
    // deathPercentage: number;
    // checkingCounter: string;
    // checkingPercentage: string;
    // caseCount: string;
    // casePercentage: string;
    // notcaseCount: string;
    // notcasePercentage: string;
    // TotalChecking: string;
    // TodayRecovered: string;
    // TodayDeath: string;
    // TotalCaseBefore: string;
    // source: string;
    // updateTime: string;
    // resultMessage: string;
};

type CityType = {
    [index: string]: string;
    countryName: string;
    newCase: string;
    totalCase: string;
    recovered: string;
    death: string;
    percentage: string;
    newCcase: string;
    newFcase: string;
};
type CityTypes = {
    [korea: string]: CityType;
};
export type CityNameType = {
    resultCode: string;
    resultMessage: string;
    city: CityTypes;
};
export type KoreaCityDataType = {
    // resultCode: string;
    // resultMessage: string;
    [cityName: string]: CityType;
    // korea: CityType;
    // seoul: CityType;
    // busan: CityType;
    // daegu: CityType;
    // incheon: CityType;
    // gwangju: CityType;
    // daejeon: CityType;
    // ulsan: CityType;
    // sejong: CityType;
    // gyeonggi: CityType;
    // gangwon: CityType;
    // chungbuk: CityType;
    // chungnam: CityType;
    // jeonbuk: CityType;
    // jeonnam: CityType;
    // gyeongbuk: CityType;
    // gyeongnam: CityType;
    // jeju: CityType;
    // quarantine?: CityType;
};

export const koreaData: KoreaDataType = {
    resultCode: "",
    TotalCase: "",
    TotalRecovered: "",
    TotalDeath: "",
    NowCase: "",
    city1n: "",
    city2n: "",
    city3n: "",
    city4n: "",
    city5n: "",
    city1p: "",
    city2p: "",
    city3p: "",
    city4p: "",
    city5p: "",
    checkingCounter: "",
    checkingPercentage: "",
    caseCount: "",
    casePercentage: "",
    notcaseCount: "",
    notcasePercentage: "",
    TotalChecking: "",
    TodayRecovered: "",
    TodayDeath: "",
    TotalCaseBefore: "",
    source: "",
    updateTime: "",
    resultMessage: "",
};

export const koreaCityData: KoreaCityDataType = {
    // resultCode: "",
    // resultMessage: "",
    korea: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    seoul: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    busan: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    daegu: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    incheon: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    gwangju: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    daejeon: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    ulsan: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    sejong: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    gyeonggi: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    gangwon: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    chungbuk: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    chungnam: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    jeonbuk: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    jeonnam: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    gyeongbuk: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    gyeongnam: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    jeju: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
    quarantine: {
        countryName: "",
        newCase: "",
        totalCase: "",
        recovered: "",
        death: "",
        percentage: "",
        newCcase: "",
        newFcase: "",
    },
};
