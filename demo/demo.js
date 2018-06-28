import React from 'react';
import { css } from 'glamor';
import ReactSlider from '../index';
import { AppCardData, AppCard } from './AppCard';

const pageStyle = css({
  width: '100%',
  height: '100vh',
  margin: '0',
  padding: '0',
  fontFamily: 'sans-serif'
});


const config = {
  arrowColor: 'black',
  slidesInViewport: {
    sm: 1.2
  },
  slideWidth: {
    sm: null
  }
};

const slides = [
  new AppCardData(
    './img/app_1.png',
    'Nike App',
    './img/img_1.png',
    'Trending',
    'Featured Story',
    'Explore everything that Nike has to offer, tailored to you.'
  )
];


export default class Demo extends React.Component {

  returnSlideArray() {
    return slides.map(slideItem => <AppCard data={slideItem} />)
  }

  render() {
    return (
      <div className={`${pageStyle}`}>
        <div className="ncss-base ncss-container fixed-fluid p4-sm">
          <div className="ncss-row">
            <div className="ncss-col-sm-12 full">
              <ReactSlider config={config} slides={this.returnSlideArray()} />
            </div>
           </div>
        </div>
      </div>
    );
  }
}
