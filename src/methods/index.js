const breakPointDefinitions = {
  md: 640,
  lg: 1024,
  xl: 1280,
  xxl: 1440 
};

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
      if (typeof dConfig[key] === 'object' && dConfig[key] !== null) {
        if (cConfig[key]) {
          dConfig[key] = mergeConfig(dConfig[key], cConfig[key]);
        }
      }
      else {
        if (typeof cConfig[key] !== 'undefined') {
          dConfig[key] = cConfig[key];
        }
      }
    }
  }
  return dConfig;
}

export function setStateProps(prevState, props) {
  return Object.assign({}, prevState, props)
}

export function setSlideWidth() {
  this.setState(prevState => {
    let newProps = {
      currentBreakpoint: returnBreakpoint(window.innerWidth),
      position: 0
    };
    return setStateProps(prevState, newProps);

    // Allow isMobile to update in the state before calculating slide with.
  }, () => {
    this.setState(prevState => {
      let slideWidth = 0;
      if (this.config.slideWidth[this.state.currentBreakpoint]) {
        slideWidth = this.config.slideWidth[this.state.currentBreakpoint];
      }
      else {
        let divisor = this.config.slidesInViewport[this.state.currentBreakpoint];
        let subtractor = (this.showArrows) ? 60 : 0;
        slideWidth = (this.view.clientWidth - subtractor) / divisor - this.config.slideMargin;
      }
        
      let newProps = {
        slideWidth: slideWidth
      };
      return setStateProps(prevState, newProps);
    });
  });
}

export function moveSlider() {

}
