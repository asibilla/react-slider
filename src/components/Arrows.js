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
  arrowColor,
  click
}) => {

  function arrowColorClass() {
    return `text-color-${arrowColor}`;
  }

  return (
    <div className="arrows">
      <div className={`${arrowContainer} ${arrowContainerLeft}`} 
        onClick={e => {click(e, false)}}
      >
        <div className={`${leftArrowClass} ${arrow} ${arrowColorClass()}`}></div>
      </div>
      <div className={`${arrowContainer} ${arrowContainerRight}`} 
        onClick={e => {click(e, true)}}
      >
        <div className={`${rightArrowClass} ${arrow} ${arrowColorClass()}`}></div>
      </div>
    </div>
  )
};

export default Arrows;
