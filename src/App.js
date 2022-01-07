import React, {useState} from 'react';
import './css/App.css';
import ProductData from './js/ProductData';
import { Watch } from './js/Watch';
import { ColorSelector } from './js/ColorSelector';
import { Description } from './js/Description';
import { NavBar } from './js/NavBar';
import { Main } from './js/Main';
import { Features } from './js/Features';
import { Time } from './js/Time';
import { HeartRate } from './js/HeartRate';
import { Weather } from './js/Weather';
import { Stopwatch } from './js/Stopwatch';
import { BuyButton } from './js/BuyButton';

function App() {
  const [showTime, setShowTime] = useState(true);
  const [showHeartRate, setShowHeartRate] = useState(false);
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  

  const onTime = () => {
    setShowTime(true)
    setShowHeartRate(false)
    setShowStopwatch(false)
    setShowWeather(false)
  };

  const onHeartRate = () => {
    setShowTime(false)
    setShowHeartRate(true)
    setShowStopwatch(false)
    setShowWeather(false)
  };

  const onStopwatch = () => {
    setShowTime(false)
    setShowHeartRate(false)
    setShowStopwatch(true)
    setShowWeather(false)
  };

  const onWeather = () => {
    setShowTime(false)
    setShowHeartRate(false)
    setShowStopwatch(false)
    setShowWeather(true)
  };
  
  return (
    <React.Fragment>
      
      <NavBar/>
      
      <Main>
          <Watch/>
          {showTime ? <Time /> : null}
          {showHeartRate ? <HeartRate/> : null}
          {showStopwatch ? <Stopwatch/> : null}
          {showWeather ? <Weather/> : null}
        <Description>
          <ColorSelector/>
          <Features
            onTime={onTime}
            onHeartRate={onHeartRate}
            onStopwatch={onStopwatch}
            onWeather={onWeather}
          />
          <BuyButton/>
        </Description>
      </Main>
    </React.Fragment>
  );
}

export { App };
