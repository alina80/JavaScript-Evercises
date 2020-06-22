exercise<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Multidimensional arrays

> Complete the exercises in appropriate files.

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

#### Exercise 1 - done with the lecturer

1. In`exercise01.js`, create a function named ```checkArray``` that will take a two-dimensional array with integers as a parameter.
2. The function should return a new array with booleans ```true``` or ```false``` as its elements, depending on the element of the array in the second dimension being even or not.

```JavaScript
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

//output

var arrayCheck = [
    false, // because 11
    true,
    true,
    true,
    false, // because 1
];
//---------------
//-> input
var arr = [];
arr[0] = [3, 4, 56, 773, 1];
arr[1] = [7, 12, 0, 98, 34, 381];
arr[2] = [12, 66, 96, 54, 10];

//output ->
arrayCheck[0];//should be false
arrayCheck[1];//should be false
arrayCheck[2];//should be true
```
-------------------------------------------------------------------------------

#### Exercise 2

1. In `exercise02_03.js`, create a function named ```print2DArray``` that will take a two-dimensional array as a parameter.
2. Next, the function will display the contents of this array in the console.

#### Exercise 3

1. In `exercise02_03.js`, write a two-dimensional array and test it with your code for exercise 2.

#### Exercise 4

1. In `exercise04.js`, create a function named ```create2DArray``` that will take two integers (```rows``` and ```columns```).
2. The aim of this function is to return a two-dimensional array with the given number of rows and columns.
3. The cells should be filled with subsequent integers.
4. Next, use your code for exercise 2 to display this array in the console.  

Hint: Use nested loops.
