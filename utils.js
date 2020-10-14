const BAG = 'BAG';

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const myID = someArray[i];
        if (myID.id === someId) {
            return myID;
        }
    }
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
}
const seen = getFromLocalStorage(BAG);

export function renderCart(someID) {

    const cartItem = findById(seen, someID);

    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const captured = document.createElement('td');
    const encountered = document.createElement('td');

    name.textContent = cartItem.pokemon;
    captured.textContent = cartItem.captured;
    encountered.textContent = cartItem.encountered;

    tr.append(name);
    tr.append(captured);
    tr.append(encountered);

    return tr;
}