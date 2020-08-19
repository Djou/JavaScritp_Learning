function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    function criaPessoa(nome, sobrenome, peso, altura) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
    }

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado.');    
    
    // let contador = 1;
    // function recebeEventoForm(evento) {
    //     evento.preventDefault();
    //     console.log(`Form não foi enviado. ${contador}`);
    //     contador++;
    // }

    // form.addEventListener('submit', recebeEventoForm);

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));
        resultado.innerHTML += pessoas.values;
    }

    form.addEventListener('submit', recebeEventoForm);
    
}


meuEscopo();