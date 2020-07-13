$(document).ready(function () {
    var textField = $('textarea');

    var counter = 0;
    var divCounter = $('#counter');
    textField.on('keyup', function (event) {
        counter = textField.val().length;

        divCounter.text(counter + "/100");
        if (counter <= 33){
            textField.attr('style','color:green');
        }
        if (counter > 33 && counter <= 66){
            textField.attr('style','color:yellow');
        }
        if (counter > 66 && counter <= 100){
            textField.attr('style','color:red');
        }
        if (counter === 100){
            textField.attr('maxlength', counter);
        }
    });
});