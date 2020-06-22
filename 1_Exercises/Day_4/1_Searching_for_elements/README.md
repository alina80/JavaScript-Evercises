<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  jQuery - Searching for elements

> Complete the exercises in appropriate files.

Complete the exercises in `app.js` unless the exercise description says otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.   

**Do not modify the HTML code unless the instructions say otherwise.**

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

#### Exercise 1 - done with the lecturer

Add jQuery library to your file.
In **app.js**, place code that will check if the DOM content was loaded.

#### Exercise 2 - done with the lecturer

Take a look at `index.html` and `style.css`.
1. Add ```borderClass``` class to each ```li``` element placed within the ```section class="main"``` element.
   Remember to do this in an appropriate function.
2. Find all elements with ```showMore``` **class**.  
   Change the font color of the **first** of those elements to red using ```css()``` function.

-------------------------------------------------------------------------------

#### Exercise 3

1. Give each **li** element (only those in the **section** with ```main``` **class**) two additional **classes**:
   * ```colorText```,
   * ```backgroundElement```.
   You will find them in **style.css** file under an appropriate comment.
   Together with the previous ```borderClass``` **class**, there will be three **classes** set for each **li** element.
2. Set the following functions for those elements as well:
   * ```fadeOut``` - a very slow fade-out,
   * ```fadeIn``` - a very slow fade-in.

Remember to do this in an appropriate function.

Have you noticed any redundancy in your code?

#### Exercise 4

Using jQuery, perform the following operations:
1. Find all **links** and set their color to red using ```css()``` function.
   If your code works, put it in a comment.
2. Modify the code in a way that only **links from the menu** have the red color.  
   If your code works, put it in a comment
3. Add ```redLinks``` **class** in **style.css** file (set red font color in it) and give the class to **a** elements in the menu using ```addClass``` (modify the code from points 1. and 2.).
4. Make the font of the first menu element bigger than the others.
   Create an appropriate **class** in `style.css` file for this purpose.

Remember to do this in an appropriate function.

#### Exercise 5

Check if **h1** has ```creepyHeader``` **class**.
1. If not, add it to this element.
2. If it has the said class, display a message in the console stating that the **header** already has this **class**.

Remember to do this in an appropriate function.
