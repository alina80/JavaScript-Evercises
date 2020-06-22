<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Creating and deleting elements

> Complete the exercises in appropriate files.

Complete the exercises in `app.js` unless the exercise description says otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.   

**Do not modify the HTML code unless the instructions say otherwise.**

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

Each exercise has its own **HTML** file and should be completed in a separate JavaScript file (empty files are prepared in the appropriate directory).

#### Exercise 1 - done with the lecturer

There is an array containing information about orders (with two orders already filled) on the page.
Below, there is a form that adds a new order.
1. Write an event that will extract information from the inputs (```el.value```) and add a new entry to the array.

#### Exercise 2 - done with the lecturer

On the page prepared for this exercise, there is a list and a button.
1. Add appropriate events to them so that clicking the button results in adding a new element to the list.
2. An element should have the information about the number of elements that already are on the list at the time when this one is added.
   Sample element is placed in a comment in the HTML code.

-------------------------------------------------------------------------------

#### Exercise 3

There is a button on the page.
1. Add an event to it in such a way that when clicked, the button is deleted from the page.

#### Exercise 4

On the page, there is a list with multiple entries, and a button.
1. Write an event that deletes **all** children of the list when the button is clicked.

#### Exercise 5

On the page, there is an array similar to the one from exercise 1. This time, next to each order there is a button that is used to delete this order.  
1. Add an appropriate event that will cause the order to disappear from the array.  
2. Try to do this in such a way that all buttons use the same event (use ```this```).

#### Exercise 6

There are two lists on the page. Next to each entry (in both lists) there are buttons.
1. Write JavaScript code that will move an element of one list to the other list when a corresponding button is clicked.
2. Remember that an element can be moved multiple times (e.g. from list `1` to list `2`, and then back to list `1`).
