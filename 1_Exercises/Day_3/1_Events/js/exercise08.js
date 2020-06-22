document.addEventListener("DOMContentLoaded", function () {
    var info = document.getElementById('info');

    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var element4 = document.getElementById("element4");
    var element5 = document.getElementById("element5");

    element1.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 1");
    });

    element2.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 2");
    });

    element3.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 3");
    });

    element4.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 4");
    });

    element5.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 5");
    });

    element5.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Second click in element 5");
    });
});

function makeColor(clicked) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    clicked.style.backgroundColor = randomColor;
}
