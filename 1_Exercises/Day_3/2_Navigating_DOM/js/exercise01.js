document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.listContainer').forEach(function (elem) {
        elem.addEventListener('mouseover', function (event) {
            var ul = this.firstElementChild;
            ul.firstElementChild.style.backgroundColor = 'red';
            ul.lastElementChild.style.backgroundColor = 'blue';
            for (var i = 1; i < ul.children.length - 1; i ++){
                ul.children[i].style.backgroundColor = 'green';
            }
        });
    });
});