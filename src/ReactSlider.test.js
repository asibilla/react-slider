import React from 'react';
import ReactSlider from './ReactSlider';
import { testSlides, config1, config2 } from './test-data';


describe('Renders with default config.', () => { 
  test('component renders', () => {
    const slider = mount(<ReactSlider slides={testSlides} />);
    expect(slider).toMatchSnapshot();
    slider.unmount();
  });
});

describe('Renders with custom config', () => {
  test('component renders', () => {
    const slider = mount(<ReactSlider slides={testSlides} config={config1} />);
    expect(slider).toMatchSnapshot();
    slider.unmount();
  });
});

describe('Click events work', () => {
  const slider = mount(<ReactSlider slides={testSlides} config={config2} jest={true} />);
  
  test('component renders', () => {
    expect(slider).toMatchSnapshot();
  });

  test('arrow click event', () => { 
    slider.find('.right-arrow').simulate('click');
    slider.find('.left-arrow').simulate('click');
    expect(slider).toMatchSnapshot();
    slider.unmount();
  });
});

describe('Component does not break if no slides', () => {
  test('component renders', () => {
    const slider = mount(<ReactSlider />);
    expect(slider).toMatchSnapshot();
    slider.unmount();
  });
});
