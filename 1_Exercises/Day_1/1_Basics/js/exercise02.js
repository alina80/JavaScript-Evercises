function myEval(a, b, operation) {//defining myEval function that takes 3 parameters: a, b, operation
    //Body of the function
    var result = 0;
    switch (operation) {
        case'+':
            result = a + b;
            break;
        case'-':
            result = a - b;
            break;
        case'/':
            result = a / b;
            break;
        case'*':
            result = a * b;
            break;
        case'%':
            result = a % b;
            break;
        case'^':
            result = Math.pow(a, b);//using a built-in object that calculates a to the power of b
            break;
    }
    return result;//returniing the result of the function
    //End of function boy
}

//in each line, the function is called with appropriate parameters; 2 numbers and a mathematical operation
console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
//add the remaining operations that the function should perform below
