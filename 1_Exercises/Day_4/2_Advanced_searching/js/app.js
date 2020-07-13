$(document).ready(function (e) {

    // Exercise 1 - 1

    var ex1 = $('span[data-task="_task1"]');
    console.log($(ex1));

    // Exercise 1 - 2

    var ex2 = $(ex1).siblings('p').last();
    console.log($(ex2));

    // Exercise 1 - 3

    var ex3 = $(ex2).closest('section');
    console.log(ex3);

    // Exercise 1 - 4

    var ex4 = $(ex3).next();
    console.log($(ex4));

    // Exercise 1 - 5

    var ex5 = $('.container');
    console.log($(ex5));

    $(ex5).css('background-color', 'green');
    $(ex5).addClass('answerTask1');

    // Exercise 1 - 6

    $(ex5).slideUp(4000);

    // Exercise 2 - 1

    var point1 = $('span[data-task="_task2"]');
    console.log(point1);

    // Exercise 2 - 2

    var point2 = $(point1).closest('section').prev('.shopping');
    console.log(point2);

    // Exercise 2 - 3

    var point3 = $(point2).children('div').eq(1);
    console.log(point3);

    // Exercise 2 - 4

    var point4 = $(point3).children().find('button');
    console.log(point4);

    // Exercise 2 - 5

    var point5 = $(point4).closest('.cart-item');
    console.log(point5);
    $(point5).addClass('cart-updated');





})