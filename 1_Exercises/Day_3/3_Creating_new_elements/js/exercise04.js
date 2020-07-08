document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#remove').addEventListener('click', function (event) {
        var list = document.querySelector('.list');
        var children = list.children;
        for (var i = 0; i < children.length; i ++){
            list.removeChild(children[i]);
            i = i - 1;
        }
    });
});