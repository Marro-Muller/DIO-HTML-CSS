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
        let elementColor = createElement(order[i]);
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
    })
}

//Comparar se a ordem clicada é igual a sorteada

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
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
    })

    checkOrder();
}

//parte 5