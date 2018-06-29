import React from 'react';
import { AppCard, AppCardData } from '../../demo/AppCard';

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
  )
];

export const testSlides = [
  <AppCard data={slides[0]}/>,
  <AppCard data={slides[1]} />,
  <AppCard data={slides[2]} />
];

export const config1 = {
  slideWidth: {
    sm: 100,
    md: 150,
    lg: 200
  },
  showArrows: {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  },
  arrowColor: 'blue',
};

export const config2 = {
  showArrows: {
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  },
}
