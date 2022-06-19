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


function colision() {

}

const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const characterPosition = +window
        .getComputedStyle(character)
        .bottom.replace("px", "");
    console.log(window.innerWidth);

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


            clearInterval(loopGame);
        }
    }
}, 10);


function controlMobile() {
    const pulo = document.getElementById('jump');
    const raio = document.getElementById('thunder');
    pulo.addEventListener('click', jump, false);
    raio.addEventListener('click', thunderPower, false);
}

controlMobile();

const eventoTecla = document.addEventListener('keydown', function (event) {

    let tecla = event.code;
    console.log(tecla);

    if (tecla == 'ArrowUp') {
        jump(event);
    }
    else if (tecla == 'Enter') {
        thunderPower(event);
    }
});

