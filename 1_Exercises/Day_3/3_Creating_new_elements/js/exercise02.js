document.addEventListener('DOMContentLoaded', function () {
    var count = 0;
    document.querySelector('.button').addEventListener('click', function (event) {
        count = count + 1;
        var li = document.createElement('li');
        li.innerText = 'Element ' + count + ' - at the time of adding there were ' + (count - 1) + ' elements';
        document.querySelector('.menu').appendChild(li);
    });
});