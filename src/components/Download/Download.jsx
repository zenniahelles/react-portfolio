import React from 'react';
import './Download.scss';
import {ReactComponent as Butterfly} from '../../images/butterfly.svg';


const Download = props => {
    return (
        <>
        <div id="Download" className="DownloadContainer">
            
            <h2>DOWNLOAD CV</h2>
            <section className="download-grid">
                <Butterfly className="butterfly"/>
                <div className="buttons">
                    <button>DOWNLOAD VC</button>
                    <button>SE I GOOGLE DRIVE</button>
                    </div>
            </section>
        
        </div>
        </>
    )
}

export default Download