
const sumUp = n => {

    let total = 0;

    for (let i = 1; i <= n; i++) {

        total += i;
        
    }

    return total;

};
// O(n)

const sumupto = n => {

    return (n * (n + 1)) / 2;

};
// O(1)
// console.log(sumupto(12345678));

const reverseString = str => {
    
    let reString = "";

    for (let i = 0; i < str.length; i++) {
        reString = str[i] + reString;
        
    }

    return reString;

}