const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const textoPagina = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textoPagina.innerHTML = `<p>Seu número +2 é ${numero + 2}.</p>`;

let texto;
texto += '<h1> Seu numero é : ' + numero + '</h1> <br>';
texto += 'Raiz Qudradra : ' + Math.sqrt(numero) + '<br>';
texto += numero + ' é inteiro : ' + Number.isInteger(numero) + '<br>';
texto += numero + ' é NaN : ' + isNaN(numero) + '<br>';
texto += 'Arredondamento para baixo: ' + Math.floor(numero) + '<br>';
texto += 'Arredondamento para alto: ' + Math.ceil(numero) + '<br>';
texto += 'Com duas casas decimais : ' + numero.toFixed(2) + '<br>';

textoPagina.innerHTML += texto;