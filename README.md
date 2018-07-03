# React Slider
## A configurable, responsive slider for React applications

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