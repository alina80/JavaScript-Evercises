<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Navigating the DOM tree

> Complete the exercises in appropriate files.

Complete the exercises in `app.js` unless the exercise description says otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.   

**Do not modify the HTML code unless the instructions say otherwise.**

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

Each exercise has its own **HTML** file and should be completed in a separate JavaScript file (empty files are prepared in the appropriate directory).

#### Exercise 1 - done with the lecturer

There are three lists in the file (each embedded in a **div** element).  
After hovering over a **div**, the background colors of elements of its list should change accordingly:
1. The first list element will have a red background.
2. The last list element will have a blue background.
3. The rest of the elements will have a green background.
4. When the mouse hovers over the **div** element, add ```hovered``` class to it, but only to this one element.

Your answer must apply the following guidelines:
1. One event must operate all divs.
2. List elements must be searched depending on the location of ```this```.

#### Exercise 2 - done with the lecturer

There are several buttons in the file (in the form of styled links).
After any of those buttons is clicked, the first following element should disappear (if it was visible) or appear (if it was hidden).  
Rozwiązanie musi spełniać następujące założenia:
One event must operate all buttons.
2. The following element must be searched depending on the location of ```this```.
3. The code must work correctly and not generate errors (remember to check if the following element is not ```null```).

-------------------------------------------------------------------------------

#### Exercise 3

There are several buttons in the file (in the form of styled links).
After any of those buttons is clicked, its parent should change its background color (to a random color).
Your answer must apply the following guidelines:
1. One event must operate all buttons.
2. The parent must be searched depending on the location of ```this```.
3. Background color must be random.

Hint:
Use the following code to get a random color:
```JavaScript
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

#### Exercise 4

Find and save the following elements in variables:
1. Element with ```first``` **class** -> its first child -> its third child.
2. Element with ```second``` **id** -> its parent -> its fourth child.
3. Element with a ```data-ex``` **attribute** set to ```third``` -> its grandparent -> its last child -> its first child -> its middle child (to get the middle element, divide the number of children by two and round up).
4. **Div** with ```forth``` **class** -> its parent -> its first child being the ```article``` tag -> its second child being the ```<p>``` tag.

All those elements have the ```data-answer``` attribute set to the number of corresponding exercise.
Check it by displaying the value of this attribute in the console. This way you will know if the given exercise is done correctly.
