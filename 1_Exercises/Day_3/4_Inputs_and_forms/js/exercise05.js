document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    var email = document.querySelector('input#email');
    var name = document.querySelector('input#name');
    var surname = document.querySelector('input#surname');
    var pass1 = document.querySelector('input#pass1');
    var pass2 = document.querySelector('input#pass2');
    var agree = document.querySelector('input#agree');

    document.querySelector('button').addEventListener('click',function (event) {
        var result = validateForm();
        if (!result){
            event.preventDefault();
        }

    });
    function validateForm() {
        if (email.value.indexOf('@') === -1 || email.value.indexOf('@') < 1){
            alert('Enter a valid email');
            email.focus();
            return false;
        }
        if (name.value.trim().length < 6){
            alert('Name must have at least 6 characters');
            name.focus();
            return false;
        }
        if (surname.value.trim().length < 6){
            alert('Surname must have at least 6 characters');
            surname.focus();
            return false;
        }
        if (pass1.value.trim().length < 6){
            alert('Password must be longer then 6 characters');
            pass1.focus();
            return false;
        }
        if (pass1.value !== pass2.value){
            alert('Pass2 doesn\'t match pass1');
            pass2.focus();
            return false;
        }
        if (!agree.checked){
            alert('You must agree to the terms');
            agree.focus();
            return false;
        }
        return true;
    }
});
