document.addEventListener('DOMContentLoaded', function () {

    // first point

    var one = document.querySelector('.first').firstElementChild.children[2];
    console.log(one);

    // second point

    var second = document.querySelector('#second').parentElement.children[3];
    console.log(second);

    // third point

    var thirdChildren = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild.firstElementChild.children;
    var middleNr = Math.round(thirdChildren.length / 2);console.log(middleNr);
    var third = thirdChildren[middleNr - 1];
    console.log(third);

    // fourth point

    var forth = document.querySelector('.fourth').parentElement.querySelector('article').querySelectorAll('p')[1];
    console.log(forth);
});