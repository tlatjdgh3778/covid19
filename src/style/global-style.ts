import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

// 변수명 앞에 두 개의 대시(--) 사용

const GlobalStyle = createGlobalStyle`
    ${reset};
* {
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.color.fontColor};
    border-radius: 10px;
    }
    &::webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.hoverColor};
    border-radius: 10px;
    }
    &::-webkit-scrollbar-corner {
        background-color: ${({ theme }) => theme.color.bgColor};
    }
}
body {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.wallpaperColor};
    transition: all 0.5s;
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontColor};
}

.leaflet-container {
    background-color: ${({ theme }) => theme.color.bgColor};
}

.leaflet-control-zoom {
    display: none;
}
.leaflet-control-attribution{
    display: none
}
`;

export default GlobalStyle;
