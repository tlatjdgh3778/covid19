import { createGlobalStyle } from "styled-components";
// 변수명 앞에 두 개의 대시(--) 사용

const GlobalStyle = createGlobalStyle`
* {
font-family: 'Noto Sans KR', 'Roboto', sans-serif;
margin: 0;
padding: 0;

}
body {
box-sizing: border-box;
background-color: ${(props) => props.theme.color.wallpaperColor};
}
`;

export default GlobalStyle;