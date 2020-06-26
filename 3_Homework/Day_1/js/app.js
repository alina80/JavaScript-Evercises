// Exercise 1

var getNumber = function (num,array) {
    console.log(array.includes(num));
}
getNumber(2, [33, 54, 2, 1, 4, 100]);
getNumber(5, [33, 54, 2, 1, 4, 100] );

// Exercise 2

var createIdentityMatrix = function (rows) {
    var matrix = [];
    for (var i = 0; i < rows; i++){
        matrix[i] = [];
        for (var j = 0; j < rows; j++){
            if (i == j){
                matrix[i][j] = 1;
            }else {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}
console.log(createIdentityMatrix(3));
console.log(createIdentityMatrix(4));

// Exercise 3

var Tree = function (type) {
    this.type = type;

}
var tree1 = new Tree('apple');
var tree2 = new Tree('orange');
var tree3 = new Tree('fig');

Tree.prototype.bloom = function () {
    console.log('I am a ' + this.type + ' and I\'m blooming');
}
tree1.bloom();
tree2.bloom();
tree3.bloom();
console.log(tree1.hasOwnProperty('bloom'));

// Exercise 1 additional

var addTheSameNumbers = function (num, array) {
    if (array.includes(num)){
        var sum = 0;
        for (var i = 0; i < array.length; i ++){
            if (num == array[i]){
                sum += array[i];
            }
        }
        return sum;
    }else {
        return null;
    }

}
console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

// Exercise 2 additional

var powers = function (num) {
    var pow = [];
    if (num > 0){
        var exp = 1;
        do {
            pow.push(Math.pow(num,exp));
            exp += 1;
        }while (Math.pow(num,exp) < 200);
        return pow.reverse();
    }
    return pow;
}
console.log(powers(2));
console.log(powers(5));
console.log(powers(-4));

// Exercise 3 additional

var getFirstWrongElement = function (array) {
    var wrongNr = [];
    for (var i = 0; i < array.length - 1; i++){
        if (array[i + 1] % array[i] != 0){
            wrongNr.push(array[i + 1]);
        }
    }
    if (wrongNr.length > 0){
        return wrongNr.shift();
    }else {
        return null;
    }
}
console.log(getFirstWrongElement([1,5,10,14,28, 84]));
console.log(getFirstWrongElement([3,5,15,45]));
console.log(getFirstWrongElement([1, 8, 32, 128, 1024]));

// Exercise 4 additional

var getLastNumbers = function (num, array) {
    var result = [];
    if (!isNaN(num)){
        return array.splice(array.length - num,num);
    }
    return result;
}
console.log(getLastNumbers(2, [1,2,3,4,5,6,7]));
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15]));
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4]));
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));
