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
    sm: 1.07,
    md: 1.8,
    lg: 2.5,
    xl: 2.8,
    xxl: 3.2
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
  ), 
  new AppCardData(
    './img/app_2.png',
    'Nike Run Club App',
    './img/img_2.png',
    'Just Released',
    'New Audio Guided Run',
    'Find the motivation you need to run better and more often.'
  ), 
  new AppCardData(
    './img/app_3.png',
    'Nike Training Club App',
    './img/img_3.png',
    'New Workout Collection',
    'Boxer Arms',
    'Break a sweat to over 160 guided workouts.'
  ),

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
