//Functions for SCI
var fruitArray = ["Apple", "Blackberry", "Orange", "Peach", "Strawberry", "Grape". "Raspberry"]

Function getBerries(){

  var results;

  for (var i= 0; i< fruitArray.length; i++){

  if (fruitArray[i].contains("berry")){
  results += fruitArray[i] + "";
  }
  }
  return results;
}

var myStringOfBeeries = getBerrie(fruitArray);
