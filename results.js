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

console.log(BAG);