document.addEventListener('DOMContentLoaded', function () {
    var spans = document.querySelectorAll('span');
    var div = document.querySelector('div');

    div.addEventListener('mousemove', function (event) {
        spans[0].innerText = event.screenX;
        spans[1].innerText = event.screenY;
        spans[2].innerText = event.clientX;
        spans[3].innerText = event.clientY;

    })
});