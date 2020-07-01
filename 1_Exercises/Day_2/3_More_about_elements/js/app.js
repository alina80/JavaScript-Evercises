document.addEventListener("DOMContentLoaded", function() {
    /*
    Write your code for the exercises below.
     */

    // Exercise 1 - 1

    var ex1Lis1 = document.querySelectorAll('.ex1 li:not([data-direction])');
    ;
    for (var i = 0; i <ex1Lis1.length; i++){
        ex1Lis1[i].dataset.direction = 'up';
    }
    console.log(ex1Lis1);

    // Exercise 1 - 2

    var ex1Lis2 = document.querySelectorAll('.ex1 li');
    for (var i = 0; i < ex1Lis2.length; i ++){
        if (i % 2 != 0){
            ex1Lis2[i].style.backgroundColor = 'green';
        }

    }
    console.log(ex1Lis2);

    // Exercise 1 - 3

    ex1Lis2[4].classList.add('big');

    // Exercise 1 - 4

    for (var i = 2; i < ex1Lis2.length; i = i + 3){
        ex1Lis2[i].style.textDecoration = 'underline';
    }

    // Exercise 2 - 1

    var ex2Select = document.querySelector('.ex2 select');
    console.log(ex2Select);

    // Exercise 2 -2

    var optionElements = ex2Select.getElementsByTagName('option');
    for (var i = 0; i < optionElements.length; i++){
        optionElements[i].innerText = optionElements[i].getAttribute('value');
    }

    // Exercise 2 - 3

    for (var i = 0; i < optionElements.length; i ++){
        optionElements[i].dataset.year = parseInt(optionElements[i].getAttribute('value')) + 20;
    }

    // Exercise 3 - 1

    var ex3 = document.querySelector('.ex3');
    console.log(ex3);
    var chrome = ex3.querySelector('.chrome');
    chrome.style.backgroundImage = 'url("./assets/img/chrome.png")';


    var edge = ex3.querySelector('.edge');
    edge.style.backgroundImage = 'url("./assets/img/edge.png")';

    var firefox = ex3.querySelector('.firefox');
    firefox.style.backgroundImage = 'url("./assets/img/firefox.png")';

    // Exercise 3 - 2

    var links = document.querySelectorAll('div.ex3 div a')
    links[0].innerText = 'Chrome';

    links[1].setAttribute('href','https://www.microsoft.com/en-us/edge');
    links[2].setAttribute('href','https://www.mozilla.org/en-US/firefox/');

    links[2].innerText = 'Firefox';

    // Exercise 3 - 3

    chrome.style.width = '100px';

    // Exercise 4

    var ex4 = document.querySelector('.ex4');

    // Exercise 4 - 1

    var spans = ex4.querySelectorAll('li span');
    console.log(spans);

    // Exercise 4 - 2

    spans[0].innerHTML = 'Alina Matei';
    spans[1].innerHTML = 'green';
    spans[2].innerHTML = 'sushi';

    // Exercise 5 - 1

    var ex5 = document.querySelector('.ex5');
    var ex5Ul = ex5.querySelector('ul');
    ex5Ul.classList.add('menu');
    console.log(ex5Ul);

    // Exercise 5 - 2

    var ex5Lis = ex5.querySelectorAll('.menu li');
    for (var i = 0; i < ex5Lis.length; i ++){
        ex5Lis[i].classList.add('menuElement');
    }
    console.log(ex5Lis);

    // Exercise 5 - 3

    for (var i = 0; i < ex5Lis.length; i ++){
        ex5Lis[i].classList.remove('error');
    }

    // Exercise 6 - 1

    var ex6Lis = document.querySelectorAll('.ex6 li');
    console.log(ex6Lis);
    for (var i = 0; i < ex6Lis.length; i ++){
        ex6Lis[i].dataset.id = i + 1;
    }

    // Exercise 6 - 2

    for (var i = 0; i < ex6Lis.length; i ++){
        ex6Lis[i].setAttribute('data-id',i + 1);
    }




});
