function create2DArray(rows, columns) {
    var array = [];
    var count = 1;
    for (var i = 0; i < rows; i++){
         array[i] = [];
        for (var j = 0; j < columns; j++){
             array[i][j] = count;
            count ++;
        }
    }
    return array;
}
function print2DArray(array) {
    for (var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
print2DArray(create2DArray(4,5));