import React from 'react';
import './App.css';

import Navigator from './components/Navigator';
import Body from './components/Body';
import Footer from "./components/Footer/Footer";
import Letter from './components/lib/letter';
import SideBox from './components/lib/SideBox';

function App() {
  return (
    <>
      <SideBox/>
      <Letter/>
      <Navigator/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
