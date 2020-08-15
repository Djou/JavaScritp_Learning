let umaString = "Um o rato roeu a roupa do rei de roma";
//Escapar caracter
//let umaString = "Um \"texto\"";

console.log(umaString);

console.log(umaString[0]);
console.log(umaString.charCodeAt(2));
console.log(umaString.concat(' ', 'é uma string'));
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('texto'));
console.log(umaString.lastIndexOf('texto',3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[x]/));
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3));
console.log(umaString.slice(-5, umaString.length -1));
console.log(umaString.length -3);
