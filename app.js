// import functions and grab DOM elements
import pokedex from './assets/pokedex.js';

const pokemon1 = document.getElementById('pokemon1');
const pokemon2 = document.getElementById('pokemon2');
const pokemon3 = document.getElementById('pokemon3');

// initialize state

let catchCounter = 0;
export const caught = [];

function setupPokemon() {

    catchCounter++;
    console.log(catchCounter);
    console.log(caught);

    if (catchCounter === 11) {
        window.location.href = 'results.html';
    }

    let randomIndex1 = Math.floor(Math.random() * 14);
    let randomIndex2 = Math.floor(Math.random() * 14);
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * 14);
    }
    let randomIndex3 = Math.floor(Math.random() * 14);
    while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
        randomIndex3 = Math.floor(Math.random() * 14);
    }

    pokemon1.id = pokedex[randomIndex1].id;
    pokemon1.src = pokedex[randomIndex1].url_image;

    pokemon2.id = pokedex[randomIndex2].id;
    pokemon2.src = pokedex[randomIndex2].url_image;

    pokemon3.id = pokedex[randomIndex3].id;
    pokemon3.src = pokedex[randomIndex3].url_image;

    console.log(randomIndex1);
    console.log(randomIndex2);
    console.log(randomIndex3);

}

setupPokemon();

// set event listeners to update state and DOM


pokemon1.addEventListener('click', () => {
    caught.push(pokemon1.id);
    setupPokemon();
});

pokemon2.addEventListener('click', () => {
    caught.push(pokemon2.id);
    setupPokemon();
});

pokemon3.addEventListener('click', () => {
    caught.push(pokemon3.id);
    setupPokemon();
});


