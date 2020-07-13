$(document).ready(function () {

    // Exercise 1

    // Exercise 2

    var mainLis = $('.main').find('li');
    mainLis.addClass('borderClass');

    var showMoreElements = $('.showMore');
    showMoreElements.eq(0).css('color','red');

    // Exercise 3

    mainLis.addClass('colorText backgroundElement');
    mainLis.fadeOut('slow');
    mainLis.fadeIn('slow');

    // Exercise 4 - 1

    var links = $('a');
    //links.css('color','red');

    // Exercise 4 - 2

    var linksWithMenu = $('.menu').find('a');
    //linksWithMenu.css('color', 'red');

    // Exercise 4 - 3

    linksWithMenu.addClass('redLinks');

    // Exercise 4 - 4

    linksWithMenu.eq(0).addClass('bigger');

    // Evercise 5

    var check = function (elem, className) {
        if (elem.hasClass(className)){
            return true;
        }
        return false;

    }
    var h1 = $('h1');
    if (check(h1,'creepyHeader')){
        console.log('H1 already has creepyHeader class');
    }else {
        h1.addClass('creepyHeader');
        console.log('Class creepyHeader was added');
    }







});