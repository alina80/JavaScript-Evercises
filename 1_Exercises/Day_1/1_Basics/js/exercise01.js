function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    //write your answer below
    console.log(randomNumber);

    // punctul 1:
    if (randomNumber % 2 === 0){
        console.log('Nr is even');
    }else {
        console.log('Nr is odd')
    }
}

//this call should result in displaying the information from the exercise in the console
 mathInfo();

//punctul 2:
for (var i = 1; i < 10; i ++){
    if (10 % i === 0){
        console.log(i);
    }
}

//punctul 3:
function pow(n) {
    var exponent = n % 5;
    var result = Math.pow(n,exponent);
    console.log(result);
}

pow(8);