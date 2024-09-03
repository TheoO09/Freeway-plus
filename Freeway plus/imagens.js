let estrada;
let vaca;
let carro1;
let carro2;
let carro3;

function preload(){
  
  estrada = loadImage("Imagens/estrada.png");
  vaca = loadImage("Imagens/ator-1.png");
  carro1 = loadImage("Imagens/carro-1.png");
  carro2 = loadImage("Imagens/carro-2.png");
  carro3 = loadImage("Imagens/carro-3.png");
  carros = [carro1, carro2, carro3, carro1, carro2, carro3];
  console.log('imagens.js rodando');
  console.log(carros);
}
