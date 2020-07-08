document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#addBtn').addEventListener('click', function (event) {
        event.preventDefault();
        var orderId = document.querySelector('#orderId').value;
        var item = document.querySelector('#item').value;
        var qty = document.querySelector('#quantity').value;

        var tr = document.createElement('tr');
        var arr = [orderId,item,qty];

        for (var i = 0; i < arr.length; i ++){
            var td = document.createElement('td');
            td.innerText = arr[i];
            tr.appendChild(td);
        }
        document.querySelector('#orders').appendChild(tr);
    });
});