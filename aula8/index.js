/*
Jonatan Tiaraju Knaul Bosenbecker tem 27 anos, nasceu em 1992, pesa 101 kg, tem 1.78 de altura e seu IMC é de 5464654 31.9 kg/m2
*/


const nome = 'Jonatan Tiaraju Knaul Bosenbecker';
let idade;
const anoNasc = 1992;
const anoAtual = 2020; 
const peso = 101;
const altura = 1.78;
let imc;
let texto;


idade = anoAtual - anoNasc;
imc = (peso / (altura*2));

texto = nome + ' tem ' + idade + ', nasceu em ' + anoNasc + ', pesa ' + peso + ' kg, tem ' + altura + ' e seu IMC é ' + imc + 'kg/m2';

console.log(texto);


//Template strings
console.log(`${nome} tem ${idade} anos, nasceu em ${anoNasc}, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc} kg/m2`);