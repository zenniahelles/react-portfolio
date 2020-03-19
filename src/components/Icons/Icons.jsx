import React from 'react';
import './Icons.scss';
import {ReactComponent as HtmlIcon} from '../../images/html.svg';
import {ReactComponent as CssIcon} from '../../images/css.svg';
import {ReactComponent as JsIcon} from '../../images/js.svg';
import {ReactComponent as NodeIcon} from '../../images/node.svg';
import {ReactComponent as ReactIcon} from '../../images/react.svg';
import {ReactComponent as DesignIcon} from '../../images/design.svg';
import {ReactComponent as ArtIcon} from '../../images/art.svg';
import {ReactComponent as AdobeIcon} from '../../images/adobe.svg';
import {ReactComponent as PwaIcon} from '../../images/pwa.svg';
import {ReactComponent as ResIcon} from '../../images/res.svg';
import {ReactComponent as BootstrapIcon} from '../../images/bootstrap.svg';


const Icons = props => {
    return (
        <>
        <div id="Skills" className="IconContainer">
            <h2>EXPERIENCE AND SKILLS</h2>
                <div className="IconGrid1">
                    <div>
                    <HtmlIcon className="svgicon" /><h4>HTML</h4>
                    </div>
                    <div>
                    <CssIcon className="svgicon" /><h4>CSS</h4>
                    </div>
                    <div>
                    <JsIcon className="svgicon" /><h4>JAVASCRIPT</h4>
                    </div>
                    <div>
                    <NodeIcon className="svgicon" /><h4>NODE.JS</h4>
                    </div>
                    <div>
                    <ReactIcon className="svgicon" /><h4>REACT</h4>
                    </div>
                    </div>
                    <div className="IconGrid2">
                    <div>
                    <DesignIcon className="svgicon" /><h4>GRAPHICS AND DESIGN</h4>
                    </div>
                    <div>
                    <ArtIcon className="svgicon" /><h4>ART AND ILLUSTRATION</h4>
                    </div>
                    <div>
                    <AdobeIcon className="svgicon" /><h4>ADOBE PHOTOSHOP & <br />ADOBE ILLUSTRATOR</h4>
                    </div>
                    <div>
                    <PwaIcon className="svgicon" /><h4>PROGRESSIVE WEB APPS</h4>
                    </div>
                    <div>
                    <ResIcon className="svgicon" /><h4>RESPONSIVENESS</h4>
                    </div>
                    <div>
                    <BootstrapIcon className="svgicon" /><h4>BOOTSTRAP</h4>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Icons