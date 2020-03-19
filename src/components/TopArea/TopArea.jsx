import React from 'react';
import './TopArea.scss';
import {ReactComponent as BigFlower} from '../../images/bigflower.svg';

const TopArea = props => {
    return (
        <>
<div id="Home" className="TopArea">
<div className="section-one">
<div className="layer">
    <div className="content-left">
      <h1>PORTFOLIO</h1>
      <h3>Webudvikler</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum aut aperiam nisi alias eligendi id explicabo eum deserunt. Sit culpa cupiditate alias suscipit repellat voluptate dolorum blanditiis, a architecto.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum aut aperiam nisi alias eligendi id explicabo eum deserunt. Sit culpa cupiditate alias suscipit repellat voluptate dolorum blanditiis, a architecto.
      </p>
      </div>
    </div>
  </div>
  <div className="section-two">
    <div className="content-right">
    <BigFlower className="BigFlower" />
    </div>
  </div>
</div>
        </>
    )
}

export default TopArea