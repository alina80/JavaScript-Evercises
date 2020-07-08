document.addEventListener('DOMContentLoaded', function (e) {
    var btns = document.querySelectorAll('button');
    console.log(btns);
    var spans = document.querySelectorAll('span.counter');
    console.log(spans);

    btns.forEach(function (elem) {
        elem.addEventListener('click', function (event) {

            //varianta 1

            var counterId = this.id.charAt(this.id.length - 1) - 1;
            spans[counterId].innerText = parseInt(spans[counterId].innerText) + 1;

            //varianta 2

            //this.nextElementSibling.querySelector('span').innerText = parseInt(this.nextElementSibling.querySelector('span').innerText) + 1;
        });
    });
});