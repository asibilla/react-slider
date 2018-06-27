import React from 'react';

import Slides from './components/Slides';
import Arrows from './components/Arrows';
import { view } from './styles/glamorStyles';
import { setSlideWidth, moveSlider } from './methods';

const defaultConfig = {
  slidesInMobileViewport: 1.5,
  slidesInDesktopViewport: 2.5,
  slideMargin: 10,
  mobileBreakpoint: 1023,
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
    this.config = Object.assign(defaultConfig, props.config || {});
    this.slides = props.slides || [];
    
    // Bind methods to instance.
    this.setSlideWidth = setSlideWidth.bind(this);
    this.moveSlider = moveSlider.bind(this);

    // Set the initial state.
    this.state = {
      slideWidth: 0,
      position: 0,
      isMobile: false,
    }
  }

  get showArrows() {
    return (this.state.isMobile && this.config.showArrowsOnMobile) ||
      (!this.state.isMobile && this.config.showArrowsOnDesktop);
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
