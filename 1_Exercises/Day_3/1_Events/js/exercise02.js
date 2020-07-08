document.addEventListener('DOMContentLoaded',function (event) {
    var btns = document.querySelectorAll('#bubblingButtons button');
    for (var i = 0; i < btns.length; i ++){
        btns[i].addEventListener('click',function (event) {
            this.dataset.counter = parseInt(this.dataset.counter) + 1;
            console.log(this.dataset.counter);
        })
    }

    // second way:

    var div = document.querySelector('#bubblingButtons');
    div.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON'){
            event.target.dataset.counter = parseInt(event.target.dataset.counter) + 1;
        }
    })
});