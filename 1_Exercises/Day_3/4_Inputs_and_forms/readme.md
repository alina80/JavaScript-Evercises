<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Inputs and Forms

> Complete the exercises in appropriate files.

Complete the exercises in `app.js` unless the exercise description says otherwise.
Remember to separate exercises with comments, and write legible, well-formatted code.   

**Do not modify the HTML code unless the instructions say otherwise.**

**IMPORTANT - do not change the file structure or filenames and use the prepared variables**

Each exercise has its own **HTML** file and should be completed in a separate JavaScript file (empty files are prepared in the appropriate directory).

#### Exercise 1 - done with the lecturer

Credit card validation.
In this exercise you will validate credit card numbers typed into the form on the page **in real time (after each digit is typed)**.
The type of credit card should appear only if it can be determined.
Validity of the card should be displayed after the right number of digits is entered.  

![Example](tasks_assets/credit_card.png)

#### How to recognize card type:
1. Visa numbers start with `4`.
2. Mastercard numbers start with `5`.
3. American Express numbers start with `3`.  
   The next digit must be either`4` or `7`.

#### Card validation rules:
1. Visa numbers are`13` to `16` digits long.
2. Mastercard numbers are exactly `16` digits long.
3. American Express numbers are exactly `15` digits long.

Card validation rules were simplified for the purpose of this exercise (you should not use them in your real projects).
If you want to know the real principles of credit card validation, you can read about it here:
https://en.wikipedia.org/wiki/Bank_card_number
https://en.wikipedia.org/wiki/Luhn_algorithm

-------------------------------------------------------------------------------

#### Exercise 2

On the page, there is an order form with a section for preparing an invoice.
1. Write JavaScript code that will make the section visible only when the checkbox labeled `Send me an invoice` is selected.

#### Exercise 3

The site has a form for ordering pizza. The form has a checkbox in which the user can choose toppings.
The price of each additive is stored in the ```data-price``` attribute.

1. Write appropriate events so that after selecting checkbox options the correct order amount was shown, and after sending the form an alert was displayed with the calculated amount.
2. Note the two special checkboxes:
   * `Clear` should deselect all options,
   * `All toppings` should select all options (except `Clear`).

#### Exercise 4

The site has a `select` and 3 images.
Each image is assigned to one of the choices in the `select` field.
1. Write JavaScript code in a way that only the selected image is visible.

#### Exercise 5

There is a form on the page that redirects to the following address: ```http://api.coderslab.pl/showpost.php```.
Validate the form so that it can be submitted only if the following conditions are met:

1. Email contains a `@` sign.
2. Name is longer than `5` characters.
3. Surname is longer than `5` characters.
4. Password and repeated password are **identical**.
5. Checkbox **must** be checked.

Additional condition for volunteers: the password must be at least `5` character long (and must contain at least one digit and one letter).

Note how the data are presented on the final page (how their names are correlated with the HTML code). Try to change the ```name``` attributes and see how the sent data change (for example, check what happens if two inputs have the same name).
Attention, this is an important place of cooperation of front-end programmers and back-end programmers!

#### Exercise 6

There is an array with results of local football championships on the page.
Below, you can see a form filled and submitted by coaches after each match.
1. Write JavaScript code that will validate the form after appropriate teams are selected. Check if:  
   * Two different teams are selected,
   * The number of scored goals is not a negative number.

If the form is valid, appropriate information about the score of the match should appear in the array.
