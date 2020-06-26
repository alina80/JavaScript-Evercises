var years = [1980,1990, 2003, 1956];

years.sort(function(a, b) {
    return a - b;
});
console.log('Years sorted ascending ' + years);  // years array sorted ascending
var oldestPerson = 2020 - years.shift();
var youngestPerson = 2020 - years.pop();
console.log('Oldest person has ' + oldestPerson +' years');
console.log('Youngest person has ' + youngestPerson +' years');