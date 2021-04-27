const size = {
    MobileLandscape: '480px',
    TabletPortrait: '768px',
    TabletLandscape: '992px',
    Laptops: '1200px',
}

const device = {
    MobileLandscape: `(max-width: ${size.MobileLandscape})`,
    TabletPortrait: `(max-width: ${size.TabletPortrait})`,
    TabletLandscape: `(max-width: ${size.TabletLandscape})`,
    Laptops: `(max-width: ${size.Laptops})`,
}

const fontSize = {
    ssm: '12px',
    sm : '16px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    xxl: '32px', 
}

const lightMode = {
    color: {
        wallpaperColor: '#ffffff',
        bgColor: '#f8f5fa',
        fontColor: '#373737',
        fontRed: '#df0736',
        fontBlue: '#0562cb',
        fontGreen: '#27a643',

        highlightColor: '#c2b7da',
        hoverColor: '#f5f5f5',
        
        chartRed: '#ffe1e6',
        chartGreen: '#e4f4e7',
        chartColor: '#f6f6f7',

        iconColor: '#373737',
    },
    fontSize,
    device,
}
const darkMode = {
    color: {
        wallpaperColor: '#1b2635',
        bgColor: '#233044',
        fontColor: '#6c757d',
        fontRed: '#df0736',
        fontBlue: '#0562cb',
        fontGreen: '#27a643',

        highlightColor: '#2c1952',
        hoverColor: '#152338',
        chartRed: '#311325',
        chartGreen: '#162626',
        chartColor: '#191928',

        iconColor: '#ffc107',
    },
    fontSize,
    device,
}

// const color = {
//     white: 'white',
//     black: 'black',
//     highlight: '#f2f2f2',
//     rightBgColor: '#ece9e6',
// }

const theme = {
    // color,
    lightMode,
    darkMode,
}

export default theme;