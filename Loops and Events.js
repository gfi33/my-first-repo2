//getElementbyId and  getElementsByTagName
<button id="myButton">Click Me!</button>

var myButton = document.getElementsByTagName("button");

var myButton = document.getElementById("myButton");
//Retriving Elements
<input id="name" type="text"/>

var myForm = document.getElementById('name');

var myForm = document.getElementById('name');

var name = document.getElementById('name').value

var myForm = document.getElementById('name');

var name = myForm.value;

//Creating DOM Elements
var header = document.createElement('h1');
header.innerHTML = "Hello World!"

//Handling Events
myButton.addEventListener("click", function(){
  alert("Click!!");
})
