// exercise 1

String.prototype.upperLower = function () {
    var tmp = '';
    for (var i = 0; i < this.length; i++){
        if (i % 2 == 0){
            tmp = tmp + this[i].toUpperCase();
        }else {
            tmp = tmp + this[i].toLowerCase();
        }
    }
    return tmp;
}

var a = 'abcdefgh';
console.log(a.upperLower());

// exercise 2
var Car = function (make,color) {
    this.make = make;
    this.color = color;
    this.noKms = 0;

    this.printCarInfo = function () {
        console.log(this.make);
        console.log(this.color);
        console.log(this.noKms);
    }
}

Car.prototype.drive = function (km) {
    this.noKms += km;
}

var bmw = new Car('BMW','red');
var vw = new Car('VW','blue');

bmw.drive(10);
vw.drive(30);
console.log(bmw);
console.log(vw);

bmw.printCarInfo();
vw.printCarInfo();

// exercise 3
Car.prototype.inspectionDates = this.inspectionDates;
bmw.inspectionDates = ['2020-03-01','2019-03-02','2018-02-01'];

Car.prototype.addInspectionDate = function (inspectDate) {
   this.inspectionDates = this.inspectionDates.concat(inspectDate);
   //this.inspectionDates.push(inspectDate);
}

bmw.addInspectionDate('25-06-2020');
bmw.printCarInfo();
console.log(bmw.inspectionDates);

