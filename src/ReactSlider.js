import React from 'react';

import Slides from './components/Slides';
import Arrows from './components/Arrows';
import { view, innerView } from './styles/glamorStyles';
import { 
  setSliderDimensions, 
  moveSlider, 
  mergeConfig,
  createAnimationString,
  getArrowStyle
} from './methods';

const defaultConfig = {
  slidesInViewport: {
    sm: 1.5,
    md: 2.5,
    lg: 3.5,
    xl: 4.5,
    xxl: 4.5
  },
  slideWidth: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null
  },
  showArrows: {
    sm: false,
    md: false,
    lg: true,
    xl: true,
    xxl: true
  },
  slideMargin: 10,
  leftArrowClass: 'g72-arrow-thin-left',
  rightArrowClass: 'g72-arrow-thin-right',
  arrowColor: 'black',
  slideDistanceOnClick: 2,
  scrollSpeed: 500,
  theme: 'light'
};

export default class GlamorousReactCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.config = mergeConfig(defaultConfig, props.config);
    this.slides = props.slides || [];
    
    // Bind methods to instance.
    this.setSliderDimensions = setSliderDimensions.bind(this);
    this.moveSlider = moveSlider.bind(this);
    this.createAnimationString = createAnimationString.bind(this);
    this.getArrowStyle = getArrowStyle.bind(this);

    // Set the initial state.
    this.state = {
      slideWidth: 0,
      sliderWidth: 0,
      sliderEdge: 0,
      position: 0,
      positionCss: this.createAnimationString(0, 0),
      currentBreakpoint: 'lg',
    }
  }

  get showArrows() {
    return this.config.showArrows[this.state.currentBreakpoint] && 
      this.view && this.view.clientWidth < this.state.sliderWidth;
  }

  get innerWrapperStyle() {
    if (this.showArrows) {
      return {
        width: 'calc(100% - 60px)',
        margin: '0 30px'
      };
    }
    return {
      width: '100%'
    };
  }

  get slideCss() {
    return {width: this.state.slideWidth, marginRight: `${this.config.slideMargin}px`};
  }

  componentDidMount() {
    this.setSliderDimensions();
    window.addEventListener("resize", this.setSliderDimensions);
    window.addEventListener("orientationchange", this.setSliderDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setSliderDimensions);
    window.removeEventListener("orientationchange", this.setSliderDimensions);
  }

  render() {
    return (
      this.slides.length ?
        <div className={`${view} mex-slider-wrapper`} ref={el => this.view = el}>
          {this.showArrows ? 
            <Arrows
              leftArrowClass={this.config.leftArrowClass}
              rightArrowClass={this.config.rightArrowClass}
              leftArrowStyle={this.getArrowStyle(false)}
              rightArrowStyle={this.getArrowStyle(true)}
              arrowColor={this.config.arrowColor}
              click={this.moveSlider}
            /> 
            : null
          }
          <div className={`${innerView} mex-slider-inner`} style={this.innerWrapperStyle}>
            <Slides 
              slides={this.slides}
              slideCss={this.slideCss}
              mobile={!this.showArrows}
              position={this.state.positionCss}
            />
          </div>
        </div>
      : null
    );
  }
}
