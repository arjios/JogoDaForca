// globais
var str = "";
var count = 0;
var inputs = ["input0", "input1", "input2", "input3", "input4", "input5", "input6", "input7"];

function  buttonStartGame() {
    console.log("Start Game...");
} 

function buttonInsertWord() {
    console.log("Insert Word...");
}

function insertWord(chr) {

  var i = document.getElementById(`${inputs[count]}`);
    if(chr >= "A" && chr <= "Z") {
      i.autofocus=false;
      i.value = chr;
      str += chr;
      count++;
      if(count<8) {
        i = document.getElementById(`${inputs[count]}`);
        i.focus();
      } else {
        count = 7;
      }
    }
}

let evento1 = document.querySelector(".main-buttons-first");
evento1.addEventListener('click', function() {
  buttonStartGame();
});

let evento2 = document.querySelector('.main-buttons-second');
evento2.addEventListener('click', function() {
  buttonInsertWord();
  location.href = "index.html"
});

let input0 = document.querySelector('.main-form');
input0.addEventListener('keypress', function(evt) {
  evt.preventDefault();
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  var t = String.fromCharCode(key).toUpperCase();
  insertWord(t);
});
