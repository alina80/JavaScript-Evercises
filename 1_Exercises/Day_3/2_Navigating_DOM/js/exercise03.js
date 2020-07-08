document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.box').forEach(function (el) {
        el.addEventListener('click', function (event) {
            el.querySelectorAll('.button').forEach(function (btn) {
                btn.addEventListener('click',function () {
                    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                    var parinte = this.parentElement;
                    parinte.style.backgroundColor = randomColor;
                });
            });
        });
    });
});