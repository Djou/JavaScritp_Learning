//Escreva uma função que receba 2 numeros e retorno o maior deles
// const num1 = parseInt(prompt('Digite o primeiro número'));
// const num2 = parseInt(prompt('Digite o segundo número'));

// if (num1 > num2)  {
//     alert('Primeiro número maior que o segundo');
// } else if (num2 > num1) {
//     alert('Segundo número maior que o primeiro');
// } else {
//     alert('Primeiro e segundo são iguais');
// }


//Escrva uma função que recebe um número e retorne o seguinte :
//Se numero é divisivel por 3 = Fizz
//Se número é divisivel por 5 = Buzz
//Se número é divisivel por 3 e 5 = FizzBuzz
//Numero Nâo é divisivel por 3 e 5 = Retorna o proprio número
//Checar se o número é realmente um número
//Use a função com números de 0 a 100

const numero = prompt('Digite um número');

if (isNaN(numero)) {
    console.log(numero);
} else {
    if ((numero%3 == 0) && (numero%5 == 0)) {
        console.log('FizzBuzz');
    } else if (numero%3 == 0) {
        console.log('Fizz');
    } else if (numero%5 == 0) {
        console.log('Buzz');
    } else {
        console.log(numero);
    }
}


function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if ((numero % 3 === 0) && (numero % 5 === 0)) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Fizz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i<= 100; i++) {
    console.log(i, fizzBuzz(i));
}



