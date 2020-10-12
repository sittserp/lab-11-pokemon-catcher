// import functions and grab DOM elements
import pokedex from './assets/pokedex.js';

const pokemon1 = document.getElementById('pokemon1');
const pokemon2 = document.getElementById('pokemon2');
const pokemon3 = document.getElementById('pokemon3');

// initialize state

const randomIndex1 = Math.floor(Math.random() * 14);
const randomIndex2 = Math.floor(Math.random() * 14);
const randomIndex3 = Math.floor(Math.random() * 14);

pokemon1.src = pokedex[randomIndex1].url_image;
pokemon2.src = pokedex[randomIndex2].url_image;
pokemon3.src = pokedex[randomIndex3].url_image;




// set event listeners to update state and DOM