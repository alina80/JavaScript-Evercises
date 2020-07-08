document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    console.log(form.elements);
    var sum = 0;
    for (var i = 0; i < form.elements.length; i ++){
        if ( form.elements[i].checked){
            sum = sum + form.elements[i].dataset.price;
            document.querySelector('#price').innerText = sum;
            console.log(sum);

        }
    }



});