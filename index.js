var randomNumber1 = Math.floor((6*Math.random()))+1;
var randomNumber2 = Math.floor((6*Math.random()))+1;

document.querySelector(".img1").setAttribute("src", "Images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "Images/dice"+randomNumber2+".png");

if(randomNumber1 >  randomNumber2)
  document.querySelector("h1").innerHTML = "&#128681 Player 1 wins!";
else if(randomNumber1 <  randomNumber2)
  document.querySelector("h1").innerHTML = "Player 2 wins! &#128681";
else
  document.querySelector("h1").innerHTML = "&#128681 It's a Draw! &#128681";
