//codigo errado
let notas1: number[] = [10, 7, 4, 7];
let notas2 number[]: [7, 5, 7, 2];
let media: number[] = []
let i: int;
let status: string;


while(i = 0 , i < 4 , i++):


    media[i] = (notas1[i] + notas2[i]) / 2
    if(media >= 6) {
        status = 'Passou'
    } else {
        status = 'Não passou'
    }
    console('O aluno {i} tirou de media final ${media[i]}. Ele ${status} ');
}

//codigo corrigidpo

let notas1: number[] = [10, 7, 4, 7];
let notas2: number[] = [7, 5, 7, 2]; // eh = e nao :
let media: number[] = [];
let i: number; //nao tem int em ts
let passouOuNao: string; // troquei o nome porque dey erro quando  rodei com status 

//troquei o while pelo for 
for (i = 0; i < 4; i++) { 
    media[i] = (notas1[i] + notas2[i]) / 2;

    if (media[i] >= 6) { // tem que ter o indice pra conferir de cada nota separada 
        passouOuNao = 'Passou';
    } else {
        passouOuNao = 'Não passou';
    }

    //precisa do .log
    console.log(`O aluno ${i} tirou de média final ${media[i]} Ele ${passouOuNao}`);
}


