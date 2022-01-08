// RECURSIVE 
function permutation(number) {
    return (number === 1 ) ? 1 : number * permutation(number - 1);
}
// console.log(permutation(10));
// console.log(permutation(4));
// console.log(permutation(8));

function catalan(number) {

    // let factorial = (num) => {
    //     return (num === 1 ) ? 1 : num * factorial(num - 1);
    // }

    // return (factorial(2 * number)) / ((factorial(number + 1)) * (factorial(number)));

    return (permutation(2 * number)) / ((permutation(number + 1)) * (permutation(number)));

}

console.log(catalan(3));
console.log(catalan(5));
console.log(catalan(10));