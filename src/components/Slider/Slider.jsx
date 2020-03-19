import React, {useState} from 'react';
import './Slider.scss';
import ImgComp from './ImgComp.jsx';
import i1 from './Images/photo1.jpeg';
import i2 from './Images/photo2.jpeg';
import i3 from './Images/photo3.jpeg';
import i4 from './Images/photo4.jpeg';
import i5 from './Images/photo5.jpeg';

function Slider(){
    let sliderArr = [
    <ImgComp src ={i1} />, 
    <ImgComp src ={i2} />, 
    <ImgComp src ={i3} />, 
    <ImgComp src ={i4} />, 
    <ImgComp src ={i5} />
];
    const [x, setX] = useState(0)
    const goLeft=()=>{
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight=()=>{
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

return(
    <div className="slider">
        {
            sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })}
        <button id="goLeft" onClick={goLeft}><i class="fas fa-chevron-left"></i></button> 

        <button id="goRight" onClick={goRight}><i class="fas fa-chevron-right"></i></button>  
    </div>
);
}

export default Slider;