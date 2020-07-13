$(document).ready(function () {

    // Exercise 1 - 1

    var btn = $('.task_1').find('button');

    //Exercise 1 - 2

    btn.on('click', function (event) {
        var newDiv = $('<div class="panel">');
        newDiv.text('This is a new div').attr('style', 'visibility:hidden');
        console.log(newDiv);
        $(this).parent().append(newDiv)
        .on('mouseenter', function (event) {
            $(this).find('div').attr('style','visibility: visible');
        });
    });

    // Exercise 2

    var people = $('.people').first();

    var addUser = people.find('#addUser');

    var age = people.find('#age');

    var addToList = function () {
        var newLi = $('<li data-age="">');
        newLi.data('age',age.val()).text(addUser.val());
        $('.main').first().append(newLi);
    }
    var btn = $('[type="submit"]');
    btn.on('click',addToList);

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

    var addBtn = function(){
        $('.main').find('li').each(function () {
            var newBtn = $('<input type="submit" value="Delete">');
            $(this).append(newBtn);
            newBtn.on('click', function (event) {
                $(this).parent().remove();
            });
        });
    }
    btn.on('click', function (event) {
        addBtn();

    });

    // Exercise 3 additional

    var sortAsc = function () {
        var list = $('.main');
        var listItems = list.children('li').get();

        listItems.sort(function (a,b) {
            return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
        })
        $.each(listItems,function (inx,itm) {list.append(itm);
        });
    }
    btn.on('click', sortAsc);
});