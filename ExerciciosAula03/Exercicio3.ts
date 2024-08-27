//Crie um algoritmo onde declarando uma variável numero, dê um
//valor de um inteiro para ela, e faça um loop onde este loop vá de
//1 até numero, e se o valor for ímpar some a uma variável soma. no final imprima a soma.

let num : number = 10;
let soma : number = 0;
let i : number = 0;

for( let i = 1; i<= num; i++){
  if(i % 2 !=0){
    soma +=i;
  }
}

console.log(soma);
