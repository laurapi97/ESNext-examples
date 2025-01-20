

const state = [
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


const index = 1;
const newName = 'Gatubela';


const newState = state.with(index, {
    // id: 1000,
    ...state.at(index),
    name: newName
})

state[0].name = 'Fionita';

// console.table(state);
console.table(newState);
console.log('El último:', state.at(0));