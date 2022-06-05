// globais
let c = document.getElementById("canvas-id");
let ctx = c.getContext("2d");
let letrasDigitadas = "";
let palavras = ["ALURA", "ORACLE", "HTML", "JAVASCRIPT", "CSS"];
let inputs = ["input0", "input1", "input2", "input3", "input4", "input5", "input6", "input7"];
let palavraSecreta = "";
let palavra = "";
let erros = 0;
let count = 0;


function escolherPalavraSecreta() {
  palavras.push(sessionStorage.getItem("1"));
  palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)];
  if(palavraSecreta.length < 8) {
    inserirElemento(palavraSecreta.length);
    return palavraSecreta;
  } else {
    desenhaMensagem("Palavras sorteadas devem conter ate 8 caracteres", 10, 20);
  }
}

function inserirElemento(index) {
  if(palavraSecreta.length < 8) {
    const target = document.querySelector('.main-form');
    for(let i = 1 ; i < index ; i++) {
      const div = document.createElement('div');
        div.className = 'main-linha';
        div.id = 'm-linha' + i;
        div.tabIndex = '1';
        target.appendChild(div);
  
      const targetDiv = document.querySelector('#m-linha' + i);
  
      const input = document.createElement('input');
        input.type = "text";
        input.id = "input" + i;
        input.className = "input-linha";
        input.autofocus = "false";
        input.maxLength = "1";
        input.size = "1";
        input.disabled = "true";
  
      const img = document.createElement('img');
        img.src = 'linha.png';
        img.className = 'linha';
        img.id = 'line' + i;
        img.alt = 'Linha' + i;
  
      targetDiv.appendChild(input);
      targetDiv.appendChild(img);
    }
  }
}

function inserirLetra(key) {
  let t = String.fromCharCode(key).toUpperCase();
  if(erros < 8) {
    if(t >= "A" && t <= "Z") {
      if(!verificarLetraRepetida(t)) {
        console.log(t + "   " + letrasDigitadas);
        compararLetras(t);
      } 
    }
  }
}

function verificarLetraRepetida(str) {
  let boo = false;
  if(letrasDigitadas.includes(str)) {
    boo = true;
  } else {
    letrasDigitadas += str;
    document.getElementById("char").value = letrasDigitadas;
  }
  console.log(boo + "  str: " + str + "  digitadas: " + letrasDigitadas);
  return boo;
}

function compararLetras(caractere) {
  if(palavraSecreta.includes(caractere)) {
    inserirLetraValida(caractere);
  } else {
    inserirLetraInvalida(caractere);
  }
}

function inserirLetraValida(letra) {
  if(erros < 8) {
    for(let i=0; i<palavraSecreta.length; i++) {
      if(palavraSecreta[i] === letra) {
        document.getElementById(`${inputs[i]}`).value = letra;
      }
    }
    if(verificarVitoria()) {
      finaliza();
    }
  }
}

function verificarVitoria() {
  let boo = true;
  for(let i=0; i<palavraSecreta.length; i++) {
    if(!(palavraSecreta[i] === document.getElementById(`${inputs[i]}`).value)) {
      boo = false;
    }
  }
  if(boo) {
    desenhaMensagem("Você Venceu. Parabéns!", 170, 10);
  }
  return boo;
}

function inserirLetraInvalida() {
  erros++;
  desenhaForca(erros);
  verificarDerrota();
}

function verificarDerrota() {
  if(erros > 7) {
    desenhaMensagem("Fim de Jogo", 220, 10);
  }
}

function desenhaMensagem(msg, x, y) {
  ctx.font='10px Inter';
  ctx.fillStyle='green';
  ctx.fillText(msg, x, y);
  ctx.stroke();
}


function  buttonStartGame() {
  location.href = "forca.html";
} 

function buttonInsertWord() {
  location.href = "index.html"
}

function desenhaForca(err) {

  //base
  ctx.moveTo(20,140);
  ctx.lineTo(275,140);

  switch (err) {
    case 1:
      ctx.moveTo(120, 140);
      ctx.lineTo(120, 20);
      break;
    case 2:
        //suporte
      ctx.moveTo(120, 20);
      ctx.lineTo(200, 20);
      ctx.moveTo(200, 20);
      ctx.lineTo(200, 30);
      break;
    case 3:
      //cabeca
      ctx.moveTo(200, 30);
      ctx.arc(200, 40, 10, 0, 2 * Math.PI);
      break;
    case 4:
      //corpo
      ctx.moveTo(200, 50);
      ctx.lineTo(200, 90);
      break;
    case 5:
      //braco esquerdo
      ctx.moveTo(200, 60);
      ctx.lineTo(180, 80);
      break;
    case 6:
      //braco direito
      ctx.moveTo(200, 60);
      ctx.lineTo(220, 80);
      break;
    case 7:
      //perna esquerdo
      ctx.moveTo(200, 90);
      ctx.lineTo(180, 130);
      break;
    case 8:
      //perna direito
      ctx.moveTo(200, 90);
      ctx.lineTo(220, 130);
      break;
  }
  ctx.stroke();
}

function finaliza() {
  console.log("FIM");
}

let evento1 = document.querySelector(".main-buttons-first");
evento1.addEventListener('click', function() {
  buttonStartGame();
});

let evento2 = document.querySelector('.main-buttons-second');
evento2.addEventListener('click', function() {
  buttonInsertWord();
});

let input0 = document.querySelector('.input-linha');
input0.addEventListener('keydown', function(evt) {
  evt.preventDefault();
  if(palavraSecreta.length < 8) {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    inserirLetra(key);
  }
});

desenhaForca(0);
escolherPalavraSecreta();



