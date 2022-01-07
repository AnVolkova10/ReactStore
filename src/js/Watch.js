import React from 'react';
import '../css/Watch.css';



function Watch({black, red, purple, blue, showBlack, showRed, showBlue, showPurple}) {

    
    return(
        <section>
            {showBlack ? <img src={black} className="watch" alt="watch" />: null}
            {showRed? <img src={red} className="watch" alt="watch" />:null}
            {showBlue?<img src={blue} className="watch" alt="watch" />:null}
            {showPurple? <img src={purple} className="watch" alt="watch" />:null}
        </section>
        
    );
}

export { Watch };