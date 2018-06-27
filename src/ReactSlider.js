import React from 'react';

import Slides from './components/Slides';
import { view } from './styles/glamorStyles';
import { setSlideWidth } from './methods';

const defaultConfig = {
  slidesInMobileViewport: 1.5,
  slidesInDesktopViewport: 2.5,
  slideMargin: 10,
  leftArrowClass: 'g72-arrow-thin-left',
  mobileBreakpoint: 1023,
  showArrowsOnMobile: false,
  showArrowsOnDesktop: true,
  rightArrowClass: 'g72-arrow-thin-right',
  theme: 'light'
};

export default class GlamorousReactCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.config = Object.assign(defaultConfig, props.config || {});
    this.slides = props.slides || [];
    
    // Bind methods to instance.
    this.setSlideWidth = setSlideWidth.bind(this);

    // Set the initial state.
    this.state = {
      slideWidth: 0,
      position: 0,
      isMobile: false,
    }
  }

  get innerWrapperStyle() {
    if (!this.state.isMobile) {
      return {margin: '0 30px'};
    }
    return {};
  }

  get slideCss() {
    return {width: this.state.slideWidth, marginRight: `${this.config.slideMargin}px`};
  }

  componentDidMount() {
    this.setSlideWidth();
    console.log('mobile', this.state.isMobile);
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
