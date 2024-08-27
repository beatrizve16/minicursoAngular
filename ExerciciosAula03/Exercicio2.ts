//Crie um algoritmo que mostre todos os números primos dentro
//dos 50 primeiros números decimais já determinados no programa
//no final utilize o console.log para imprimir estes números


let numeros : number = 50;
let num : number;
let contador : number = 0;
let i : number ;


for (num = 2; num <= numeros; num ++){
  for( i = 1 ; i <= numeros; i++){
    if(num % i == 0){
      contador ++;
    }

  }
  if (contador == 2){
    console.log(num);
  }
}
