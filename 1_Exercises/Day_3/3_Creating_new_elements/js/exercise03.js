document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#remove').addEventListener('click', function (event) {
        var button = document.querySelector('#remove');
        document.querySelector('#remove').parentElement.removeChild(button);
    });
});