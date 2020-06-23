function getMissingElement(array) {
    var missing = [];
    for (var i = 0; i < array.length - 1; i++){
        var nrOfMissingElem = array[i+1] - array[i];

        if (nrOfMissingElem > 1 ){
            for (var j = 1; j < nrOfMissingElem; j++){
                missing.push(array[i] + j);
            }
        }
    }
    return missing;
}
console.log('Missing elements are: ' + getMissingElement([1,2,3,4,5,6]));
console.log('Missing elements are: ' + getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log('Missing elements are: ' + getMissingElement([-4,-3,-2,0,1,2,3,4]));
console.log('Missing elements are: ' + getMissingElement([12,16,17]));