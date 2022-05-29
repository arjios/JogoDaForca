function  buttonStartGame() {
  location.href = "forca.html";
  var tela = document.getElementById("canvas-id");
  var pincel = tela.getContext("2d");
  pincel.moveTo(188, 0);
  pincel.lineTo(300, 200);
  pincel.stroke();
} 

function buttonInsertWord() {
  location.href = "index.html"
}

let evento1 = document.querySelector(".main-buttons-first");
evento1.addEventListener('click', function() {
  buttonStartGame();
});

let evento2 = document.querySelector('.main-buttons-second');
evento2.addEventListener('click', function() {
  buttonInsertWord();
});