$(document).ready(function () {

    var people = $('.people').first();

    // Exercise 1 - 1

    var addUser = people.find('#addUser');

    // Exercise 1 - 2

    var age = people.find('#age');

    // Exercise 1 - 3

    var addToList = function () {
        var newLi = $('<li data-age="">');
        newLi.data('age',age.val()).text(addUser.val());
        $('.main').first().append(newLi);
    }
    var btn = $('[type="submit"]');
    btn.on('click',addToList);

    // Exercise 1 - 4

    var addColor = function () {
        $('.main').first().find('li').each(function () {
            var age = $(this).data('age');
            if (age > 0 && age < 16){
                $(this).css('color','green');
            }else if (age > 15 && age < 41){
                $(this).css('color','blue');
            }else {
                $(this).css('color','brown');
            }
        });
    }
    btn.on('click',addColor);

    // Exercise 2 - 1

    var elemWhere = $('.where-i-am').first();
    console.log(elemWhere);

    // Exercise 2 - 2

    var elemDiv = elemWhere.find('div');
    console.log(elemDiv);

    // Exercise 2 - 3

    elemDiv.on('click', function (e) {

        var newSpan = ('<span style="color: green">I am here</span>');
        $(this).before(newSpan);
        $(this).after(newSpan);
        $(this).append(newSpan);
        $(this).prepend(newSpan);

    });
});