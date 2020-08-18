function saudacao(nome) {
    console.log(`Buenas ${nome}`);
    return `Buenas ${nome}`;
}

saudacao('teste');

const variavel = saudacao('Teste');
console.log(variavel);

//function soma(x, y) {
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
    //Abaixo de return não é executado
}

console.log(soma(2,2));

const raiz = function (n) {return n ** 0.5};
console.log(raiz(9));


const raizArrow = (n) => {return n ** 0.5};
console.log(raizArrow(16));