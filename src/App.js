import React, { useState, useEffect } from 'react';
import Map from './components/Map/Map';
import GlobalStyle from '../src/style/global';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import styled, { ThemeProvider } from 'styled-components';
import theme from './style/theme';

const AppStyle = styled.div`
display: flex;

    @media ${(props) => props.theme.device.TabletPortrait}{
      flex-direction: column,
    }
`;
function App() {
  const [isDark, setIsDark ] = useState(true);

  // const AppStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  // }

  return (
    <>
    <ThemeProvider theme={isDark? theme.darkMode : theme.lightMode}>
      <GlobalStyle/>
        {/* <div className="App" style={AppStyle}> */}
        <AppStyle>
            <SideBar></SideBar>
            <Main></Main>
        </AppStyle>
        {/* </div> */}
    </ThemeProvider>
    </>
  );
}

export default App;
