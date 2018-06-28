import React from 'react';

import Slides from './components/Slides';
import Arrows from './components/Arrows';
import { view } from './styles/glamorStyles';
import { setSlideWidth, moveSlider, mergeConfig } from './methods';

const defaultConfig = {
  slidesInViewport: {
    sm: 1.5,
    md: 2.5,
    lg: 3.5,
    xl: 4.5,
    xxl: 5.5
  },
  slideWidth: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null
  },
  slideMargin: 10,
  leftArrowClass: 'g72-arrow-thin-left',
  rightArrowClass: 'g72-arrow-thin-right',
  arrowColor: 'black',
  showArrowsOnMobile: false,
  showArrowsOnDesktop: true,
  slideDistanceOnClick: 2,
  theme: 'light'
};

export default class GlamorousReactCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.config = mergeConfig(defaultConfig, props.config);

    console.log('merged config', this.config);
    this.slides = props.slides || [];
    
    // Bind methods to instance.
    this.setSlideWidth = setSlideWidth.bind(this);
    this.moveSlider = moveSlider.bind(this);

    // Set the initial state.
    this.state = {
      slideWidth: 0,
      position: 0,
      currentBreakpoint: 'lg',
    }
  }

  get showArrows() {
    return true;
  }

  get innerWrapperStyle() {
    if (this.showArrows) {
      return {margin: '0 30px'};
    }
    return {};
  }

  get slideCss() {
    return {width: this.state.slideWidth, marginRight: `${this.config.slideMargin}px`};
  }

  componentDidMount() {
    this.setSlideWidth();
    window.addEventListener("resize", this.setSlideWidth);
    window.addEventListener("orientationchange", this.setSlideWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setSlideWidth);
    window.removeEventListener("orientationchange", this.setSlideWidth);
  }

  render() {
    return (
      <div className={`${view} mex-slider-wrapper`} ref={el => this.view = el}>
        {this.showArrows ? 
          <Arrows
            leftArrowClass={this.config.leftArrowClass}
            rightArrowClass={this.config.rightArrowClass}
            arrowColor={this.config.arrowColor}
            click={this.moveSlider}
          /> 
          : null
        }
        <div className="mex-slider-inner" style={this.innerWrapperStyle}>
          <Slides 
            slides={this.slides}
            slideCss={this.slideCss}
          />
        </div>
      </div>
    );
  }
}
