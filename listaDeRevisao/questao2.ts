let linhas: number = 3;
let colunas: number = 3;

let matrizA: number[][] = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

let matrizB: number[][] = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

let matrizSoma: number[][] = [];

for (let i = 0; i < linhas; i++) {
    matrizSoma[i] = [];
    for (let j = 0; j < colunas; j++) {
        matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}

console.log('Matriz A:');
for (let i = 0; i < linhas; i++) {
    let linha = '';
    for (let j = 0; j < colunas; j++) {
        linha += matrizA[i][j] + ' ';
    }
    console.log(linha); 
}

console.log('Matriz B:');
for (let i = 0; i < linhas; i++) {
    let linha = '';
    for (let j = 0; j < colunas; j++) {
        linha += matrizB[i][j] + ' ';
    }
    console.log(linha);
}

console.log('Matriz Soma:');
for (let i = 0; i < linhas; i++) {
    let linha = '';
    for (let j = 0; j < colunas; j++) {
        linha += matrizSoma[i][j] + ' ';
    }
    console.log(linha);
}
