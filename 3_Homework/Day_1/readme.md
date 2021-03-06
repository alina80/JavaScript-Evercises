<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - homework
> Write the code in appropriate files according to exercise descriptions.

**VERY IMPORTANT - Your homework is checked using an automated system. In order for the answers to be considered correct, the pages MUST display the same messages as in the exercise description, and function and method names MUST be exactly the same as given in the exercises.**

### Day 1
> Do exercises 1-3 in the app.js file

#### Exercise 1
Write ```getNumber``` function that will take two parameters &ndash; a number and an array. The function should return boolean value: true or false depending on whether the passed number is an element of the passed array, or not.

```JavaScript
getNumber(2, [33, 54, 2, 1, 4, 100]);// => true
getNumber(5, [33, 54, 2, 1, 4, 100] );// => false
```

#### Exercise 2
Write a function named ```createIdentityMatrix``` that will take ```rows``` integer as a parameter. The function should **return** a two-dimensional array and look the following way:

```JavaScript
createIdentityMatrix(4,4);
//=>[ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ];
 ```
This is the so-called identity matrix, i.e. square matrix with ones on the main diagonal and zeros elsewhere.
You must use nested loops.  
Remember that the array must be **returned** by the function - otherwise the exercise will be failed.

#### Exercise 3
Using constructor, create a function named ```Tree``` with just one property: ```type``` which will store the type of tree.
Next, based on the Tree constructor, create 2-3 instances (objects) being different trees.

Add ```bloom()``` method to the constructor that will return the text "I'm blooming". Check with ```hasOwnProperty()``` method if that method was created for each instance separately. If so, optimize the code by adding the method to the prototype of the ```Tree``` function.


## Additional exercises - for volunteers

> Do all additional exercises in the app.js file

#### Exercise 1 - additional
Write a function named ```addTheSameNumbers``` that will take two parameters &ndash; a number and an array. The function should return the sum of all array elements that are equal to the number passed as the first function parameter. If the number does not appear in the array at all, return null.

```JavaScript
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]);// => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]);// => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]);// => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]);// => null
```

#### Exercise 2 - additional
Write a function named ```powers``` that will take just one parameter &ndash; a number greater than **0**. The function should return an array with subsequent powers of the given number (in descending order) that are less than 200. If the given number is less than or equal to **0**, the function should return an empty array.

```JavaScript
powers(2);// => [ 128, 64, 32, 16, 8, 4, 2 ]
powers(54);// => [ 125, 25, 5 ]
powers(-4);// => []
```

#### Exercise 3 - additional
Write a function named```getFirstWrongElement``` that will take just one parameter &ndash; an array with ascending integers. The function should return the first array element that is not a multiple of the previous element. If all elements of the array are multiples of the previous ones, the function should return ```null```.

```JavaScript
getFirstWrongElement([1,5,10,14,28, 84]);//=> 14
getFirstWrongElement([3,5,15,45]);// => 5
getFirstWrongElement([1, 8, 32, 128, 1024]);// => null
```

#### Exercise 4 - additional
Write a function named ```getLastNumbers``` that will take two parameters &ndash; an integer and an array. The function should return a new array containing as many last elements of the passed array as the value of the first parameter (the number) states. If there is no first parameter or it is not an integer, the function should return an empty array.

```JavaScript
getLastNumbers(2, [1,2,3,4,5,6,7]);// => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]);// => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]);// => []
getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]);// => []
```
