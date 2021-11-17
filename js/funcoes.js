
(function () {
  const cnv = document.querySelector('#canvas');
  const ctx = cnv.getContext('2d');
  //players

  const playerLeft = new Image();
  playerLeft.src = './images/robo.png';

  const playerRight = new Image();
  playerRight.src = './images/robo2.png';

  //movimentos
  let moveLeft = false;
  let moveUp = false;
  let moveRight = false;
  let moveDown = false;

  let moveLeft2 = false;
  let moveUp2 = false;
  let moveRight2 = false;
  let moveDown2 = false;

  // arrays
  const robos = [];


  // quadrados
  var robo1 = new Robo(50, 200, 100, 100, "#f60", 10, 100);
  robos.push(robo1);



  var robo2 = new Robo(830, 200, 100, 100, "#0f6", 10, 100);
  robos.push(robo2);


  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;
    console.log(nomeKey);
    switch (nomeKey) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });

  //soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
      case 'ArrowLeft':
        moveLeft = false;
        break;
      case 'ArrowUp':
        moveUp = false;
        break;
      case 'ArrowRight':
        moveRight = false;
        break;
      case 'ArrowDown':
        moveDown = false;
        break;
    }
  });
  // ------------------------------------------------------------------------
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;
    console.log(nomeKey);
    switch (nomeKey) {
      case 'a':
        moveLeft2 = true;
        break;
      case 'w':
        moveUp2 = true;
        break;
      case 'd':
        moveRight2 = true;
        break;
      case 's':
        moveDown2 = true;
        break;
    }
  });

  //soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
      case 'a':
        moveLeft2 = false;
        break;
      case 'w':
        moveUp2 = false;
        break;
      case 'd':
        moveRight2 = false;
        break;
      case 's':
        moveDown2 = false;
        break;
    }
  });





  let i = 5;

  function restart() {





    let danoPlayer1 = Math.floor(Math.random() * 21)
    let danoPlayer2 = Math.floor(Math.random() * 21)

      class ProgressBar {
        constructor(element, initialValue = 100) {
          this.valueElem = element.querySelector('.progress-bar-value');
          this.fillElem = element.querySelector('.progress-bar-fill');

          this.setValue(initialValue);
        }
        setValue(newValue) {
          if (newValue < 0) {
            newValue = 0;
          }
          if (newValue > 100) {
            newValue = 100;
          }
          this.value = newValue;
          this.update();


        }
        update() {
          const percentage = this.value + "%";//50%

          this.fillElem.style.width = percentage;
          this.valueElem.textContent = percentage;
        }





      }

      class ProgressBar2 {
        constructor(element, initialValue = robo2.vida) {
          this.valueElem = element.querySelector('.progress-bar-value2');
          this.fillElem = element.querySelector('.progress-bar-fill2');

          this.setValue(initialValue);
        }
        setValue(newValue) {
          if (newValue < 0) {
            newValue = 0;
          }
          if (newValue > 100) {
            newValue = 100;
          }
          this.value = newValue;
          this.update();


        }
        update() {
          const percentage = this.value + "%";//50%

          this.fillElem.style.width = percentage;
          this.valueElem.textContent = percentage;
        }

      }


    if (robo1.posX < robo2.posX + robo2.width &&
      robo1.posX + robo1.width > robo2.posX &&
      robo1.posY < robo2.posY + robo2.height &&
      robo1.posY + robo1.height > robo2.posY) {


  
      
      i--;
      robo1.posX = 50;
      robo1.posY = 200;
      robo2.posX = 830;
      robo2.posY = 200;
      robo1.vida = robo1.vida - danoPlayer1;
      robo2.vida = robo2.vida - danoPlayer2;
      console.log(`Vida do Jogador 1: ${robo1.vida}`)
      console.log(`Vida do Jogador 2: ${robo2.vida}`)


     
    const pb1 = new ProgressBar(document.querySelector('.progress-bar'), robo1.vida);
    const pb2 = new ProgressBar2(document.querySelector('.progress-bar2'),robo2.vida);
  
if (i == 0 || robo1.vida <= 0 || robo2.vida <= 0) {
      

        

         
        if (robo1.vida > robo2.vida) {
          var vencedor = 'Jogador 1 - Robô cinza';
          console.log('Jogador 1 (robô cinza) venceu!')
        } else {
          vencedor = 'Jogador 2 - Robô verde';
          console.log('Jogador 2 (robô verde) venceu!')
        }

  document.querySelector('.instrucoes').innerHTML = 'Fim de jogo ' + vencedor + " venceu, atualize a página para jogar novamente."
  robo1 = 0;
  robo2 = 0;
 

  
  


    
      }


    }

  }


  function moverQuadrados() {
    if (moveLeft && !moveRight) {
      robo1.posX -= robo1.velocidade;
    }
    if (moveRight && !moveLeft) {
      robo1.posX += robo1.velocidade;
    }
    if (moveUp && !moveDown) {
      robo1.posY -= robo1.velocidade;
    }
    if (moveDown && !moveUp) {
      robo1.posY += robo1.velocidade;
    }

    //Movimentação Player 2
    if (moveLeft2 && !moveRight2) {
      robo2.posX -= robo2.velocidade;
    }
    if (moveRight2 && !moveLeft2) {
      robo2.posX += robo2.velocidade;
    }
    if (moveUp2 && !moveDown2) {
      robo2.posY -= robo2.velocidade;
    }
    if (moveDown2 && !moveUp2) {
      robo2.posY += robo2.velocidade;
    }



    restart();



    //fiixar na tela - NÃO SAI DO CANVAS
    robo1.posX = Math.max(0, Math.min(cnv.width - robo1.width, robo1.posX));
    robo1.posY = Math.max(0, Math.min(cnv.height - robo1.height, robo1.posY));
    robo2.posX = Math.max(0, Math.min(cnv.width - robo2.width, robo2.posX));
    robo2.posY = Math.max(0, Math.min(cnv.height - robo2.height, robo2.posY));
  }


  function exibirQuadrados() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    ctx.drawImage(playerLeft, 0, 0, 450, 510, robo1.posX, robo1.posY, robo1.width, robo1.height);

    ctx.drawImage(playerRight, 0, 0, 450, 510, robo2.posX, robo2.posY, robo2.width, robo2.height);
  
   
  }
  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    exibirQuadrados();
    
  }
  atualizarTela();
}()
)

