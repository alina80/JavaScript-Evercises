document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var team1 = document.querySelector('input#team1');
    var team2 = document.querySelector('input#team2');
    var score1 = document.querySelector('input#points1');
    var score2 = document.querySelector('input#points2');

    function validateForm() {
        if (team1.value.trim().length < 3){
            alert('Enter a valid team');
            team1.focus();
            return false;
        }
        if (team2.value.trim().length < 3 || team1.value === team2.value){
            alert('Enter a valid team');
            team2.focus();
            return false;
        }
        if (Number(score1.value) < 0){
            alert('Enter a valid score');
            score1.focus();
            return false;
        }
        if (Number(score2.value) < 0){
            alert('Enter a valid score');
            score2.focus();
            return false;
        }
        return true;
    }

    document.querySelector('button').addEventListener('click',function (event) {

        var result = validateForm();
        if (!result){
            event.preventDefault();
        }else {
            var row = document.createElement('tr');
            var col1 = document.createElement('td');
            col1.innerText = team1.value;
            row.appendChild(col1);
            var col2 = document.createElement('td');
            col2.innerText = team2.value;
            row.appendChild(col2);
            var col3 = document.createElement('td');
            col3.innerText = score1.value + ' - ' + score2.value;
            row.appendChild(col3);
            document.querySelector('table').appendChild(row);
            event.preventDefault();
        }

    })


})