/**
 * Nesting functions.
 * Study all the lines of code one by one. All of them!
 * Try to write a comment for each line.
 */


//Your comment...
function one() {

    //Your comment...variable1 is declared inside function one
    var variable1 = 1;

    //Your comment...
    function two() {

        //Your comment...function two() can see variable1
        console.log(variable1);

        //Your comment...variable2 is declared inside function two; function two has access to variable2 but function one() doesn't
        var variable2 = 3;
    }

    //Your comment...function two can print variable1 and variable2
    two();

    //Your comment...variable2 is known only inside function two, here is unknown
    console.log(variable2)
}

//Your comment...function one doesn't work because is trying to access variable2 on line 28, which is known only inside function two
one()
