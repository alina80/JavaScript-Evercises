document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var options = form.elements[0].querySelectorAll('option');

    var images = document.querySelectorAll('img');

    for (var i = 0; i < images.length; i ++){
        if (images[i].getAttribute('src').split('/')[1].split('.')[0] === 'apple'){
            images[i].setAttribute('name','macOS');
        }
        if (images[i].getAttribute('src').split('/')[1].split('.')[0] === 'windows'){
            images[i].setAttribute('name','Windows');
        }
        if (images[i].getAttribute('src').split('/')[1].split('.')[0] === 'ubuntu'){
            images[i].setAttribute('name','Ubuntu');
        }
        images[i].setAttribute('style','display:none');
    }

    form.elements[form.elements.length - 1].addEventListener('click', function (event) {
        event.preventDefault();
        for (var i = 0; i < options.length; i ++){
            if (options[i].selected){
                for (var  j = 0; j < images.length; j ++){
                    if (images[j].getAttribute('name') === options[i].innerText){
                        images[j].removeAttribute('style');
                    }else {
                        images[j].setAttribute('style','display:none');
                    }
                }
            }
        }


    })


});