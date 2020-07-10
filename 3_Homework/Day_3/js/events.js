document.addEventListener('DOMContentLoaded', function () {
    var articles = document.querySelectorAll('article');

    articles[0].children[1].addEventListener('click', function (event) {
        this.nextElementSibling.classList.toggle('content');
    });
    articles[1].children[1].addEventListener('mouseover', function (event) {
        this.nextElementSibling.classList.remove('content');
    });
    articles[1].children[1].addEventListener('mouseout', function (event) {
        this.nextElementSibling.classList.add('content');
    });


})
