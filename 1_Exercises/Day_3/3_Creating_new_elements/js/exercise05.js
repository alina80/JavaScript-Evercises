document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelectorAll('.deleteBtn').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            var toDelete = this.parentElement.parentElement;
            toDelete.parentElement.removeChild(toDelete);
        });
    });
});