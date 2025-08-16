"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vetor_temp_minimas = [];
const vetor_temp_maximas = [];
const gerar_temperatura = () => {
    while (vetor_temp_minimas.length < 30) {
        const temp_minima = Math.floor(Math.random() * 12);
        vetor_temp_minimas.push(temp_minima);
    }
    ;
    while (vetor_temp_maximas.length < 30) {
        const temp_maxima = Math.floor(Math.random() * 35);
        vetor_temp_maximas.push(temp_maxima);
    }
    ;
    console.table(vetor_temp_minimas);
    console.table(vetor_temp_maximas);
};
gerar_temperatura();
//# sourceMappingURL=app.js.map