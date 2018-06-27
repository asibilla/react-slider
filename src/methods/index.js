export function setStateProps(prevState, props) {
  return Object.assign({}, prevState, props)
}

export function setSlideWidth() {
  this.setState(prevState => {
    let newProps = {
      isMobile: window.innerWidth <= this.config.mobileBreakpoint,
      position: 0
    };
    return setStateProps(prevState, newProps);

    // Allow isMobile to update in the state before calculating slide with.
  }, () => {
    this.setState(prevState => {
      let slideWidthDivisor = (prevState.isMobile) ? this.config.slidesInMobileViewport : this.config.slidesInDesktopViewport;
      // Subtract arrow width if desktop.
      let slideWidthSubtractor = (this.showArrows) ? 60 : 0;
      let newProps = {
        slideWidth: (this.view.clientWidth - slideWidthSubtractor) / slideWidthDivisor - this.config.slideMargin
      };
      return setStateProps(prevState, newProps);
    });
  });
}

export function moveSlider() {
  
}
