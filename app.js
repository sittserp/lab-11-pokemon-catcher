// import functions and grab DOM elements
import pokedex from './assets/pokedex.js';
import { findById } from './utils.js';

const pokemon1 = document.getElementById('pokemon1');
const pokemon2 = document.getElementById('pokemon2');
const pokemon3 = document.getElementById('pokemon3');

const radioButtons = document.querySelectorAll('input');

// initialize state

let turnCounter = 0;
export const seen = [];

function setupPokemon() {

    turnCounter++;
    radioButtons.checked = false;
    console.log(turnCounter);

    if (turnCounter === 11) {
        window.location.href = 'results.html';
    }

    let randomIndex1 = Math.floor(Math.random() * pokedex.length);
    let randomIndex2 = Math.floor(Math.random() * pokedex.length);
    let randomIndex3 = Math.floor(Math.random() * pokedex.length);
    while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex2 === randomIndex1) {
        randomIndex3 = Math.floor(Math.random() * pokedex.length);
        randomIndex2 = Math.floor(Math.random() * pokedex.length);
    }

    radioButtons[0].id = pokedex[randomIndex1].id;
    radioButtons[1].id = pokedex[randomIndex2].id;
    radioButtons[2].id = pokedex[randomIndex3].id;

    radioButtons[0].name = pokedex[randomIndex1].pokemon;
    radioButtons[1].name = pokedex[randomIndex2].pokemon;
    radioButtons[2].name = pokedex[randomIndex3].pokemon;

    radioButtons[0].value = pokedex[randomIndex1].id;
    radioButtons[1].value = pokedex[randomIndex2].id;
    radioButtons[2].value = pokedex[randomIndex3].id;

    console.log(seen, 'seen array');

    pokemon1.id = pokedex[randomIndex1].id;
    pokemon1.src = pokedex[randomIndex1].url_image;

    pokemon2.id = pokedex[randomIndex2].id;
    pokemon2.src = pokedex[randomIndex2].url_image;

    pokemon3.id = pokedex[randomIndex3].id;
    pokemon3.src = pokedex[randomIndex3].url_image;

    radioButtons.forEach(item => {
        let choices = findById(seen, item.id);
        if (!choices) {
            choices = {
                pokemon: item.name,
                id: item.id,
                encountered: 1,
                captured: 0
            };
            seen.push(choices);
        } else {
            choices.encountered++;
        }
    });

}

setupPokemon();

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', (e) => {
        let caught = findById(seen, e.target.value);
        caught.captured++;
        setupPokemon();
    });

}

// set event listeners to update state and DOM
