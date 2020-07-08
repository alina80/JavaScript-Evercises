document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.button').forEach(function (elem) {
        elem.style.cursor = 'pointer';
        elem.addEventListener('click', function (event) {
            var next = this.nextElementSibling;
            if (next !== null){
                next.classList.toggle('hidden');
            }

        })

    })


})