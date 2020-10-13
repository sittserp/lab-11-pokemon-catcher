// import functions and grab DOM elements
import pokedex from './assets/pokedex.js';

const pokemon1 = document.getElementById('pokemon1');
const pokemon2 = document.getElementById('pokemon2');
const pokemon3 = document.getElementById('pokemon3');

// initialize state

let catchCounter = 0;
const caught = [];

function setupPokemon() {

    catchCounter++;

    if (catchCounter === 11) {
        window.location.href = 'results.html';
    }

    let randomIndex1 = Math.floor(Math.random() * 14);
    let randomIndex2 = Math.floor(Math.random() * 14);
    let randomIndex3 = Math.floor(Math.random() * 14);

    pokemon1.src = pokedex[randomIndex1].url_image;
    pokemon1.id = pokedex[randomIndex1].id;

    pokemon2.src = pokedex[randomIndex2].url_image;

    while (pokemon2.src === pokemon1.src) {
        randomIndex2 = Math.floor(Math.random() * 14);
    }
    pokemon2.id = pokedex[randomIndex2].id;

    pokemon3.src = pokedex[randomIndex3].url_image;

    while (pokemon3.src === pokemon1.src || pokemon3.src === pokemon2.src) {
        randomIndex3 = Math.floor(Math.random() * 14);
    }
    pokemon3.id = pokedex[randomIndex3].id;

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


