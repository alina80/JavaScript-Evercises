<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  More about elements

> Complete the exercises in appropriate files.

Complete the exercises in `app.js` unless the exercise description says otherwise.
Remember to separate exercises with comments and to write legible, well-formatted code.   

**Do not modify the HTML code unless the instructions say otherwise.**

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

The page **index.html** is divided into parts corresponding with the exercises.  

**Search for elements only in the div corresponding with appropriate exercise.**

#### Exercise 1 - done with the lecturer

Modify the list as follows::
1. Add ```data-direction``` attribute with the value set to ```up``` to each **li** element that does not have that attribute yet.
2. Set the background color of every second list item to green.
3. Give the fifth element of the list ```big``` **class**.
4. Set underlining for every third element.

#### Exercise 2 - done with the lecturer

1. In the exercise (`index.html` file) there is a simpleform with a ```select```.
2. Set the description of each ```option``` element to the description value from the ```value``` attribute.
3. Give each element a ```data-year``` attribute. Use ```dataset```, but the output value should be greater than in the ```value``` attribute by `20`,
   e.g. `2020 -> 2040`.

-------------------------------------------------------------------------------

### Exercise 3

On the page, there are three images with icons of the most popular internet browsers. Unfortunately, both images and links to their pages contain errors.
Write JavaScript code that will make the following changes:
1. Correct the elements so that the right logo is linked to every browser (the image is set using ```background-image```).
2. Correct the links so that each has the correct description and ```href``` attribute.
3. adjust the width of the element with the ```chrome``` class (should be: `100px`).

In the console, look what the CSS code added by JavaScript looks like. Think about why it is added in this particular place.

Write the answer to this question in a comment to the exercise.

### Exercise 4

There is a list on the page. Enter your name and surname in it, your favorite color and favorite dish.
1. Find all **span** elements and save them in variables.
2. Fill in the appropriate information in them using  ```innerHTML```.

### Exercise 5

The page has a simple menu. Both HTML and CSS are already prepared for it. Unfortunately, someone forgot to add appropriate classes to the elements.
1. Find the ```ul``` element and give it ```menu``` class.
2. ind all ```li``` elements and add ```menuElement``` class to them (use a loop). Be careful not to delete the ```selected``` class.
3. Note that one of the elements has a red text color. This is caused by its ```error``` **class**. Remove it (preferably remove this **class** from all elements that have it).

### Exercise 6

Give every element of the list a ```data-id``` attribute that takes consecutive integers (starting from 1).
Do this exercise in two ways:
  1. Using dataset,
  2. Using the ```setAttribute``` method.
