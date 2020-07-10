document.addEventListener('DOMContentLoaded', function () {
    var checkInvoice = document.querySelector('#invoice');
    var invoiceData = document.querySelector('#invoiceData');

    invoiceData.setAttribute('style','display:none');
    checkInvoice.addEventListener('click', function (event) {
        if (this.checked){
            this.parentElement.parentElement.nextElementSibling.removeAttribute('style');
        }else {
            this.parentElement.parentElement.nextElementSibling.setAttribute('style','display:none');
        }
    });
});