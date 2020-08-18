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

const removidoUltimo = alunos.pop();
console.log(alunos);
console.log(removidoUltimo);

const removidoPrimeiro = alunos.shift();
console.log(alunos);
console.log(removidoPrimeiro);


//delete alunos[1]; //Fica elemento vazio


alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0,-1));


console.log(typeof alunos);
console.log(alunos instanceof Array);



