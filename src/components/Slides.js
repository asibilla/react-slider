import React from 'react';

import { slide } from '../styles/glamorStyles';

const Slides = ({
  slides,
  slideCss,
  mobile,
  position
}) => {
  
  function returnSlidesProps() {
    if (mobile) {
      return {
        width: '100%',
        overflow: 'scroll',
        WebkitOverflowScrolling: 'touch',
        overflowScrolling: 'touch'
      };
    }
    return position;
  }

  return (
    <div className="mex-slider-slides" style={returnSlidesProps()}>
      {slides.map((slideItem, index) => 
        <div className={`${slide} mex-slider-slide`} key={`slide${index}`} style={slideCss}>
          {slideItem}
        </div>
      )}
    </div>
  );
}

export default Slides;
