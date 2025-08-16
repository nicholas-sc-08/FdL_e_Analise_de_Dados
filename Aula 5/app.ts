const vetor_temp_minimas: Array<number> = [];
const vetor_temp_maximas: Array<number> = [];
const gerar_temperatura = (): void => {

    while (vetor_temp_minimas.length < 30) {

        const temp_minima: number = Math.floor(Math.random() * 12);
        vetor_temp_minimas.push(temp_minima);
    };

    while (vetor_temp_maximas.length < 30) {

        const temp_maxima: number = Math.floor(Math.random() * 35);
        vetor_temp_maximas.push(temp_maxima);
    };

    console.table(vetor_temp_minimas);
    console.table(vetor_temp_maximas);
};

gerar_temperatura();