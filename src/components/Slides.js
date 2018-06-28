import React from 'react';

import { slide } from '../styles/glamorStyles';

const Slides = ({
  slides,
  slideCss,
  mobile,
  position
}) => {
  
  /**
   * If mobile, allow native scrolling to advance slider. 
   * Otherwise use transition css saved to state.
   */
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
