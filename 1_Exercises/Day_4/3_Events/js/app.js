$(document).ready(function () {

    // Exercise 1 - 1

    var btns = $('.hero-buttons').find('button');
    console.log(btns);

    var btn1 = btns.eq(0);
    var btn2 = btns.eq(1);
    var btn3 = btns.eq(2);

    // Exercise 1 - 2

    btn1.on('click', function (event) {
        console.log('I have been clicked');
    });

    // Exercise 1 - 3

    btn2.one('click', function (event) {
        console.log('I have been clicked, but I will not let anyone click me again');
    });

    // Exercise 1 -4

    btn3.on('click',function (event) {
        btns.off();
    });

    // Exercise 3

    var ex3 = $('.superhero-description');

    var hide = function (element) {

        var toHide = element.find('dd');
        toHide.addClass('hide');

        var titles = element.find('dt');

        titles.on('click', function (event) {
                $(this).next().toggle('hide');
        });
    }
    hide(ex3);

    /* method 2:

    var dts = $('.superhero-description').find('dt');
    dts.on('click', function(event){
        var dds = $(this).next();
        if(dds.is(':hidden')){
           dds.show();
        }else{
           dds.hide();
        }
    })
    */

    // Exercise 4

    var form = $('.login');
    var showHide = function (element) {
        var btn = element.find('.show-hide-btn');
        btn.on('click', function (event) {
            event.preventDefault();
            console.log('I am working');
            console.log($(this).prev('input.user-pass').attr('type'));
            if ($(this).prev('.user-pass').attr('type') === 'password'){
                $(this).prev('.user-pass').attr('type','text');
            }else
            if ($(this).prev('.user-pass').attr('type') === 'text'){
                $(this).prev('.user-pass').attr('type','password');
            }
        });
    }
    showHide(form);

    // Exercise 5

    var menuElements = $('.menu').find('a');
    menuElements.on('mouseover', function (event) {
        console.log('Hurray');
    });

    // Exercise 6

    var style = function (element) {
        var formElements = element.find('input');
        console.log(formElements);
        formElements.on('click mouseover', function (event) {
            $(this).attr('style','filter: drop-shadow(0 0 6px green)');

        });
        formElements.on('mouseleave', function (event) {
            $(this).attr('style','background-color:lightgrey');
        });
    }
    style(form);
});