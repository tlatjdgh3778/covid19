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
    ssm: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "28px",
    xxl: "32px",
};

const lightMode = {
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
const darkMode = {
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

const theme = {
    lightMode,
    darkMode,
};

export default theme;
