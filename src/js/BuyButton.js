import React, {useState} from 'react';
import '../css/BuyButton.css';
import { confetti } from './confetti';

function BuyButton() {
    const [showArrepentimiento, setShowArrepentimiento] = useState(false);

    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 100); 
        // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
        setShowArrepentimiento(true);
    };

    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 1000); 
        setShowArrepentimiento(false);
        
    };

    

    
    return(
        <section>
        <button className='buy-now'
                onClick={() => start()}
        >BUY NOW!</button>
       {showArrepentimiento ?  <button className='me-arrepenti'
                onClick={() => stop()} 
        >me arrepentí :c</button> : null}
        </section>
    );
}

export { BuyButton };