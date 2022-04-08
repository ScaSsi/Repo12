// Only change code below this line
function sumFibonacci(num) {
    if(num <= 0) return 0;
    if(num === 1) return 1;
    var sum = 0;
    var numOne = 0, numTwo = 1, next;
    for(var i=1; i<=num; i++) {
        next = numOne + numTwo;
        numOne = numTwo;
        numTwo = next;
        //console.log(next)
        if(next%2 === 1 && next <= num) sum += next;
    }
    return sum+1;
}

// Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;

