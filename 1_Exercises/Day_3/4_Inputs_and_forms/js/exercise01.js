document.addEventListener('DOMContentLoaded', function () {
    var cardNr = document.getElementById('card');
    cardNr.addEventListener('keyup', function (event) {
        var number = this.value;
        var type = '';
        var correct = false;
        if (number.charAt(0) === '4'){
            correct = 12 < number.length && number.length < 17;
            type = 'VISA';
        }else if (number.charAt(0) === '5'){
            correct = number.length === 16;
            type = 'MASTERCARD';
        }else if (number.charAt(0) === '3' && (number.charAt(1) === '4' || number.charAt(1) === '7')){
            correct = number.length === 15;
            type = 'AMERICAN EXPRESS';
        }

        document.getElementById('type').innerText = type;

        if (!correct){
            this.style.borderColor = 'red';
        }else {
            this.style.borderColor = 'green';
        }
    });

});