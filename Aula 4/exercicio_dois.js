//2) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pergunta = prompt(`Qual número você deseja verificar se existe no vetor?`);
const numero_existente = numeros.includes(parseInt(pergunta));

numero_existente ? alert(`Número pertence ao vetor!`) : alert(`Número não pertence ao vetor!`);
