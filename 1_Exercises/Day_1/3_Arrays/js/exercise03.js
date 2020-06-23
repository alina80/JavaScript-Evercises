function distFromAverage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    var avg = sum / array.length;
    var arrDistance = [];
    for (var i = 0; i < array.length; i++){
        arrDistance[i] = Math.abs(array[i] - avg);
    }
    return arrDistance;
}
console.log(distFromAverage([1,2,3,4,5,6,7]));
console.log(distFromAverage([1,1,1,1]));
console.log(distFromAverage([2,8,3,7]));
