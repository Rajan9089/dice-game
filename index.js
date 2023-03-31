
var randomNumbar1=Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice" + randomNumbar1 + ".png"; // dice1.png - dice6.png

var randomImageSource1= "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

var randomNumbar2=Math.floor(Math.random()*6)+1;

var randomImageSource2nd= "images/dice" + randomNumbar2 + ".png"; //  images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2nd);

// if player1 wins
if(randomNumbar1 > randomNumbar2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if( randomNumbar2 > randomNumbar1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
