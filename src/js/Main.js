import React from 'react';
import '../css/Main.css';


function Main(props) {
    return(
      <main>
        {props.children}
      </main>
    );
}

export { Main };