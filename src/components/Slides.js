import React from 'react';

import { slides, slide } from '../styles/glamorStyles';


export default class Slides extends React.Component {

  render() {
    return (
      <div className={`${slides} mex-slider-slides`}>
        {this.props.slides.map((slideItem, index) => 
          <div className={`${slide} mex-slider-slide`} key={`slide${index}`} style={this.props.slideCss}>
            {slideItem}
          </div>
        )}
      </div>
    );
  }
}
