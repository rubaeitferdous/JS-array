const numbers = [87, 54, 12, 63, 41, 87, 51];
const reversed = numbers.reverse();
console.log(reversed);

const friends = ['abul', 'babul', 'cabul', 'dabul'];
const afterReverse =[];
for( const friend of friends){
    console.log(friend)
    afterReverse.unshift(friend)
    console.log(afterReverse)
}

const digits = [1, 2, 3, 4, 5, 6];
for(let i =0; i < digits.length; i++){
    console.log(i, digits[i])
}

const reverseDigits = [];
//reverse for loop to get array elements
for(let i = digits.length -1; i>=0; i--){
    console.log(i, digits[i])
    reverseDigits.push(digits[i]);
}