//ARRAYS, LOOPS AND FUNCTIONS

//Arrays- Create an array example
var myFavTvShows = ["The man who fell to earth", "Star-trek-Discovery", "Mad Men", "Game of Thrones"];
//console.log(myFavTvShows);
//Arrays - Demonstrate index of an element within the array
           //        0       1      2
    var chores = ['sweep', 'mop', 'wash'];
 //Array - Demonstrate the length of an array
            //console.log(myFavTvShows.length);
           // console.log(chores.length);   
//Array - Push a new element into the array
        myFavTvShows.push('Dr WHO');
       // console.log(myFavTvShows);
//Array - Shift an element (first element) from an array
       // console.log(chores, 'before shift');
        //chores.shift();
        //console.log(chores, 'after shift');
//Array - Unshift an element ie add to the array, will add to the first index position
        chores.unshift('bath');
       // console.log(chores, 'after unshift');
//Array - Pop the last element of an array
        //console.log(chores.pop());
        //chores.pop();
        //console.log(chores);
        
//Array - Retrieve a value using the index of an array
        //console.log(chores[2]);
//Array - Update or reassign the value of an element within the array
        chores[2] = 'brush';
       // console.log(chores);

//Loops 
    //for loops
    //Create a for loop which runs 10 times starting from 0  printing out the iterator and a message of what iteration it is.
    for (let i = 0; i < 10; i++) {
        console.log(`The current iteration is ${i}`);
    }