import React from 'react';
import '../css/Features.css';


function Features(props) {
    return(
      <section>
        <h3>Features</h3>
        {props.children}
      </section>
    );
}

export { Features };