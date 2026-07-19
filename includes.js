const numbers = [3, 4, 5, 6, 7];

// const hasItem = numbers.includes(600);
// console.log(hasItem);
 
// const players = ['laotaro', 'messi', 'dibu', 'otamendi', 'lishandro'];
// if(players.includes('messi')){
//     console.log('messi is playing');
// }  
const numbers2 = [8, 9, 10, 11, 12];
const allNumbers = numbers.concat(numbers2);
// console.log(allNumbers);
const numbs = [1, 3, 5, 2, 8];
const joined = numbs.join(',');
console.log(joined);

const position = numbs.indexOf(28);
console.log('position of 5: ', position);


// console.log(typeof numbs);
console.log(Array.isArray(numbs));