let xVaca = 265
let yVaca = 372
let colidiu = false;
let numAleatorio = Math.round(Math.random());
console.log(numAleatorio);

function mostraVaca(){

    image(vaca, xVaca, yVaca, 30, 25);
}

function movimentaVaca(){

    if(keyIsDown(UP_ARROW)){

        yVaca -= 5;
    }
    if(keyIsDown(DOWN_ARROW)){

        yVaca += 5;
        if(yVaca > 393){
            yVaca -= 5;
        }
    }
    if(keyIsDown(LEFT_ARROW)){

        xVaca -= 5
        if(xVaca < 5){
            xVaca += 5;
        }
    }
    if(keyIsDown(RIGHT_ARROW)){

        xVaca += 5
        if(xVaca > 580){
            xVaca -= 5;
        }
    }

}

function colisaoVaca(){

    for(i = 0; i < carros.length; i++){
        colidiu = collideRectCircle(xCarros[i], yCarros[i], 60, 40, xVaca, yVaca + 8, 0)
        if(colidiu){
            bateu();
        }
    }

}

function bateu(){
    xVaca = 265; 
    yVaca = 365;
    meusPontos -= 1
}
