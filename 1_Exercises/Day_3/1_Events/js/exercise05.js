document.addEventListener('DOMContentLoaded', function (e) {

    var btns = document.querySelectorAll('button');
    var span = document.querySelector('.counter');
    btns.forEach(function (elem) {
        elem.addEventListener('click', function (event) {

            span.innerText = parseInt(span.innerText) + 1;
        });


    });

});
