import React from 'react';

import { slidesDiv, slide } from '../styles/glamorStyles';

const Slides = ({
  slides,
  slideCss
}) => {
  return (
    <div className={`${slidesDiv} mex-slider-slides`}>
      {slides.map((slideItem, index) => 
        <div className={`${slide} mex-slider-slide`} key={`slide${index}`} style={slideCss}>
          {slideItem}
        </div>
      )}
    </div>
  );
}

export default Slides;
