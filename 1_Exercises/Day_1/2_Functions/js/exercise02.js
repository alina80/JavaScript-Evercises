function calculateCircle(radius) {
    var circleCircumference = 2 * 3.14 * radius;
    var circleArea = 3.14 * Math.pow(radius,2);
    console.log('Circle Circumference: ' + circleCircumference,'Circle Area: ' + circleArea);
}
calculateCircle(3);