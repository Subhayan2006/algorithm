var fixedRect, movingRect;
var rect1,rect2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1=createSprite(600,150,50,50);
  rect1.shapeColor="brown";

  rect2=createSprite(600,250,50,50);
  rect2.shapeColor="pink"
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
     
  }
 rect1.x=mouseX;
 rect2.y=mouseY;

if (isTouching(rect1,rect2)) {
rect1.shapeColor="red";
rect2.shapeColor="red";

}
else
{
  rect1.shapeColor="brown";
  rect2.shapecolor="pink";
}
  drawSprites();
} 
function isTouching(object1,object2) {

if(object2.x - object1.x < object1.width/2 + object2.width/2
&& object1.x - object2.x < object1.width/2 + object2.width/2
&&object2.y - object1.y < object1.height/2 + object2.height/2
&& object1.y - object2.y < object1.height/2 + object2.height/2)
{
  return true;
}
else
{
  return false;
}





}    