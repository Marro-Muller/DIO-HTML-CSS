let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 =amarelo
//3 = azul

//Referenciando cores do HTML

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Função de sorteio de números entre 0-3 (conforme cores), criando ordem aleatória de cores

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4); //Variável que guarda o número sorteado em cada rodada
    order[order.length] = colorOrder; //Atribui o índice do Array
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acender luz conforome sorteio
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//Comparar se a ordem clicada é igual a sorteada

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou!\nIniciando próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função que retorna a cor

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

//Função para proxímo nível do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para game over

let gameOver = () => {
    alert(`pontuação: ${score}\nVocê perdeu o jogo :(\nClique em OK para começar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função de início de jogo

let playGame = () => {
    alert(`Bem vindo ao Genius!\nIniciando novo jogo.`);
    score = 0;

    nextLevel();
}

//Eventos de cliques para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
