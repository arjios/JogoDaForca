function  buttonStartGame() {
  location.href = "forca.html";
} 

function buttonInsertWord() {
  location.href = "insert.html"
}

let evento1 = document.querySelector(".main-buttons-first");
evento1.addEventListener('click', function() {
  buttonStartGame();
});

let evento2 = document.querySelector('.main-buttons-second');
evento2.addEventListener('click', function() {
  buttonInsertWord();
});