function randomSelection() {
  let number = Math.floor(Math.random() * 6) + 1;
  return number;
}
let img1 = "images/" + randomSelection() + ".png";
let img2 = "images/" + randomSelection() + ".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

let result = "";
if (img1 > img2) result = "Player1 winner";
else if (img2 > img1) result = "Player2 winner";
else result = "result is a tie";
document.querySelector(".output").innerHTML = result;
