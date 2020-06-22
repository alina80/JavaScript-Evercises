<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - homework
> Write the code in appropriate files according to exercise descriptions.

**VERY IMPORTANT - Your homework is checked using an automated system. In order for the answers to be considered correct, the pages MUST display the same messages as in the exercise description, and function and method names MUST be exactly the same as given in the exercises.**

### Day 2 - DOM
> Do exercises 1 in the searchDom.js file

### Exercise 1

The HTML file for this exercise is **searchDom.html**, and the JS file is **searchDom.js**.

> Do not use the DOMContentLoaded event. The script is loaded into the html file at the end of body.

> Create an appropriate function for each point and name it according to the exercise description.

**1. Getting information from the data attribute:**
- find an element with a ```#menu``` **id**,
- create a function named```getDataInfo(element)``` and pass it the element you found as a parameter,
- create a new array within the function and fill it with values extracted from the data-info attribute of each **li** element, Note that **li** elements are the children of the element with ```#menu``` id.
- return the new array.

**2. Searching for element by id:**
- find an element with a ```main-contener``` **id**,
- create a ```getElementClass(element)``` function and pass it the found element as a parameter,
- return an array containing class names of this element.

**3. Searching for element by class:**
- find an element with a ```pink-color``` **class**,
- create a ```getElementText(element)``` function and pass it the found element as a parameter,
- return the text contained in this element.

**4. Searching for element by class:**
- find elements with an ```images``` **class**,
- create a ```getElementAlt(element)``` function and pass it found elements as a parameter,
- create an array within the function and fill it with values extracted from the alt property of each image. Extract these attributes from the elements passed as parameters.

**5. Searching for element by class:**
- find elements with a ```my-link``` **class**,
- create a ```getElementHref(element)``` function and pass it found elements as a parameter,
- create an array within the function and fill it with values extracted from the href property of each link. Extract these attributes from the elements passed as parameters.
