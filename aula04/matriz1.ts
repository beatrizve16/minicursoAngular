function criarmatriz(): number[][] {
    let matriz : number[][]=[];
    let contador = 1;

    for(let i = 0; i<3; i++){
    matriz[i]=[];
    for(let j =0; j< 3; j++){
        matriz[i][j]=contador++;
    }
    }

    return matriz;
    }

    let matriz= criarmatriz();
    console.log(matriz);


























    
