import React from 'react';
import '../css/Features.css';


function Features(props) {
    return(
      <section>
        <h3>Features</h3>
        <button onClick={props.onTime} className={props.showTime ? 'selected': ''}>Time</button>
        <button onClick={props.onHeartRate} className={props.showHeartRate ? 'selected': ''}>Heart Rate</button>
        <button onClick={props.onStopwatch} className={props.showStopwatch ? 'selected': ''}>Stopwatch</button>
        <button onClick={props.onWeather} className={props.showWeather ? 'selected': ''}>Weather</button>
      </section>
    );
}

export { Features };