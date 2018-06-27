import React from 'react';
import { css } from 'glamor';
import ReactSlider from '../index';

const pageStyle = css({
  width: '100%',
  height: '100vh',
  margin: '0',
  padding: '0',
  fontFamily: 'sans-serif'
});


const config = {
  advanceSpeed: 300,
  autoAdvance: false,
  autoAdvanceSpeed: 4000,
  imagesPerSlide: 1,
  infiniteLoop: true,
  leftArrowClass: 'g72-arrow-thin-left',
  mobileBreakpoint: 1023,
  showArrowsOnMobile: false,
  showArrowsOnDesktop: true,
  rightArrowClass: 'g72-arrow-thin-right',
  rewind: false,
  slideIndicator: 'dot',
  theme: 'light'
};

//g72-arrow-fill-left
//g72-arrow-fill-right

export default class Demo extends React.Component {

  returnSlideArray() {
    
  }

  render() {
    return (
      <div className={`${pageStyle}`}>
        <div className="ncss-brand ncss-container fixed-fluid">
          <div className="ncss-row">
            <div className="ncss-col-lg-6 ncss-col-sm-12">
              <ReactSlider />
            </div>
           </div>
        </div>
      </div>
    );
  }
}
