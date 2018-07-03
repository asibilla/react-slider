# React Slider
**A configurable, responsive slider for React applications**

#### Demo
To start the demo, run `yarn start` from the command line. Demo will run at http://localhost:8080

#### Importing 
Import the ReactSlider component from anywhere in your app: 

```import ReactSlider from 'react-slider';```

#### Component Props
The ReactSlider component accepts two props: 

- **slides (required)**
An array of react components. The components will be displayed in variable width containers inside the slider. Your components should be responsive. The width of the slides will depend on browser size and config options, so write components to fill the width of those containers.

- **config (optional)**
An object including overrides for any of the slider's default properties.

```
/* (e.g.) */ 
import ReactSlider from 'react-slider';

const myConfig = {
  arrowColor: 'black',
  slidesInViewport: {
    sm: 1.07,
    md: 1.8,
  }
};

const mySlides = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />
];

export function MyComponent() {
  return (
    <div>
      <ReactSlider config={myConfig} slides={mySlides} />
    </div>
  );
}

```

#### Config Options
**slidesInViewport, slideWidth, and showArrows** each accept an object with keys representing supported breakpoints: 
```
const config = {
  slidesInViewport: {
    sm: 1.5,
    md: 2.5,
    lg: 3.5,
    xl: 4.5,
    xxl: 4.4
  }
}
```
If needed, the definitions for these breakpoints can be adjusted in src/const/index.js.

- **slidesInViewport <Object>** The number of slides displayed within the slider wrapper. For example, a value of 1.5 would display one and a half slides in the viewport, and the user would need to scroll or advance the slider to view more slides. *Default:* 
```
{
  sm: 1.5,
  md: 2.5,
  lg: 3.5,
  xl: 4.5,
  xxl: 4.5
}
```

- **slideWidth <Object>** This option can be used to specify a fixed width (a number representing the width in pixels) for each breakpoint. If supplied, these values will override any values supplied in slidesInViewport. *Default:*
```
{
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null
}
```

- **showArrows <Object>** Use a boolean value to specify whether left/right arrows should be displayed for each breakpoint. Currently, when no arrows are displayed, the slider will only respond to touch events. Conversely, when arrows are displayed, clicking them is the only way to advance the slider (i.e. no touch events). *Default:*
```
{
  sm: false,
  md: false,
  lg: true,
  xl: true,
  xxl: true
}
```

- **slideMargin<Number>** Sets right-margin property for slides (i.e. the spacing between slides in pixles) *Default: 10*

- **leftArrowClass <String>** Class for left arrow glyph. *Default: 'g72-arrow-thin-left'*

- **rightArrowClass <String>** Class for left arrow glyph. *Default: 'g72-arrow-thin-right'*

- **arrowColor <String>** Color for left/right arrows. *Default: 'black'*

- **slideDistanceOnClick <Number>** The number of slides to move out of the viewport when left/right arrow is clicked. *Default: 2*

- **scrollSpeed <Number>** Advance speed (in ms) when left/right arrow is clicked. *Default: 500*


