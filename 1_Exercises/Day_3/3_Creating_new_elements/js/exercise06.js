document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.moveBtn');
    var list1 = document.querySelector('#list1');
    var list2 = document.querySelector('#list2');
    buttons.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            var parent = this.parentElement.parentElement;
            var destination = parent === list1 ? list2 : list1;
            destination.appendChild(this.parentElement);

        });
    });
});