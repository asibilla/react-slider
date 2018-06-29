import { breakPointDefinitions } from '../const';

/**
 * 
 * @param {number} w
 * @returns {string} the current breakpoint based on window width 
 */
function returnBreakpoint(w) {
  if (w < breakPointDefinitions.md) {
    return 'sm';
  }
  if (w < breakPointDefinitions.lg) {
    return 'md';
  }
  if (w < breakPointDefinitions.xl) {
    return 'lg';
  }
  if (w < breakPointDefinitions.xxl) {
    return 'xl';
  }
  return 'xxl';
}

/**
 * 
 * @param {object} dConfig 
 * @param {object} cConfig
 * @returns {object} custom config merged into default. 
 */
export function mergeConfig(defaultConfig, cConfig) {
  // Don't mutate the default.
  let dConfig = Object.assign({}, defaultConfig);
  for (let key in dConfig) {
    if (dConfig.hasOwnProperty(key)) {
      // If prop value is an object recurse to set new props on that object.
      if (typeof dConfig[key] === 'object' && dConfig[key] !== null) {
        if (cConfig[key]) {
          dConfig[key] = mergeConfig(dConfig[key], cConfig[key]);
        }
      }
      // Otherwise overwrite any primitives found with custom config values.
      else {
        if (typeof cConfig[key] !== 'undefined') {
          dConfig[key] = cConfig[key];
        }
      }
    }
  }
  return dConfig;
}

/**
 * 
 * @param {Object} prevState 
 * @param {Object} props
 * @returns {Object} new state with updated props
 */
export function setStateProps(prevState, props) {
  return Object.assign({}, prevState, props)
}


/**
 * 
 * @returns {void}
 * Resets state properies based on current breakpoint.
 * Called on init, window resize, orientation change.
 */
export function setSliderDimensions() {
  if (this.view) {
    this.setState(prevState => {
      let newProps = {
        currentBreakpoint: returnBreakpoint(window.innerWidth),
        position: 0
      };
      return setStateProps(prevState, newProps);

      // Allow breakpoint to update in the state before calculating slide with.
    }, () => {
      // Set scroll to 0 for desktop breakpoints
      if (this.showArrows) {
        let elArray = this.view.getElementsByClassName('mex-slider-slides');
        if (elArray.length) {
          elArray[0].scrollLeft = 0;
        }
      }
    
      // Update state based on config and breakpoint.
      this.setState(prevState => {
        let slideWidth = 0;
        let viewMargin = (this.showArrows) ? 60 : 0;
        if (this.config.slideWidth[this.state.currentBreakpoint]) {
          slideWidth = this.config.slideWidth[this.state.currentBreakpoint];
        }
        else {
          let divisor = this.config.slidesInViewport[this.state.currentBreakpoint];
          slideWidth = (this.view.clientWidth - viewMargin) / divisor - this.config.slideMargin;
        }
        let sliderWidth = (slideWidth * this.slides.length) + (this.config.slideMargin * this.slides.length);
          
        let newProps = {
          slideWidth: slideWidth,
          sliderWidth: sliderWidth,
          sliderEdge: (sliderWidth - (this.view.clientWidth - viewMargin)) * -1
        };
        return setStateProps(prevState, newProps);
      });
    });
  }
}

/**
 * 
 * @param {number} pos 
 * @param {number} speed 
 * @returns {Object}
 * returns css animation for arrow clicks.
 */
export function createAnimationString(pos, speed) {
  return {
    transform: `translate3d(${pos}px, 0px, 0px)`,
    WebkitTransform: `translate3d(${pos}px, 0px, 0px)`,
    MozTransform: `translate3d(${pos}px, 0px, 0px)`,
    transitionDuration: `${speed}ms`,
    WebkitTransitionDuration: `${speed}ms`,
    MozTansitionDuration: `${speed}ms`
  };
}

/**
 * 
 * @param {boolean} isNext 
 * @returns {void}
 * Click handler for arrows on desktop breakpoints.
 */
export function moveSlider(isNext) {
  let newPos;
  if (isNext) {
    newPos = this.state.position - this.state.slideWidth * this.config.slideDistanceOnClick;
  }
  else {
    newPos = this.state.position + this.state.slideWidth * this.config.slideDistanceOnClick;
  }

  // Make sure we don't scroll past the slider's edges.
  if (newPos > 0) {
    newPos = 0;
  }
  else if (newPos < this.state.sliderEdge) {
    newPos = this.state.sliderEdge;
  }
  this.setState({position: newPos, positionCss: createAnimationString(newPos, this.config.scrollSpeed)});
}

/**
 * 
 * @param {boolean} isNext 
 * @returns {Object} css styles for inactive arrows on desktop
 */
export function getArrowStyle(isNext) {
  if ((isNext && this.state.position === this.state.sliderEdge) ||
    (!isNext && this.state.position === 0)) {
      return {opacity: '0.4', cursor: 'auto'};
    }
    return {};
}
