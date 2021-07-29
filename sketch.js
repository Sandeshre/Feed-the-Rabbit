var garden,rabbit;
var gardenImg,rabbitImg;
var appleimg,leafimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leafimg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  
  rabbit.collide(edges);

  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      Apples();
    } else {
      Leaf();
    }
  }
  rabbit.x = World.mouseX
  
  drawSprites();
}

function Apples() {
var apple=createSprite(0,Math.round(random(20,370)),10,10);
apple.addImage (appleimg);
apple.velocityY =3;
apple.scale =0.1;
apple.lifetime=150
}

function Leaf() {
  var leaf=createSprite(0,Math.round(random(20,370)),10,10);
  leaf.addImage (leafimg);
  leaf.velocityY =3;
  leaf.scale =0.1;
  leaf.lifetime =150;
  }