//3) Criar uma lista com 6 notas. Ao rodar o programa, realizar a média das notas descartando a primeira e a última. Mostra na tela a média.

let notas = [];
let soma_das_notas = 0;

for(let i = 1; i <= 6; i++){

    const nota = parseFloat(prompt(`Qual a ${i}º nota?`));

    if(i != 1 && i != 6){

        notas = [...notas, nota];
    }; 
};

for(let i = 0; i < notas.length; i++){

    soma_das_notas += notas[i];
};

const media_final = soma_das_notas / notas.length;
alert(`Média final das notas é de: ${media_final.toFixed(2)}`);
