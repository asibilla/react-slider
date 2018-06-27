import React from 'react';
import { image, slide } from './slide.styles';

const Slide = ({
  slideItem
}) => {

  return (
    <div className={`${slide} mex-slide`}>
      <img className={`${image}`} src={slideItem.image} />
    </div>
  );
};

export default Slide;
