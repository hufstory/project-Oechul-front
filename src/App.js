import React from 'react';
import {ThemeProvider} from "styled-components"
import './App.css';

import Navigator from './components/Navigator';
import Body from './components/Body';
import Footer from "./components/Footer/Footer";
import Letter from './components/lib/letter';
import SideBox from './components/lib/SideBox';
import Theme from './components/Styles/Theme';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <SideBox/>
        <Letter/>
        <Navigator/>
        <Body/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
