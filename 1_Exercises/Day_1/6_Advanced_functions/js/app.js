
var timeoutId = setTimeout(function () {
    console.log('Egg boiled');
    clearTimeout(timeoutId);
    clearInterval(intervalId);
},30000);

var intervalId = setInterval(function () {
    console.log('Egg is boiling');
},5000);