function comparaNumero (num1, num2) {
    igualdade = num1 === num2;
    soma10 = num1 + num2;
    soma20 = num1 + num2;

    igualdade == true ? console.log('Os números ' + num1 + 'e ' +  num2 + ' são iguais') : console.log('Os números ' + num1 + ' e ' + num2 +' não são iguais');

    soma10 < 10 ? console.log("Sua soma é " + soma10 + ', que é menor que 10') : ("Sua soma é " + soma10 +" que é maior que 10");

    soma20 < 20 ? console.log(" e é menor que 20") : console.log(" e é maior que 20")
    

}

comparaNumero(3, 5)