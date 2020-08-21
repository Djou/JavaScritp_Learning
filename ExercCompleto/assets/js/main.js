//1 - Capturar evento do formulario
//2 - Criar function para setar o resultado



const form = document.querySelector('#formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso1 = event.target.querySelector('#peso');
    const inputPeso1 = event.target.querySelector('#altura');

    const peso = Number(inputPeso1.value);
    const altura = Number(inputAltura1.value);

    console.log(peso, altura);
});

function criarP(className) {
    const p = document.createElement('p');
    return p;
}


function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarP();
    //resultado.appendChild(p);
}


