import React from 'react';
import '../css/ColorSelector.css';
import ProductData from './ProductData';


function ColorSelector(props) {
    
    
    return[
        <h3 key={4}>Select Color</h3>,
        <img key={0} onClick={props.onChangeBlack} src={ProductData.colorOptions[0].imageUrl} className={props.showBlack ? 'default small-watch': 'small-watch'} />,
        <img key={1} onClick={props.onChangeRed} src={ProductData.colorOptions[1].imageUrl} className={props.showRed ? 'default small-watch': ' small-watch'} />,
        <img key={2} onClick={props.onChangeBlue} src={ProductData.colorOptions[2].imageUrl} className={props.showBlue ? 'default small-watch': 'small-watch'} />,
        <img key={3} onClick={props.onChangePurple} src={ProductData.colorOptions[3].imageUrl} className={props.showPurple ? 'default small-watch': 'small-watch'}  />,
        
    ];
}

export { ColorSelector };