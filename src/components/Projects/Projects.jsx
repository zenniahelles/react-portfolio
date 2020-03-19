import React, {useState} from 'react';
import './Projects.scss';
import Slider from '../Slider/Slider.jsx';


const Projects = props => {
    return (
        <>
        <div id="Projects" className="ProjectsContainer"><h2>PROJECTS</h2>
        <Slider />
        </div>
        </>
    )
}

export default Projects