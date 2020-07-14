$(document).ready(function () {
    var spinnerValue = $('#spinnerValue');
    var btns = $('.input-group').find('button');
    console.log(btns);
    btns.eq(0).on('click', function (event) {
        if (spinnerValue.val() <= $('#max').val() - $('#step').val()) {
            spinnerValue.attr('value', parseInt(spinnerValue.attr('value')) + parseInt($('#step').val()));
            $('.progressInner').attr('style','width:' + ((spinnerValue.val() / $('#max').val()) * 100) + '%');
        }
    });
    btns.eq(1).on('click', function (event) {
        if (spinnerValue.val() >= $('#min').val() + $('#step').val()) {
            spinnerValue.attr('value', parseInt(spinnerValue.attr('value')) - parseInt($('#step').val()));
            $('.progressInner').attr('style','width:' + ((spinnerValue.val() / $('#max').val()) * 100) + '%');
        }
    });

    btns.eq(0).on('mousedown',function (event) {
        var interval = setInterval(function () {
            if (spinnerValue.val() <= $('#max').val() - $('#step').val()) {
                spinnerValue.attr('value', parseInt(spinnerValue.attr('value')) + parseInt($('#step').val()));
                $('.progressInner').attr('style','width:' + ((spinnerValue.val() / $('#max').val()) * 100) + '%');
            }

        },500);
        $(this).on('mouseup', function (event) {
            clearInterval(interval);

        });

    });

    btns.eq(1).on('mousedown',function (event) {
        var interval = setInterval(function () {
            if (spinnerValue.val() >= $('#min').val() + $('#step').val()) {
                spinnerValue.attr('value', parseInt(spinnerValue.attr('value')) - parseInt($('#step').val()));
                $('.progressInner').attr('style','width:' + ((spinnerValue.val() / $('#max').val()) * 100) + '%');
            }

        },500);
        $(this).on('mouseup', function (event) {
            clearInterval(interval);

        });

    });

    var saveBtn = $('.saveSettings');
    saveBtn.on('click', function (event) {
        var minimal = $('#min').val();
        spinnerValue.attr('value', minimal);
        var maximal = $('#max').val();
        var step = $('#step').val()

    });

})