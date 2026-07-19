const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const slice = numbers.slice(2, 6);
// console.log(slice);
// console.log(numbers);

const parts = numbers.splice(2, 2, 99, 999, 10000);
console.log(parts);
console.log(numbers);

