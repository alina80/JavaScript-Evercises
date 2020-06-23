function factors(n) {
    var divisors = [];
    if (!isNaN(n) && n > 0){
        for (var i = n; i > 0; i--){
            if ((n % i) === 0){
                divisors.push(i);
            }
        }
    }else {
        console.log('Not a number');
    }
    return divisors;
}
console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));
console.log(factors('a'));
