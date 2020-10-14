import { renderCart } from './utils.js';

const BAG = 'BAG';

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}

const cartTable = document.getElementById('cart-body');

const seen = getFromLocalStorage(BAG);

for (let i = 0; i < seen.length; i++) {
    const cartItem = seen[i].id;
    const cartLine = renderCart(cartItem);

    cartTable.append(cartLine);
}

const caughtPokemon = seen.map(choices => choices.captured);
const labels = seen.map(choices => choices.pokemon);

const ctx = document.getElementById('chart').getContext('2d');

// const data = [12, 19, 3, 5, 2, 3];
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Pokemon',
            data: caughtPokemon,
            backgroundColor: labelColors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

myChart.data.datasets[0].data = [100, 200, 300, 50, 10];

console.log(myChart.data.datasets[0].data);

console.log(BAG);