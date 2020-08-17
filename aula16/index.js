//Padrão IEEE 754-2008


let num1 = 10;
let num2 = 2.5555;

console.log(num1 + num2);
console.log(num1.toString() + num2.toString());

//Binario
console.log(num1.toString(2));

//Arredondamento
console.log(num2.toFixed(2));

console.log(Number.isInteger(num1));

let temp = num1 * 'Olá';
console.log(temp);

console.log(Number.isNaN(temp));


num1 = 0.7;
num2 = 0.1;

console.log(num1 + num2);

num1 += num2;
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

num1 = parseFloat(num1.toFixed(2));
console.log(Number.isInteger(num1));
