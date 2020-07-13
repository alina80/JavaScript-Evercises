<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Basics

> Complete the exercises in appropriate files.

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

#### Exercise 1

Take a look at `exercise01.js`.  
You will find there code of a function that draws a number from the range `1-100`.  
Add code that will display the following information in the console:
 1. Information whether the number is even or odd.
 2. All dividers of the number, e.g. for `10` it will display `5`, `2`, `1` (the numbers should be displayed in a single line).
 3. The result of the power of the number, where the exponent should be the rest from dividing that number by `5`.

```
**Example for point 3.**:
Drawn number: 8
8 % 5 = 3
8^3 = 512
```

Complete the exercise in the same file.

#### Exercise 2

In `exercise02.js` you will find a sample function that calculates simple equations.
Because functions will be shown in the next chapter, now we only deal with the body of this function.
Additionally, you will find comments in the code that describe functions.

Unfortunately, the function does not work properly.
1. Find errors and fix them do that the function works properly.
2. Write additional tests to check if all the cases work.

Complete the exercise in the same file.

-------------------------------------------------------------------------------

#### Exercise 3

1. In `exercise03.js`, create one variable for each variable type that you know.
2. Name each variable properly and fill with appropriate data.
3. Next, add different variables and observe the type of the result.
4. Write the type of each variable in a comment next to it.
5. Display each variable in the console.

Note how the type of data changes depending on the types of variables that are added to each other.
This is the so-called implicit type conversion (JavaScript engine changes the data type without our participation).

#### Exercise 4

Take a look at `exercise04.js`.  
You will find there an outline of a function that takes three numbers.
1. Add function body so that it returns ```true``` (boolean value), if the three numbers can be sides of one triangle, and ```false``` otherwise.
2. Triangle can be built of three lines only if the sum of lengths of two of them is greater than the length of the third line, meaning:

   ```JavaScript
   a + b > c
   c + b > a
   a + c > b
   ```

   Use ```if```, ```else``` and ```else if```.

3. Next, change your answer so that all the points are contained in one ```if``` statement (use logical operators).
Remember to use the keyword ```return``` to return the data from the function.

Complete the exercise in the same file.

#### Exercise 5

Take a look at `exercise05.js`.  
You will find some code there.  
1. Analyze the code and describe errors that you have noticed in a comment.
2. Try not to run the code until you find the errors.
