const alunos = ['jonatan', 'carlos', 'pedro'];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);


alunos[3] = 'Jovens';

console.log(alunos);
console.log(alunos.length);


alunos[alunos.length] = 'teste1';
alunos[alunos.length] = 'teste2';
console.log(alunos);

alunos.push('Otávio');
console.log(alunos);

alunos.unshift('inicio');
console.log(alunos);

const removido = alunos.pop();
console.log(alunos);
console.log(removido);


