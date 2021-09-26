//use javascript to display partner images
var photos = []; //declare an empty array to store image element
var fileNames = [
  "bustour",
  "cabinrental",
  "campingadv",
  "collegetours",
  "rentalbike",
  "tourgroup",
]; //declare an array to store image file names
var imageList = []; //declare en empty array to store html list that contains an image
var image; //simple variable not an array
var openList = "<li class='partner'>"; //declare a variable to contain open list tag
var closeList = "</li>"; //declare a variable to contain close list tag

//create a loop to create 6 images starting with index of 0
for (var i = 0; i < 6; i++) {
  fileNames.push("cat" + (i + 1)); //create image file name and store in the array
  photos.push("<img src = 'partners/" + "partner-" + fileNames[i] + ".png'>"); //Assemble file name into image element and store in an array
  image = openList + photos[i] + closeList; //Assemble image element from array with list element and store in a variable
  imageList.push(image); //Stote(push) the assembled list codes into an array
}
document.getElementById("partners").innerHTML = imageList.join(""); //display all six image codes in the array