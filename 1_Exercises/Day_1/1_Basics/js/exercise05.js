//Place comments directly below the line in which you have found an error

var i = 1;  //am schimbat i = 0
while (i < 100) {    //am schimbat true < 100
    console.log('Current value of variable i is: ' + i);
    i = i * 2;
}

var year = 2016;
if(year % 4 === 0) {
    console.log('Leap year');
}
    else{   //am pus acoladele lipsa
    console.log('Not a leap year');
}


console.log('Errors fixed, so I will see this text in the console when I run the script' + ' HURAAAY!!!');
