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

  //Features
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
  
  //Color Selector
  const black = ProductData.colorOptions[0].imageUrl;
  const red = ProductData.colorOptions[1].imageUrl;
  const blue = ProductData.colorOptions[2].imageUrl;
  const purple = ProductData.colorOptions[3].imageUrl;

  const [showBlack, setShowBlack]  = useState(true);
  const [showRed, setShowRed]  = useState(false);
  const [showBlue, setShowBlue]  = useState(false);
  const [showPurple, setShowPurple]  = useState(false);
  
  
  const onChangeBlack = () => {
    setShowBlack(true);
    setShowRed(false);
    setShowBlue(false);
    setShowPurple(false);
  }

  const onChangeRed = () => {
    setShowBlack(false);
    setShowRed(true);
    setShowBlue(false);
    setShowPurple(false)
  }
  
  const onChangeBlue = () => {
    setShowBlack(false);
    setShowRed(false);
    setShowBlue(true);
    setShowPurple(false)
  }
  
  const onChangePurple = () => {
    setShowBlack(false);
    setShowRed(false);
    setShowBlue(false);
    setShowPurple(true)
  }


  return (
    <React.Fragment>
      
      <NavBar/>
      
      <Main>
          <Watch
            black={black}
            red={red}
            blue={blue}
            purple={purple}
            showBlack={showBlack}
            showRed={showRed}
            showBlue={showBlue}
            showPurple={showPurple}
          />
          {showTime ? <Time /> : null}
          {showHeartRate ? <HeartRate/> : null}
          {showStopwatch ? <Stopwatch/> : null}
          {showWeather ? <Weather/> : null}
        <Description>
          <ColorSelector
            onChangeBlack={onChangeBlack}
            onChangeRed={onChangeRed}
            onChangeBlue={onChangeBlue}
            onChangePurple={onChangePurple}
            showRed={showRed}
            showBlack={showBlack}
            showBlue={showBlue}
            showPurple={showPurple}
            
          />
            
          <Features
            onTime={onTime}
            onHeartRate={onHeartRate}
            onStopwatch={onStopwatch}
            onWeather={onWeather}
            showTime={showTime}
            showHeartRate={showHeartRate}
            showStopwatch={showStopwatch}
            showWeather={showWeather}
          />
          <BuyButton/>
        </Description>
      </Main>
    </React.Fragment>
  );
}

export { App };
