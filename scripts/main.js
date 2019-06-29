var myImage = document.querySelector('img');
myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/LamaG.jpg') {
myImage.setAttribute ('src','images/LamaP.jpg');
} else {
myImage.setAttribute('src','images/LamaG.jpg');
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
var myName = prompt('Please enter your name.');
localStorage.setItem('name', myName);
myHeading.textContent = 'ITBrothers are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
setUserName();
}


/*var image_tracker = 'f';
function Change(){
var image = document.getElementById('social');
if(image_tracker=='f'){
image.src='images/LamaP.jpg';
image_tracker='t';
}else{
image.src='images/LamaG.jpg';
image_tracker='f';
}
}*/
/*function setNewImage(){
	alert();
}
function setOldImage(){
	alert();
}*/
/*var myImage = document.querySelector('img');
myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/tv3logo.png') {
myImage.setAttribute ('src','images/computer.png');
} else {
myImage.setAttribute('src','images/tv3logo.png');
}
}*/
/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';
var iceCream = 'chocolate';
if (iceCream === 'chocolate'){
alert('Yay, I love chocolate ice cream!');    
}else {
alert('Awwww, but chocolate is my favorite...');    
}*/
