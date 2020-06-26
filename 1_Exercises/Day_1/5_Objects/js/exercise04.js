// exercise 4

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};
var r1 = new Robot('Mo');
r1.sayHi('Mihaela');
r1.isFunctional = false;
r1.sayHi('Alina');
r1.fixIt();

// exercise 5

var Rectangle = function (length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    var area = this.length * this.width;
    return area;
}
Rectangle.prototype.getPerimiter = function () {
    var perimiter = 2 * (this.length + this.width);
    return perimiter;
}
var rectang1 = new Rectangle(2,3);
console.log(rectang1.getArea(), rectang1.getPerimiter());

var rectang2 = new Rectangle(4,5);
console.log(rectang2.getArea(), rectang2.getPerimiter());

//  exercise 6

var Calculator = function () {
    this.history = [];
}

Calculator.prototype.add = function (num1,num2) {
    var result = num1 + num2;
    this.history.push("added " + num1 + ' to ' + num2 + ' got ' + result);
}

Calculator.prototype.multiply = function (num1,num2) {
    var result = num1 * num2;
    this.history.push("multiplied " + num1 + ' with ' + num2 + ' got ' + result);
}

Calculator.prototype.subtract = function (num1,num2) {
    var result = num2 - num1;
    this.history.push("subtracted " + num1 + ' from ' + num2 + ' got ' + result);
}

Calculator.prototype.divide = function (num1,num2) {
    var result = num1 - num2;
    this.history.push("divided " + num1 + ' by ' + num2 + ' got ' + result);
}

Calculator.prototype.printOperations = function () {
    this.history.forEach(function (elem) {
        console.log(elem);
    })
}

Calculator.prototype.clearOperations = function () {
    this.history = [];
}

var calc1 = new Calculator();
calc1.add(2,3);
calc1.multiply(2,3);
calc1.subtract(2,3);
calc1.divide(6,2);
console.log(calc1.history);
calc1.printOperations();

calc1.clearOperations();
console.log(calc1.history);
calc1.printOperations();