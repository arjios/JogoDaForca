function  buttonStartGame() {
    console.log("Start Game...");
} 

function buttonInsertWord() {
    console.log("Insert Word...");
}

let evento1 = document.querySelector(".main-buttons-first");
evento1.addEventListener('click', function() {
  buttonStartGame();
});

let evento2 = document.querySelector('.main-buttons-second');
evento2.addEventListener('click', function() {
  buttonInsertWord();
});