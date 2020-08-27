//Operação ternária 
//(condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 100) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const codUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
