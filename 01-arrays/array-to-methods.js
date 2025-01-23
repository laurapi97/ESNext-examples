const heroes = ['Batman','Superman', 'Flash','Aquaman',];
// heroes.sort();

// heroes.sort();
// const heroesSorted = heroes.toSorted();// método sorted: devuelve un nuevo arreglo con los elementos ordenados
// const reversedHeroes = heroes.toReversed();// método reversed: contrario al sorted
const deletedHero = heroes.splice(0,1, 'Gatubela');
// heroes.reverse();


console.table(heroes);
console.table(deletedHero);
// console.table(heroesSorted);
// console.table(reversedHeroes);