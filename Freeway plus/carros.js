let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 97, 150, 210, 270, 320]
let velocidadeXcarros = [2, 3.5, 5, 6.5, 5.3, 3.2];
let limiteTela = [-30, -70, -100, -110, -100, -40];

function desenhaCarros(){
    for (let i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i], 60, 40);
    }
}
function movimentaCarros(){
    for(i = 0; i < velocidadeXcarros.length; i++){
        xCarros[i] -= velocidadeXcarros[i];
    }
}

function carrosInicio(){

    for(i = 0; i < xCarros.length; i++){
    
        if(xCarros[i] < limiteTela[i]){
            xCarros[i] = 600;
        }
    }
}


window.onload = function(){
    console.log(carros);
}
console.log('carros,js rodando');