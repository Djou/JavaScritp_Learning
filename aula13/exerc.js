const cvarA = 'A';
const cvarB = 'B';
const cvarC = 'C';

let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

//Valor de A = B
//Valor de B = C
//Valor de C = A

varA = cvarB;
varB = cvarC;
varC = cvarA;


console.log(varA, varB, varC);