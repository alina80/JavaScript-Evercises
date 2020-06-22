<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Events

> Complete the exercises in appropriate files.

Complete the exercises in `app.js` unless the exercise description says otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.   

**Do not modify the HTML code unless the instructions say otherwise.**

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

Each exercise has its own **HTML** file and should be completed in a separate JavaScript file (empty files are prepared in the appropriate directory).

#### Exercise 1 - done with the lecturer

Run the page prepared for exercise 1. In the console, check it for errors. Then:
1. Move the ```<script>``` tag to the ```<head>``` section. Check what has changed in the way the script works. Try to explain it.
2. Create a ```DOMContentLoaded``` event for the ```document```  element and move the code inside this event. Did it improve the situation?
3. Again, move the ```<script>``` tag to the end of the file. Is there any difference?

#### Exercise 2 - done with the lecturer

There are three buttons on the page.
1. Write one event for all buttons, attached to the parent element with ```bubblingButtons``` **id**, that will cause the counter placed in ```data-counter``` attribute to increase value by one when a button is clicked.

Remember to write everything in the ```DOMContentLoaded``` event.

-------------------------------------------------------------------------------

#### Exercise 3

There is a button on the page.
1. Link an event to it so that after it is clicked, the console will display the message:
   `Hurray! It works!`

Remember to write everything in the ```DOMContentLoaded``` event.

#### Exercise 4

There are three buttons and three counters on the page (```span``` elements with ```counter``` class).
1. Write an event for each button so that clicking it will increase the value of the assigned counter by `1`.

Remember to write everything in the ```DOMContentLoaded``` event.

#### Exercise 5

There are three buttons and one counter on the page.

1. Write one event for all buttons that will increase the value of the counter by `1` when any of the buttons is clicked.

Remember to write everything in the ```DOMContentLoaded``` event.

#### Exercise 6

There are three```div``` elements on the page.
1. Write **one** event for all of them that will change the background color only in the clicked **div**.
   Use the keyword ```this```.

Remember to write everything in the ```DOMContentLoaded``` event.

**Hint**:
Use the following code to obtain a random color:
```JavaScript
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

#### Exercise 7

There is one **div** element on the page.
1. Write an event for it that will display the position of the mouse cursor when it is above that element.
2. Show both global cursor position (the distance from the upper left corner of the window) and local position (the distance from the upper left corner of the element).

Remember to write everything in the ```DOMContentLoaded``` event.

#### Exercise 8

There are nested elements on the page with events written for each of them.
1. Use the ```stopPropagation``` and ```stopImmediatePropagation```methods in a way that:
   * Events for the first and second element are fired, but the event for the third one is NOT fired.
   * All events for the fourth element are fired along with the first event for the fifth element.
2. To simplify, each event causes color change in that element that it was called on.

#### Exercise 9

There are two elements on the page that show the size of the window.
1. Write an event for the ```window``` that will make the elements show correct values, even after the window is rescaled.
