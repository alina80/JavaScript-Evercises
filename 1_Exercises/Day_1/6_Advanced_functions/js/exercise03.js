/**
 * Higher order functions.
 * Study all the lines of code one by one. All of them!
 * Try to write a comment for each line.
 */

//Your comment...function sortArray is declared
function sortArray() {

    //Your comment...array points is declared
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Your comment...array points is sorted ascending
    points.sort(function(a, b) {
        //Your comment...
        return a-b;
    });

    //Your comment...function returns the array sorted
    return points;
}

//Your comment...function sortArray is called
sortArray();  //console.log(sortArray()) to display points
