import React from 'react';
import '../css/Description.css';

function Description(props) {
    return(
        <section>
            <h1>React Smart-Watch</h1>
            <p>It can do ANYTHING</p>
            {props.children}
        </section>
        
    );
}

export { Description };