var seaImg, ship_image, ship, sea;
function preload(){
  seaImg = loadImage("sea.png");
  ship_image = loadAnimation("ship-1.png","ship-2.png");
 
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 250, 50, 50);
  ship = createSprite(200, 310, 50, 50);
  ship.addAnimation("swim", ship_image);
  sea.addImage(seaImg);
  sea.scale = (0.5);
  ship.scale = (0.25);
  sea.velocityX = (1);
}
function draw() {
  background("blue");
  if(sea.x > 600){
    sea.x = 200;
  }
  drawSprites();
}

