// globais
var str = "";
var count = 0;
var inputs = ["input0", "input1", "input2", "input3", "input4", "input5", "input6", "input7"];

function  buttonStartGame() {
  str = str.trim();
  console.log("Start Game..." + str + " " + str.length);
} 

function buttonInsertWord() {
    console.log("Insert Word...");
}

function insertWord(key) {
  var t = String.fromCharCode(key).toUpperCase();
  var i = document.getElementById(`${inputs[count]}`);
  if(key == 13) {
    buttonStartGame();
  }
  if(key == 8) {
    if(count <= 0) {
      count = 0;
      i = document.getElementById(`${inputs[count]}`);
      i.focus();
      i.value = "";
      str = "";
    } else {
      i = document.getElementById(`${inputs[count]}`);
      i.focus();
      i.value = "";
      count--;
      str = str.slice(0, count);
      i = document.getElementById(`${inputs[count]}`);
      i.value = "";
      i.focus();
    }
  }
    if(t >= "A" && t <= "Z") {
      i.autofocus=false;
      i.value = t;
      str += t;
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
input0.addEventListener('keydown', function(evt) {
  evt.preventDefault();
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  insertWord(key);
});
