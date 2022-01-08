function calculadora () {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão Real \n 5 - Divisão Inteira \n 6 Potenciação');

    //Verificar validade das operações
    
    if (!operacao || operacao >=7) {
        alert('Operacão inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Parâmetros inválidos!');
            calculadora();
        } else {

            //definindo operações
            function soma() {
                n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
            }

            function subtracao() {
                n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
            }

            function multiplicacao() {
                n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
            }

            function divisaoReal() {
                n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
            }

            function divisaoInteira() {
                n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            }

            function potenciacao() {
                n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
            }

            //realizar nova operação
            function novaOperacao() {
                let opcao = prompt(`Deseja realizar outra operação?\n 1 - Sim \n 2 - Não`);
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma oção válida!')
                    novaOperacao;
                }
            }
        }

        //verificador de operação selecionada no prompt

        // if (operacao == 1) {
        //     soma();
        // } else if (operacao == 2) {
        //     subtracao();
        // } else if (operacao == 3) {
        //     multiplicacao();
        // } else if (operacao == 4) {
        //     divisaoReal();
        // } else if (operacao == 5) {
        //     divisaoInteira ();
        // } else if (operacao == 6) {
        //     potenciacao();
        // }
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}

calculadora();