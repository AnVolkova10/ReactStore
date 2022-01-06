import React from 'react';
import '../css/HeartRate.css';

function HeartRate() {
    return[
        <p key={0} className='heart-rate'>78</p>,
        <i key={1} className="fas fa-heartbeat"></i>,
        
        <button key={2}>Heart Rate</button>
    ];
}

export { HeartRate };