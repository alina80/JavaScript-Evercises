
document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Write your code for the exercises below
     */

    // Exercise 1

    console.log('Initial id = ' + homeElement.id,';', 'Initial class name = ' + homeElement.className);
    var id = homeElement.id;
    var className = homeElement.className;
    homeElement.id = className;
    homeElement.className = id;
    console.log('Final id = ' + homeElement.id,';', 'Final class name = ' + homeElement.className)

    // Exercise 2

    console.log(homeElement, typeof homeElement);

    for (var i = 0; i < childElements.length; i++){
        console.log(childElements[i], typeof childElements[i]);
    }

    console.log(banner, typeof banner);

    for (var i = 0; i < blocks.length; i++){
        console.log(blocks[i], typeof blocks[i]);
    }

    for (var i = 0; i < links.length; i++){
        console.log(links[i], typeof links[i]);
    }

    // Exercise 3

    console.log('Inner HTML of blocks: ');
    for (var i = 0; i < blocks.length; i++){
        console.log(blocks[i].innerHTML);
    }
    console.log('Outer HTML of blocks: ');
    for (var i = 0; i < blocks.length; i++){
        console.log(blocks[i].outerHTML);
    }

    for (var i = 0; i < blocks.length; i++){
        blocks[i].innerHTML = 'New value of a div with blocks class';
        console.log(blocks[i].innerHTML);
    }

    // Exercise 4

    console.log(homeElement.id);

    // Exercise 5

    console.log('Tags of childElements: ');
    for (var i = 0; i < childElements.length; i++){
        console.log(childElements[i].tagName);
    }

    // Exercise 6

    console.log('Values of dataset : ');
    for (var i = 0; i < links.length; i++){
        console.log(links[i].dataset);
    }

    // Exercise 7

    console.log('Value of classList of banner: ' + banner.classList, ';', 'Type: ', typeof banner.classList);
    console.log('Value of className of banner: ' + banner.classList,';','Type: ', typeof banner.className);
});
