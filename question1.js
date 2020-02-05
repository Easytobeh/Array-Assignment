
// We have the following arrays
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// o = ["th", "st", "nd", "rd"]

// Write a JavaScript program to display the colors in the following way:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."

function displayColorChoice(color){

    console.log("1st choice is " + color[0]);
    console.log("2nd choice is " + color[1]);
    console.log("3rd choice is " + color[3]);
}

displayColorChoice(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "])