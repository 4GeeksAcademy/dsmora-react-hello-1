import IMGReact from './../img/descarga.png';
import ReactLogo from './../img/react-logo.jpg';

export const products = [
    {
        title: 'Vertex 03',
        description: 'Juan Tello',
        image: IMGReact,
        cta: 'Comprar',
        available: true,
    },
    {
        title: 'Hack 03',
        description: 'Paquito Navarro',
        image: ReactLogo,
        cta: 'Comprar',
        available: true,
    },
    {
        title: 'Nox AT10',
        description: 'Agustin Tapia',
        image: IMGReact,
        cta: 'No disponible',
        available: false,
    },
    {
        title: 'AdiPower hard',
        description: 'Ale Galan',
        image: IMGReact,
        cta: 'No disponible',
        available: false,
    },
    {
        title: 'Nox AT10',
        description: 'Agustin Tapia',
        image: ReactLogo,
        cta: 'No disponible',
        available: false,
        featured: true
    },
];

export const products2 = [
    {
        title: 'Hack 03',
        descripcion: 'Paquito Navarro',
        image: ReactLogo,
        cta: 'Comprar',
        available: true,
    },
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['trebol', 'corazon', 'pica', 'diamante'];

export const getCard = () => {
    const cardNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const cardSymbol =  symbols[Math.floor(Math.random() * symbols.length)];

    return {
        cardNumber,
        cardSymbol
    }
};



export const owner = '@dsmora';

import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import Home from "./component/home.jsx";
let counter = 0
setInterval(() =>{
    if(counter>999999){
        counter=0
    }
    const six=Math.floor(counter/100000)
    const five=Math.floor((counter%100000)/10000)
    const four=Math.floor((counter%10000)/1000)
    const three=Math.floor((counter%1000)/100)
    const two= Math.floor((counter%100)/10)
    const one= Math.floor(counter%10)
    counter++
    //render your react application
ReactDOM.render(<Home digitSix={six} digitFive={five} digitFour={four} digitThree={three} digitTwo={two} digitOne={one}/>, document.querySelector("#app"));
},1000)
