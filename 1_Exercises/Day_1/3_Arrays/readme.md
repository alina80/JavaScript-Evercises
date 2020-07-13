exercise<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Arrays

> Complete the exercises in appropriate files.

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

#### Exercise 1

Take a look at `exercise01.js`. You will find there a scheme of a function that takes an array.

1. Add the body of the function in a way that the function returns ```true``` (boolean) when the array has numbers in ascending order (each number is greater than the previous one), and ```false``` otherwise.
2. Remember to use the keyword ```return```.

#### Exercise 2

1. In `exercise02.js`, write two functions named ```add(array)``` and ```multiply(array)```
2. Both of them should take only one parameter - an array.
3. The ```add``` function should add all numbers that are in the array (using a `for` loop)
4. The ```multiply``` function should multiply all numbers that are in the array (using a `for` loop).

#### Exercise 3

1. In `exercise03.js`, write a function named ```distFromAverage``` that  will take an array of numbers as a parameter.
2. Each field of the array returned by the function should store the difference between the number from the same field in the input array and the average of the input array.
To simplify, you can use the functin from the previous exercise.

E.g.
```JavaScript
distFromAverage([1,2,3,4,5,6,7]);// => [3,2,1,0,1,2,3] (average of the input array is 4)
distFromAverage([1,1,1,1]);// => [0,0,0,0] (average of the input array is 1)
distFromAverage([2,8,3,7]);// => [3,3,2,2] (average of the input array is 5)
```

-------------------------------------------------------------------------------

#### Exercise 4

In `exercise04.js` list your favorite fruit in an array. Then:
1. Write the first fruit in the console.
2. Write the last fruit in the console (use the ```length``` attribute).
3. Write all the fruit in a loop (use the ```length```attribute).

#### Exercise 5

1. In`exercise05.js`, write a function named ```printTable(array)```, that will take only one parameter - an array.
2. Using a `for` loop, iterate (go) through every element and write each of them in the console.

#### Exercise 6

1. In `exercise06.js`, create a function named ```factors``` that will take only one parameter - a positive number (greater than `0`).
2. The function should return an array containing all divisors of the given number (in descending order).
3. If the number is less than or equal to `0`, the function should return an empty array.

```JavaScript
factors(2);// => [2, 1]
factors(54);// => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4);// => []
```

#### Exercise 7

1. In `exercise07.js`, create a function named ```getMissingElement``` that will take only one parameter - an array containing integers in ascending order.
2. The function should return the missing numbers (places where the values of array elements increase by 2 instead of 1).
3. If there are no missing integers in the array, the function should return ```null```.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]);// => null
getMissingElement([6,7,8,10,11,12,13,14,15]);// => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]);// => -1
```


#### Exercise 8 - additional

1. In `exercise08.js`, create an array containing a year of birth in each element.
2. Next, write a function that will take that array as a parameter and display:
   * the year of birth of the oldest person and their age,
   * the year of birth of the youngest person and their age.
   Use a loop to iterate through the array but try to get the elements using ```pop``` or ```shift``` methods.
