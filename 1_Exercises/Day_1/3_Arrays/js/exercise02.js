function add(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum = sum +array[i];
    }
    return sum;
}

function multiply(array) {
    var prod = 1;
    for (var i = 0; i < array.length; i++){
        prod = prod * array[i];
    }
    return prod;
}

var arr = [2,3,4];
console.log(add(arr));
console.log(multiply(arr));