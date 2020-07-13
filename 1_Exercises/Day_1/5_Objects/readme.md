<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Objects

> Complete the exercises in appropriate files.

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**


Complete the exercises in `app.js` unless the exercise description says otherwise.

#### Exercise 1

1. Using prototype, add the ```upperLower``` method to the built-in JavaScript ```String``` object.
2. The method will replace the given string of characters so that any odd character in a word will be replaced by a lowercase letter, and even - by an uppercase letter.
3. If there is a space within the string, **skip it**.

After completing the exercise, think about if you can write the function in a different, easier way.

```JavaScript
//-> input
var funnyText = "Funny".upperLower();

//output ->
fUnNy

//-> input
var funnyTextWithSpace = "Javascript is great".upperLower();

//output ->
jAvAsCrIpT iS gReAt
```

#### Exercise 2

1. Create a `Car` object and give it appropriate attributes:
   * make,
   * color,
   * number of kilometers traveled (initially it will be `0`).
2. And methods:
   * ```printCarinfo()``` - that will display information about the car (color, make and the number of kilometers traveled).
   * ```drive(km)``` - that will add a given value to the number of kilometers traveled.
     Use the keyword ```this``` to refer to an object within a method.

-------------------------------------------------------------------------------

#### Exercise 3

1. Add an array with a list of car inspection dates (as strings) to the `Car` object.
   Add this new attribute outside of the object's body.
2. Add the following methods as well:
   * a method for adding an entry to this array,
   * a method for displaying all car inspection dates.
   Use the keyword ```this``` to refer to an object within a method.

#### Exercise 4

1. In `exercise04.js` you will find a sample constructor for a robot.
2. The constructor expects you to enter just the name of the robot.
3. All robots have a few methods prepared (methods are added through prototypes).
4. Create a few robots and check if the code contains any errors.

#### Exercise 5

1. Create a constructor for ```Rectangle``` objects that will take information about the length and width of a newly created figure.
2. Next, using the class prototype, add the following methods to the class:
   * ```getArea()``` - the method should return the area,
   * ```getPerimiter()``` - the method should return perimeter.

Create a few objects and check if the methods work like they should.

#### Exercise 6

1. Create a constructor for ```Calculator``` objects.  
   The constructor should not take any data.
2. Each newly created object should have an empty array in which it will keep the history of performed calculations.
3. Next, using the class prototype, add the following methods to the class:
   1. ```add(num1, num2)``` - the method should add two variables and return the result. In addition, it should save the message: "added ```num1``` to ```num2``` got ```result```" in the operations array (of course, with variable values substituted in the right places).
   2. ```multiply(num1, num2)``` - the method should multiply two variables and return the result. In addition, it should save the message: "multiplied ```num1``` with ```num2``` got ```result```" in the operations array (of course, with variable values substituted in the right places).  
   3. ```subtract(num1, num2)``` - the method should subtract two variables and return the result. In addition, it should save the message: "subtracted ```num1``` from ```num2``` got ```result```" in the operations array (of course, with variable values substituted in the right places).
   4. ```divide(num1, num2)``` - the method should divide two variables and return the result. In addition, it should save the message: "divided ```num1``` by ```num2``` got ```result```" in the operations array (of course, with variable values substituted in the right places).
   5. ```printOperations()``` - the method should display all performed calculations saved in a variable.
   6. ```clearoperations()``` - the method should remove all past calculations from the history.

**Remember to use ```this```**.
