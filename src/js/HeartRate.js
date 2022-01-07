import React from 'react';
import '../css/HeartRate.css';

function HeartRate() {
    return(
        <div>
            <p className='heart-rate'>78</p>
            <i className="fas fa-heartbeat"></i>
        </div>   
    );
}

export { HeartRate };