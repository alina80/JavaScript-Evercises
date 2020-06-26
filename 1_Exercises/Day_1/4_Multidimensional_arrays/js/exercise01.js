function checkArray(array) {
    var arrCheck = [];
    for (var i = 0; i <array.length; i++){
        var test = true
        for (var j = 0; j < array[i].length && test == true; j++){
            if (array[i][j] % 2 != 0){
                test = false
            }
        }
        arrCheck[i] = test;
    }
    return arrCheck;
}
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

console.log(checkArray(arr));

var arr2 = [
    [3, 4, 56, 773, 1],
    [7, 12, 0, 98, 34, 381],
    [12, 66, 96, 54, 10]
];
console.log(checkArray(arr2));