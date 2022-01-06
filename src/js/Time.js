import React from 'react';
import '../css/Time.css';

function Time() {
    const currentHour = new Date().getHours()>9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes()>9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return[
        <div key={0} className="time-data">{`${currentHour}:${currentMinutes}`}</div>,
        <button key={1}>Time</button>
    ];
}

export { Time };