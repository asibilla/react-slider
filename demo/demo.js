import React from 'react';
import { css } from 'glamor';
import ReactSlider from '../index';
import SlideItem from '../src/components/slide/SlideItem.class';
import Slide from '../src/components/slide/Slide';

const pageStyle = css({
  width: '100%',
  height: '100vh',
  margin: '0',
  padding: '0',
  fontFamily: 'sans-serif'
});


const config = {
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


export default class Demo extends React.Component {

  returnSlideArray() {
    let slides = [];
    for (let i = 1; i <= 6; i++) {
      slides.push(new SlideItem(`./img/img_${i}.png`))
    }
    return slides.map(slideItem => <Slide slideItem={slideItem} />)
  }

  render() {
    return (
      <div className={`${pageStyle}`}>
        <div className="ncss-brand ncss-container fixed-fluid">
          <div className="ncss-row">
            <div className="ncss-col-lg-6 ncss-col-md-6 ncss-col-sm-12">
              <ReactSlider config={config} slides={this.returnSlideArray()} />
            </div>
           </div>
        </div>
      </div>
    );
  }
}
