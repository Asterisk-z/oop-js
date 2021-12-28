function simpleMax(arr) {
    
    var maxValue = Math.max(...arr);

    return maxValue;

}

function max(arr) {
    
    var maxValue = arr[0];

    arr.forEach(
        (val) => maxValue = Math.max(maxValue, val)
    );

    return maxValue;
}

function maxNumber(arr) {
    var max = 0;
    arr.reduce(
        (a, b) => max = Math.max(a, b), 0 );

    return max;
}


console.log(simpleMax([1, 2, 3, 42, 5, 6, 7]));
console.log(maxNumber([1, 2, 3, 42, 5, 6, 7]));
console.log(max([1, 2, 3, 42, 5, 6, 7]));
console.log(Math.max(1, 2, 3, 42, 5, 6, 7));