// RECURSIVE 
function permutation(number) {
    return (number === 1 ) ? 1 : number * permutation(number - 1);
}
// console.log(permutation(10));
// console.log(permutation(4));
// console.log(permutation(8));