const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

if (performance.getEntriesByType("navigation")[0].type === "reload") {
  const firstRandomIndex = Math.floor(Math.random() * images.length);
  const secondRandomIndex = Math.floor(Math.random() * images.length);
  let player1 = (image1.src = images[firstRandomIndex]);
  let player2 = (image2.src = images[secondRandomIndex]);

  if (player1 > player2) {
    document.querySelector("h1").textContent = "🚩player 1 wins!";
  } else if (player1 < player2) {
    document.querySelector("h1").textContent = "player 2 wins!🚩";
  } else {
    document.querySelector("h1").textContent = "it's a draw!";
  }
}
