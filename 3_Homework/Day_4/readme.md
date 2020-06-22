<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - homework
> Write the code in appropriate files according to exercise descriptions.

**VERY IMPORTANT - Your homework is checked using an automated system. In order for the answers to be considered correct, the pages MUST display the same messages as in the exercise description, and function and method names MUST be exactly the same as given in the exercises.**

## Day 4 - JQuery

### Exercise 1

> The HTML file for this exercise is **exercise1.html**, JavaScript file is **exercise1.js**, and CSS file is **exercise1.css**.

The goal of the task is to create a spinner, and a progress bar that will change width depending on the input value.

1. Input with `spinnerValue` id will work as a spinner, meaning that clicking an appropriate button will increase or decrease its value.
   The element has `readonly` attribute so that values cannot be entered directly in it.
2. Add functionality that will change the value when one of the buttons is clicked.  
3. Next, add the possibility of setting:  
   * minimal value in the input
   * maximal value in the input
   * amount change associated with a single button click (e.g. `4` or `0.05`)
   The above settings should affect the input immediately after they are saved.
4. Next, you should connect the `input` with progress bar. The progress bar should change width depending on input value and its maximal possible value (`100` by default).  
   If the maximal possible input value is set to `200` and current number is `40`, the bar should be visible in `20%`.
   Analyze the HTML and CSS code and consider which element should have its width changed.
5. Additionally, if the spinner button is clicked and remains pressed, the value should increase continuously.

### Exercise 2 - additional

> The HTML file for this exercise is **exercise2.html**, and JavaScript file is **exercise2.js**.

In `exercise2.html`, write another version of exercise 1 in such a way that it uses a jQuery UI library and its two functionalities.
You can modify the HTML, CSS, and JavaScript code as you wish.  

* [Spinner](https://jqueryui.com/spinner/)
* [ProgressBar](https://jqueryui.com/progressbar/)
