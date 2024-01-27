var randomNumber1 = Math.floor (Math.random() * 6)+1;
var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImgSource1 = "images/" + randomDiceImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImgSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681; Player 1 Wins!";
}    
else if( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681;";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}