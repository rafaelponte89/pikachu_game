const character = document.querySelector('.character');
const pipe = document.querySelector('.pipe-game');
const power = document.querySelector('.power');

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



const loopGame = setInterval( () => {
    const pipePosition = pipe.offsetLeft;
    const characterPosition = +window
        .getComputedStyle(character)
        .bottom.replace("px","");

    if (pipePosition <= 120 && pipePosition > 0 && characterPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        character.style.animation = 'none';
        character.style.bottom = `${characterPosition}px`;

        character.style.backgroundImage= 'url("./images/pikachu-defeated.png")';
    
        character.style.width = '100px';
        character.style.marginLeft='45px';

        power.style.animation='none';

     
        clearInterval(loopGame);
    }
},10);

const eventoTecla = document.addEventListener('keydown',function(event) {
   
    let tecla = event.code;
    console.log(tecla);

    if (tecla == 'ArrowUp'){
        jump(event);
    }
    else if (tecla == 'Enter') {
       thunderPower(event);
    }
});