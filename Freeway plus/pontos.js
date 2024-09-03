let meusPontos = 0;

function addPonto(){

    if(yVaca < 0){

        xVaca = 265
        yVaca = 365
        meusPontos++
    }
}

function pontos(){

    textSize(28);
    fill(255, 255, 0);
    text(meusPontos, 64, 28);

}