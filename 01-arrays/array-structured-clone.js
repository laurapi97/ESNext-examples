

const superHeroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Flash        '
    },
    {
        id: 3,
        name: 'Green Lantern'
    },
    {
        id: 4,
        name: 'Wonder Woman'
    },
];


const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Green Arrow';

// console.table(superHeroes);
// console.table(superHeroesCopy);
