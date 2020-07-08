document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    divs.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    });
});