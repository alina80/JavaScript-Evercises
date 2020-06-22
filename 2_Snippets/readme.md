<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - Snippets
> Short pieces of code that solve various problems, illustrate dependencies, or show how to use some more complicated functions.

#### 1. Creating objects based on the constructor
```JavaScript
function Animal(type) {
    this.type = type;
}

Animal.prototype.sayVoice = function(voice) {
    console.log(voice);
}

var lion = new Animal('lion');
lion.sayVoice("roar");

var pigeon = new Animal('owl');
pigeon.sayVoice("hoot hoot");
```

#### 2. Creating objects with Object.create()

```JavaScript
var Animal = {
    type: "",
    sayVoice: function(voice) {
        console.log(voice);
    }
}

var lion = Object.create(Animal);
lion.type = "lion";
lion.sayVoice("roar");


var pigeon = Object.create(Animal);
pigeon.type = "owl";
pigeon.sayVoice("hoot hoot");
```

#### 3. setInterval & clearInterval

```JavaScript
var id = setInterval(function() {
    console.log('I am called every 2 seconds');
}, 2000 );

clearInterval(id);
```

#### 4. setTimeout & clearSetTimeout
> Execute code after a given period of time has passed

```JavaScript
var id = setTimeout(function() {
    setOpacity(1);
}, 1000);

clearSetTimeout(id);
```

#### 5 Different types of events

* click
  ```JavaScript
  var button = document.getElementById('send');
  button.addEventListener('click', function(){
      console.log('hurray, I was clicked');
  });
  ```

* keyup/keydown/keypress
  ```JavaScript
  var inputField = document.getElementById('name');
  inputField.addEventListener('keyup', function(){
      console.log('hurray, text was entered');
  });
  ```
  * `keyup` - triggered when you release the key;
  * `keydown` - triggered when the key is pressed;
  * `keypress` - triggered when the key is pressed, but it returns entered character hidden under the key, not the number of the key as the previous ones. Works with special characters.

See the difference - http://jsfiddle.net/user2314737/543zksjc/3/show/


* mouseenter/mouseleave/mousemove/mouseover
  ```JavaScript
  var myButton = document.getElementById('myButton');
  myButton.addEventListener('mouseenter', function(){
      console.log('hurray, mouse over the element');
  });
  ```
  * `mouseenter` - triggered once when you move the cursor over an element, but it does not react to children;
  * `mouseover` - triggered once when you move the cursor to place it over an element or its children;
  * `mouseleave` - triggered when you move the cursor away from an element;
  * `mousemove` - triggered when you move the cursor within the element and its children.

See the difference - https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseenter_mouseover

#### 6. Downloading different values from elements of a form
* input
  ```JavaScript
  var inputField = document.getElementById('card');
  inputField.value;
  ```

* checkbox
  ```JavaScript
  var checkboxField = document.getElementById('condition');
  checkboxField.checked;
  ```

* radiobutton
  ```JavaScript
  var radioBtn = document.getElementById('radio');
  radioBtn.checked;
  ```
* textarea
  ```JavaScript
  var msgField= document.getElementById('message');
  msgField.value;
  ```
* select & option
  * Pobranie  
  ```JavaScript
  var selectField = document.getElementById('infos');
  selectField.options[selectField.selectedIndex].value;
  ```
  * Ustawienie  
  ```JavaScript
  var selectField = document.getElementById('infos');
  selectField.options[1].selected = true;
  ```

#### 7. Can we mix JavaScript and jQuery in one file?

Yes, it is possible, see the example of such a solution below.
In addition, below are examples of various solutions that use both JavaScript and jQuery.

```javascript
$(function () {
    var exJS = document.querySelector('#example');//JavaScript element
    var exJQ = $('#example');//jQuery element

    exJS.innerHTML;//JavaScript property

    exJQ.html();//jQuery method that does exactly the same
    exJQ.prop('innerHTML');//another jQuery solution
    //------------------------
    exJS.id;//JavaScript property

    exJQ.attr('id');//jQuery method that does exactly the same
    exJQ.prop('id');//another jQuery solution
    //------------------------

    exJQ.data('year', 2012);//this will work. It will not add an attribute in the HTML code, but will assign it to the object.
    exJQ.attr('data-year', 2012);//OK

    //------------------------
    exJS.dataset.year;//JavaScript property

    exJQ.data('year');//jQuery method that does exactly the same
    exJQ.prop('dataset').year;//another jQuery solution
    exJQ.attr('data-year');//yet another jQuery solution
    //------------------------
    exJS.setAttribute('class','foo');//this solution will OVERWRITE current attribute using JavaScript
    exJS.classList.add('foo');//this solution will add class to existing ones using JavaScript

    exJQ.addClass('foo');//adding class with the use of jQuery
    exJQ.attr('class', exJQ.attr('class') + ' foo');//another jQuery solution


    //------------------------
    this;//JS object
    $(this);//JQ object

    this.addClass('boo');//DON'T DO JQ METHOD WITH PURE JS - we cannot mix JS and JQ
    this.classList.add('boo');//OK

    $(this).addClass('boo');//OK
    $(this).classList.add('boo');//DON'T DO JQ METHOD WITH PURE JS - we cannot mix JS and JQ

    //------------------------
    //how to turn a JS object into JQ
    var el = document.querySelector('#form');//JS object
    $(el);//we create JQ object by surrounding it with $()
    $(el).addClass('someClass');//we use jQuery method
});
````

#### 8. What steps (in JavaScript) do we need to remember when searching for elements in the DOM and modifying them?

1. We check if the DOM tree has been loaded
2. We check whether or not we need to use the CSS selector to find an element; the method to be used depends on it
   `query...()` - CSS selector, `getEleme...()` - name
3. We check whether the found element is an array or a single element
4. We iterate through the array or work on the single element.

```javascript
var firstLi = document.querySelector('ul#menu > li');//single element
//we can work on it
firstLi.classList.add('anyClass');

var buttons = document.querySelectorAll(".btn");
buttons.classList.add('anyClass');//!!!YOU CANNOT DO THIS - THIS IS AN ARRAY!!!
//we iterate through the array
for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('anyClass');
}
```

#### 9. How do we extract and set properties of elements?

The rule can be described by the example below:  

```javascript
//setting property
element.property = value;
//extracting property
var variable = element.property;
```

Code example:  
```javascript
var dataCourse = firstLi.dataset.course;//data-course - extracting
var dataCourse2 = firstLi.getAttribute('data-course');//the same - done another way

firstLi.dataset.price = '19.99';//data-price - setting
firstLi.setAttribute('data-price', '19.99');//the same - done another way

var id1 = firstLi.id;//extracting id
var id2 = firstLi.getAttribute('id');//the same - done another way

firstLi.id = 'newId';//setting id
firstLi.setAttribute('id', newId);//setting id

var class1 = firstLi.className;//string with classes
var class2 = firstLi.getAttribute('class');//the same - done another way
```

Remember that not all properties can be set with the use of `setAttribute()` - only those visible in the `html`.
