import React from 'react';
import {
  arrowContainer, 
  arrowContainerLeft, 
  arrowContainerRight, 
  arrow
} from '../styles/glamorStyles';

const Arrows = ({
  leftArrowClass,
  rightArrowClass,
  leftArrowStyle,
  rightArrowStyle,
  arrowColor,
  click
}) => {

  function arrowColorClass() {
    return `text-color-${arrowColor}`;
  }

  return (
    <div className="arrows">
      <div className={`${arrowContainer} ${arrowContainerLeft} left-arrow`} 
        onClick={() => {click(false)}}
      >
        <div className={`${leftArrowClass} ${arrow} ${arrowColorClass()}`} style={leftArrowStyle}></div>
      </div>
      <div className={`${arrowContainer} ${arrowContainerRight} right-arrow`} 
        onClick={() => {click(true)}}
      >
        <div className={`${rightArrowClass} ${arrow} ${arrowColorClass()}`} style={rightArrowStyle}></div>
      </div>
    </div>
  )
};

export default Arrows;
