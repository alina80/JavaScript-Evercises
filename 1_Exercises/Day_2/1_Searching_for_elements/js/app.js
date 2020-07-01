document.addEventListener("DOMContentLoaded", function(){

    // Exercise 1
    var articleFirst = document.querySelector('article.first');
    var h1s = articleFirst.querySelectorAll('h1');
    var nrOfh = h1s.length;
    console.log('Nr of h elements is: ' + nrOfh);

    var offers = articleFirst.querySelectorAll('.offers');
    offers.forEach(function (elem) {
        console.log(elem);
    })

    var divs = articleFirst.getElementsByTagName('div');
    for (var i =0; i < divs.length; i++){
        console.log(divs[i]);
    }

    // Exercise 2

    var ex2 = document.querySelector('nav #exercise2');
    console.log(ex2);

    // Exercise 3 - 1

    var home1 = document.querySelector('#home');
    console.log(home1);

    var home2 = document.getElementById('home');
    console.log(home2);

    // Exercise 3 - 2

    var firstLiWithoutAttribute = document.querySelector('li:not([data-direction])');
    console.log(firstLiWithoutAttribute);

    // Exercise 3 - 3

    var firstBlock1 = document.getElementsByClassName('block')[0];
    var firstBlock2 = document.querySelector('.block');
    console.log(firstBlock1);
    console.log(firstBlock2);

    // Exercise 4 - 1

    var lis1 = document.querySelectorAll('nav li');
    console.log(lis1);

    // Exercise 4 - 2

    var ps = document.querySelectorAll('div p');
    console.log(ps);

    // Exercise 4 - 3

    var articleDivs = document.querySelectorAll('article div');
    console.log(articleDivs);

    // Additional exercise - 1

    var navLis = document.querySelectorAll('nav li');
    console.log(navLis);

    // Additional exercise - 2

    var navLisTop = document.querySelectorAll('nav li:not([data-direction="top"])');
    console.log(navLisTop);
    navLisTop.forEach(function (elem) {
        elem.setAttribute('data-direction','top');

    });
    var nav = document.getElementsByTagName('nav');
    console.log(nav);

});
