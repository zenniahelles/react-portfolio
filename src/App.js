import React, { useState } from 'react';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu.jsx';
import TopArea from './components/TopArea/TopArea.jsx';
import Icons from './components/Icons/Icons.jsx';


//APP------------------------------------------------//

function App() {
  return (
    <>
    <TopMenu />
    <TopArea />
      <Icons />
    </>
  );
}

export default App;
