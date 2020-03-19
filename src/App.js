import React, { useState } from 'react';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu.jsx';
import TopArea from './components/TopArea/TopArea.jsx';
import Icons from './components/Icons/Icons.jsx';
import Projects from './components/Projects/Projects.jsx';
import Download from './components/Download/Download.jsx';
import ContactMe from './components/Contact/Contact.jsx';
import Slider from './components/Slider/Slider.jsx';

//APP------------------------------------------------//

function App() {
  return (
    <>
    <TopMenu />
    <TopArea />
    <Icons />
    <Projects />
    <Download />
    <ContactMe />
    </>
  );
}

export default App;
