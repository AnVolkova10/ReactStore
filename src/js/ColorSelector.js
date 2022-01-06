import React from 'react';
import '../css/ColorSelector.css';
import ProductData from './ProductData';

function ColorSelector(props) {
    

    const changeColor = () => {
        console.log('cambio color del grande ' );
    }

    
    return[
        <h3 key={4}>Select Color</h3>,
        <img key={0} onClick={changeColor} src={ProductData.colorOptions[0].imageUrl} className='small-watch' />,
        <img key={1} onClick={changeColor} src={ProductData.colorOptions[1].imageUrl} className='small-watch' />,
        <img key={2} onClick={changeColor} src={ProductData.colorOptions[2].imageUrl} className='small-watch' />,
        <img key={3} onClick={changeColor} src={ProductData.colorOptions[3].imageUrl} className='small-watch' />,
        
    ];
}

export { ColorSelector };