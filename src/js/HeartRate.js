import React from 'react';
import '../css/HeartRate.css';

function HeartRate() {
    return(
        <div>
            <p className='heart-rate'>{Math.floor(Math.random() * (90 - 60)) + 60}</p>
            <i className="fas fa-heartbeat"></i>
        </div>   
    );
}

export { HeartRate };