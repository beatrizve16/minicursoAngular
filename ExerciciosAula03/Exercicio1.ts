//Crie um algoritmo que verifique todos os números entre 1 e 200, 
//caso o numero seja divisível por 3, imprima “divisível por 3” , caso
//seja divisível por 5, imprima “divisível por 5”, caso seja divisível
//pelos 2 imprima “divisível por 3 e 5” , se não for nenhum dos casos imprima o próprio numero

let num : number;

for(num = 1; num <= 200; num++){
  if(num % 3 == 0 && num %% 5 == 0 ) {
    console.log("numero divisivel por 3 e por 5");
  }else if(num % 3 == 0){
    console.log("Numero divisivel por 3");
  }else if(num % 5 == 0){
    console.log("numero divisivel por 5")
  } else {
    console.log(num);
  }

}
