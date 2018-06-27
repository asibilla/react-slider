export function setStateProps(prevState, props) {
  return Object.assign({}, prevState, props)
}

export function setSlideWidth() {
  this.setState(prevState => {
    let isMobile = window.innerWidth <= this.config.mobileBreakpoint;
    let slideWidthDivisor = (isMobile) ? this.config.slidesInMobileViewport : this.config.slidesInDesktopViewport;
    // Subtract arrow width if desktop.
    let slideWidthSubtractor = (isMobile) ? 0 : 60;
    let newProps = {
      isMobile: isMobile,
      position: 0,
      slideWidth: (this.view.clientWidth - slideWidthSubtractor) / slideWidthDivisor - this.config.slideMargin
    };
    return setStateProps(prevState, newProps);
  });
}

