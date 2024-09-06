//codigo errado:
funtion fatorial (numero: int): void {
    if(numero === 1 || numero === 0){
        return 1;
    }
    return numero * fatorial(numero);
}


fatorial(7);


//codigo corrigido
function fatorial(numero: number): number {
    if (numero === 1 || numero === 0) {
        return 1;
    }
    return numero * fatorial(numero - 1); // ele esqueceu de colocar o numero -1 (que seria tipo o i-- no for, pra ir diminuindo)
}

console.log(fatorial(7));
