let array: number[] = [7, -8, 25, 1, 13];

let menorNumero: number = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < menorNumero) {
        menorNumero = array[i];
    }
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);

console.log(menorNumero);
