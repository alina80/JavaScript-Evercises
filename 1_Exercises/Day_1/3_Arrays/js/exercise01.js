function isNumbersGrowing(array) {
    // You can refer to the array through the array variable.
    // Remember to return correct data (true or false).
    for (var i = 0; i < array.length - 1; i++){
        if (array[i] > array[i + 1]){
            return false;
        }
    }
    return true;
}

console.log("array [1,2,3,4,5,6,7] is ascending (should return true) " + isNumbersGrowing([1,2,3,4,5,6,7]));
console.log("array [1,2,10,4,5,6,7] is not ascending (should return false) " + isNumbersGrowing([1,2,10,4,5,6,7]));
console.log("array [-5,-4,0,4,6,21] is ascending (should return true) " + isNumbersGrowing([-5,-4,0,4,6,21]));
console.log("array [-1,2,-1,4,5,6,7] is not ascending (should return false) " + isNumbersGrowing([-1,2,-1,4,5,6,7]));
console.log("array [8] is ascending (should return true) " + isNumbersGrowing([8]));
