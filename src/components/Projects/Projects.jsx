import React, {useState} from 'react';
import './Projects.scss';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
const slider = (
  <AwesomeSlider>
    <div data-src="/Images/photo1.jpeg" />
    <div data-src="/Images/photo2.jpeg" />
    <div data-src="/Images/photo3.jpeg" />
    <div data-src="/Images/photo4.jpeg" />
    <div data-src="/Images/photo5.jpeg" />
  </AwesomeSlider>
);

const Projects = props => {
    return (
        <>
        <div id="Projects" className="ProjectsContainer"><h2>PROJECTS</h2>
        {slider}
        </div>
        </>
    )
}

export default Projects