import React from 'react';

import Slides from './components/Slides';
import { view } from './styles/glamorStyles';
import { setSlideWidth } from './methods';

const defaultConfig = {
  slidesInMobileViewport: 1.5,
  slidesInDesktopViewport: 2.5,
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
    
    // Bind methods to instance.
    this.setSlideWidth = setSlideWidth.bind(this);


    // Set the initial state.
    this.state = {
      currentSlide: 0,
      view: null,
      positions: null,
      isMobile: false,
      rightArrow: null,
      leftArrow: null
    }
  }

  componentDidMount() {
    this.setSlideWidth();
    this.setState({view: this.view});
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
        <Slides />
      </div>
    );
  }
}
