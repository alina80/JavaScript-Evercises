document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var toppings = document.querySelectorAll('input[data-price]');

    var sum = 0;
    form.elements[0].addEventListener('click', function (event) {
        if (this.checked){
            for (var i = 0; i < toppings.length; i++){
                toppings[i].checked = true;
            }
            for (var i = 0; i < toppings.length; i ++){
                if (toppings[i].checked){
                    sum = sum + Number(toppings[i].dataset.price);
                }else {
                    sum = sum - Number(toppings[i].dataset.price);
                }
                document.querySelector('#price').innerText = sum + ' USD';
            }
        }else {
            this.checked = false;
            for (var i = 0; i < toppings.length; i ++){
                toppings[i].checked = false;
            }
            sum = 0;
            document.querySelector('#price').innerText = sum + ' USD';
        }

    });

    form.elements[form.elements.length - 2].addEventListener('click', function (event) {
        if (this.checked){
            form.elements[0].checked = false;
            for (var i = 0; i < toppings.length; i++){
                toppings[i].checked = false;
                sum = 0;
                document.querySelector('#price').innerText = sum + ' USD';
            }
            this.checked = false;
        }
    });

    for (var i = 0; i < toppings.length; i ++){
        toppings[i].addEventListener('click', function (event) {
            if (this.checked){
                sum = sum + Number(this.dataset.price);
            }else {
                sum = sum - this.dataset.price;
            }
            document.querySelector('#price').innerText = sum + ' USD';
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var result = document.createElement('div');
        result.innerText = 'Total amount to pay: ' + sum;
        form.parentElement.appendChild(result);
    });
});