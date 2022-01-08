const ProductData = {
    title: 'React Watch - The Smartest One',
    description: `Here we are!!!111 testing a React App. Please use me in a maximized browser mode :c, everytime you use me in windows mode a kitten dies y yo me rompo >_<`,
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;