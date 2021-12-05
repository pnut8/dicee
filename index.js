var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("h1").textContent

document.querySelector(".img1").setAttribute("src", "images/dice" + RandomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + RandomNumber2 + ".png");

if ( RandomNumber1 > RandomNumber2 ) {
	document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (RandomNumber1 < RandomNumber2) {
	document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
	document.querySelector("h1").textContent = "Draw!";
}
