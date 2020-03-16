import React from 'react';
import './TopArea.scss';
import {ReactComponent as BigFlower} from '../../images/bigflower.svg';

const TopArea = props => {
    return (
        <>
<div className="TopArea">
<div class="section-one">
<div class="layer">
    <div class="content-left">
      <h1>PORTFOLIO</h1>
      <h3>Webudvikler</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum aut aperiam nisi alias eligendi id explicabo eum deserunt. Sit culpa cupiditate alias suscipit repellat voluptate dolorum blanditiis, a architecto.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum aut aperiam nisi alias eligendi id explicabo eum deserunt. Sit culpa cupiditate alias suscipit repellat voluptate dolorum blanditiis, a architecto.
      </p>
      </div>
    </div>
  </div>
  <div class="section-two">
    <div class="content-right">
    <BigFlower className="BigFlower" />
    </div>
  </div>
</div>
        </>
    )
}

export default TopArea