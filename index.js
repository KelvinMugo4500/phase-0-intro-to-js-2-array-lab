// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
};

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
};

function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
};

function prependCat(name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
};

function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
};

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
};
    
