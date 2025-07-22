//4) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, 
//finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas.

let salada_pronta = false;
let salada_de_frutas = [];

while(!salada_pronta){

    const fruta_adicionar = prompt(`Qual fruta adicionar?`);
    salada_de_frutas = [...salada_de_frutas, fruta_adicionar];

    fruta_adicionar.toUpperCase() == `CEREJA` ? salada_pronta = true : salada_pronta = false;
};

alert(`Salada de Frutas: ${salada_de_frutas.toString()}.`);
