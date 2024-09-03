function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(estrada);
  if(typeof carros !== 'undefined') {
    desenhaCarros();
    movimentaCarros();
    carrosInicio();
  } else {
    console.error('carros ainda nao esta definido em draw');
  }
  mostraVaca();
  movimentaVaca();
  colisaoVaca();
  pontos();
  addPonto();
}