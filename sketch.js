
var fixedRect,movingRect;

function setup(){
  createCanvas(400,1200);
    fixedRect = createSprite(200,200,50,80);
    fixedRect.shapeColor = "blue";

    movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "blue";
}


function draw(){
background(0,0,0);
movingRect.x = World.mouseX
mocingRect.y = World.mouseY

drawSprites();
}