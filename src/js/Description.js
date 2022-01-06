import React from 'react';
import '../css/Description.css';
import ProductData from './ProductData';

function Description(props) {
    return(
        <section>
            <h1>{ProductData.title}</h1>
            <p>{ProductData.description}</p>
            {props.children}
        </section>
        
    );
}

export { Description };