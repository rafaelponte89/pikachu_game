const character = document.querySelector('#character');
const pipe = document.querySelector('#pipe-game');
const power = document.querySelector('#power');
const cloud = document.querySelector('#cloud-game');
const game = document.querySelector('.game');
const score = document.querySelector('.score');

/*Declaração de função anônima*/
const jump = () => {

    character.classList.add('jump-character');

    setTimeout(() => {
        character.classList.remove('jump-character');

    }, 500);

};

const thunderPower = () => {
    power.classList.add('thunder-power');

    setTimeout(() => {
        power.classList.remove('thunder-power');
    }, 3000);

};
let scoreValue = 0;
let counter = true;
const loopGame = function () {
    const loopGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const characterPosition = +window
            .getComputedStyle(character)
            .bottom.replace("px", "");
            
  
        if (pipePosition - characterPosition <=-120 && counter )  {
            scoreValue += 10;
            score.textContent = scoreValue; 
            counter = false;
        }
        else if ( pipePosition - characterPosition >0) {
            counter = true;
        }
        else {

        }
      
       
        if (window.innerWidth > 480) {
            if (pipePosition <= 120 && pipePosition > 0 && characterPosition < 80) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;
    
                character.style.animation = 'none';
                character.style.bottom = `${characterPosition}px`;
    
                character.style.backgroundImage = 'url("./images/pikachu-defeated.png")';
    
                character.style.width = '100px';
                character.style.marginLeft = '45px';
    
                power.style.animation = 'none';
                // score.textContent = parseInt(scoreValue)-10; 
                setTimeout( function() {location.reload()},2000);
                clearInterval(loopGame);
            }
        }
        else {
            if (pipePosition <= 60 && pipePosition > 0 && characterPosition < 40) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;
    
                character.style.animation = 'none';
                character.style.bottom = `${characterPosition}px`;
    
                character.style.backgroundImage = 'url("./images/pikachu-defeated.png")';
    
                character.style.width = '50px';
                character.style.marginLeft = '27.5px';
    
                power.style.animation = 'none';
                // score.textContent = parseInt(scoreValue)-10; 
                setTimeout( function() {location.reload()},2000);
                clearInterval(loopGame);
               
            }


        }
    }, 10);
    
}



function controlMobile() {
    const pulo = document.getElementById('jump');
    const raio = document.getElementById('thunder');
    pulo.addEventListener('click', jump, false);
    raio.addEventListener('click', thunderPower, false);
}

controlMobile();

const eventoTecla = document.addEventListener('keydown', function (event) {

    let tecla = event.code;
  

    if (tecla == 'ArrowUp') {
        jump(event);
    }
    else if (tecla == 'Enter') {
        thunderPower(event);
    }
});


const startGame = document.querySelector('#start-game');
const menu = document.querySelector('#menu');

startGame.addEventListener('click',function(){

    if(game.getAttribute('hidden') !== null) {
        character.setAttribute('class','character');
        power.setAttribute('class','power');
        pipe.setAttribute('class','pipe-game');
        cloud.setAttribute('class','cloud-game');
        game.hidden = false;
        menu.style.display = 'none';
 
        loopGame();
    }
 
});

