import React from 'react';
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
  return (
    <React.Fragment>
      <NavBar/>

      <Main>
        <Watch/>
        <Description/>
        <ColorSelector/>

        <Features>
          <Time/>
          <HeartRate/>
          <Weather/>
          <Stopwatch/>
        </Features>

        <BuyButton/>        
      </Main>
    </React.Fragment>
  );
}

export { App };
