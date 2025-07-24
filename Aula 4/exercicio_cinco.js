//5) Crie um vetor de 5 números e percorra o vetor listando somente os números pares. 
//Ao final mostrar a soma dos ímpares.

const numeros = [1, 2, 3, 4, 5];
const numeros_pares = numeros.filter(numero => numero % 2 == 0);
let soma_dos_impares = 0;

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] % 2 == 1){

        soma_dos_impares += numeros[i];
    };
};

alert(`Soma dos impares: ${soma_dos_impares}\nNúmeros pares: ${numeros_pares.toString()}`);
