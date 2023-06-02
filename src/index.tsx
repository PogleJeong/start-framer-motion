import React from 'react';
import ReactDOM from 'react-dom/client';
import Variants from './components/Variants';
import Gestures from './components/Gestures';
import MotionValues from './components/MotionValues';
import SVG from './components/SVG';
import Presence from './components/AnimationPresence';
import Slider from './components/Slider';
import App from './components/Application';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Variants /> */}
    <App />
  </React.StrictMode>
);