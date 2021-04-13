import React, { useState } from 'react';
import Map from './components/Map/Map';
import GlobalStyle from '../src/style/global';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import styled, { ThemeProvider } from 'styled-components';
import theme from './style/theme';

function App() {
  const [isDark, setIsDark ] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getCovidData = async () => {
    const response = await fetch(`https://api.corona-19.kr/korea/country/new/?serviceKey=${API_KEY}`);

    console.log(response);
    const responseData = await response.json();
  } 


  return (
    <>
    <ThemeProvider theme={isDark? theme.darkMode : theme.lightMode}>
      <GlobalStyle/>
        <div className="App" style={{display:'flex'}}>
          {/* <Button varient="contained" color="primary" onClick={getCovidData}>Button</Button> */}
            <SideBar></SideBar>
            <Main></Main>
        </div>
    </ThemeProvider>
    </>
  );
}

export default App;
