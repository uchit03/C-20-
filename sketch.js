var fixed,moving;

function setup() {
  createCanvas(800,400);
   fixed=createSprite(400, 200, 50, 50);
   fixed.shapeColor="green";
   moving=createSprite(600,500,80,80);
   moving.shapeColor="green";    
}

function draw() {
  background("black");  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x < fixed.width/2 + moving.width/2 && 
    fixed.x-moving.x< fixed.width/2 + moving.width/2 &&
     moving.y-fixed.y < fixed.width/2 + moving.width/2 && 
    fixed.y-moving.y< fixed.width/2 + moving.width/2 )
  {
    moving.shapeColor="blue";
    fixed.shapeColor="blue";
  }
else
{
  moving.shapeColor="red";
    fixed.shapeColor="red";
}





  drawSprites();
}  