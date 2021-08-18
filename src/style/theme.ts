import { DefaultTheme } from "styled-components";

const size = {
    MobileLandscape: "480px",
    TabletPortrait: "768px",
    TabletLandscape: "992px",
    Laptops: "1200px",
};

const device = {
    MobileLandscape: `(max-width: ${size.MobileLandscape})`,
    TabletPortrait: `(max-width: ${size.TabletPortrait})`,
    TabletLandscape: `(max-width: ${size.TabletLandscape})`,
    Laptops: `(max-width: ${size.Laptops})`,
};

const fontSize = {
    ssm: "0.5rem",
    sm: "0.7rem",
    md: "1rem",
    lg: "1.2rem",
    xl: "1.5rem",
    xxl: "2rem",
};

export const lightMode: DefaultTheme = {
    color: {
        wallpaperColor: "#ffffff",
        bgColor: "#f8f5fa",
        fontColor: "#373737",

        highlightColor: "#c2b7da",
        hoverColor: "#f5f5f5",

        chartConfirmed: "#ffe1e6",
        chartRecovered: "#e4f4e7",
        chartActived: "#dfeeff",
        chartColor: "#f6f6f7",
        chartRed: "#331327",

        iconColor: "#373737",

        confirmedColor: "#df0736",
        recoveredColor: "#27a643",
        activedColor: "#0562cb",

        confirmedHover: "#ffe1e6",
        recoveredHover: "#e4f4e7",
        activedHover: "#dfeeff",
        deathHover: "#f6f6f7",
    },
    fontSize,
    device,
};
export const darkMode: DefaultTheme = {
    color: {
        wallpaperColor: "#1b2635",
        bgColor: "#233044",
        fontColor: "#6c757d",

        highlightColor: "#2c1952",
        hoverColor: "#152338",

        chartConfirmed: "#ffe1e6",
        chartRecovered: "#e4f4e7",
        chartActived: "#dfeeff",
        chartColor: "#191928",
        chartRed: "#331327",

        iconColor: "#ffc107",

        confirmedColor: "#df0736",
        recoveredColor: "#27a643",
        activedColor: "#0562cb",

        confirmedHover: "#331327",
        recoveredHover: "#172827",
        activedHover: "#132240",
        deathHover: "#202230",
    },
    fontSize,
    device,
};
