import React from 'react';
import '../css/BuyButton.css';
import { confetti } from './confetti';

function BuyButton() {

    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 100); 
        // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    // const stop = () => {
    //     setTimeout(function() {
    //         confetti.stop()
    //     }, 5000); 
        
    // };

    

    
    return(
        <button className='buy-now'
                onClick={() => start()}
        >BUY NOW!</button>
    );
}

export { BuyButton };