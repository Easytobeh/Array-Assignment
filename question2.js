// Write a simple JavaScript program to join all elements of the following array into a string.Go to the editor
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function displayColor() {
    
    let myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.join(','));
    console.log(myColor.join(','));
    console.log(myColor.join('+'));
}
displayColor();