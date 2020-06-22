<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  jQuery - events

> Complete the exercises in appropriate files.

Complete the exercises in `app.js` unless the exercise description says otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.   

**Do not modify the HTML code unless the instructions say otherwise.**

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

#### Exercise 1 - done with the lecturer

In `index.html`, find three **buttons** in the element with the ```hero-buttons``` **class**.  
Create a function in which you will do the following:
1. assign each of the buttons to a different variable,
2. set a ```click``` event for the first element that will display the message: `I have been clicked` in the console,
3. set a ```click``` event for the second element that will display the message: `I have been clicked, but I will not let anyone click me again` in the console. This message should be displayed only once.
4. call the `off` method for the third button that will detach all events from all buttons.

Test how your function works.

-------------------------------------------------------------------------------

#### Exercise 2

In `counter.html`, you will find an empty form. Place a **textarea** in it.

1. Below that field place a counter that will display how many characters are currently in the textarea, e.g. ```63/100```.  
2. The counter should update its count live - **each time** a character is entered in / deleted from the textarea.
3. Block the possibility of entering more than `100` characters in this field.

The text with character count should change its color:

|font color|character count|
|:--:|:--:|
|green|0&ndash;33|
|yellow|34&ndash;66|
|red|67&ndash;100|

Complete the exercise in the `counter.js` file and remember to add jQuery.

Hint:  
The substitute of `innerHTML` in `jQuery` is [html()][html], and `innerText` is [text()][text]

#### Exercise 3

In `index.html`, find a **section** with ```superhero-description``` **class** and write a function that will:
1. Hide all **dd** elements by default.
2. When **dt** is clicked, make **dd** elements:
  * appear if they were hidden,
  * disappear if they were visible.

#### Exercise 4

In `index.html`, find a form with ```login``` **class**.
1. Create a function that will react to clicking the ```show-hide-btn``` button.
2. First, set the event in a way that the button displays `I am working` in the console when clicked.
3. Next, the function should check the type of the element that stores the password.
   If it is ```password```, change the **type** to ```text```. If it is ```text```, change type to ```password```.

Read about the [attr()][attr] method and use it in this exercise.

#### Exercise 5

1. When a **menu** element is hovered over, display `Hurray` in the console.

#### Exercise 6

In `index.html`, find a form with ```login``` **class**, and then write a function that will:
1. set green outer shadow when an **input** element is **clicked**,
2. change the ```background-color``` to gray when the mouse cursor **leaves** the **input** field.

<!-- Links -->
[attr]:https://api.jquery.com/attr/
[html]:https://api.jquery.com/html/
[text]:https://api.jquery.com/text/
