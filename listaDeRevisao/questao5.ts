let num1: number = 1;
let num2: number = 1;
let operacao: string = '+'; 
let resultado: number;

switch (operacao) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
      resultado = num1 / num2;
        break;
 
}

console.log(`O resultado de ${num1} ${operacao} ${num2} é ${resultado}`);
