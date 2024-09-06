function destrancarPortas(placa: string): void {
    console.log(`Passo 1: ${placa} -> Portas Destrancadas`);
}

function ligarPlaylistRock(placa: string): void {
    console.log(`Passo 2: ${placa} -> Playlist de Rock ligada`);
}

function ligarMotor(placa: string, rpm: number): void {
    console.log(`Passo 3: ${placa} -> Motor ligado a ${rpm}RPM`);
}

function verificarSeguranca(placa: string): void {
    console.log(`Passo 4: ${placa} -> Verificação de segurança feita!`);
}

function prepararCarro(placa: string): void {
    destrancarPortas(placa);
    ligarPlaylistRock(placa);
    ligarMotor(placa, 850);
    verificarSeguranca(placa);
    console.log(`Extra: ${placa} -> Vruum!`);
}

prepararCarro('ABC1234');
