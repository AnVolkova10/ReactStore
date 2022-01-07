import React from 'react';
import '../css/Features.css';


function Features(props) {
    return(
      <section>
        <h3>Features</h3>
        <button onClick={props.onTime}>Time</button>
        <button onClick={props.onHeartRate} >Heart Rate</button>
        <button onClick={props.onStopwatch}>Stopwatch</button>
        <button onClick={props.onWeather}>Weather</button>
      </section>
    );
}

export { Features };