var fixedrect,movingrect;
var object1,object2,object3;

function setup() {
  createCanvas(1200,800);
  fixedrect =createSprite(200,200,50,80);
  movingrect =createSprite(400,200,80,30);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3 = createSprite(300,100,50,50);
  object1.shapeColor="purple";
  object2.shapeColor="purple";
  object3.shapeColor="purple";
}

function draw() {
  background(0);  
   movingrect.x=World.mouseX;
   movingrect.y=World.mouseY;
   if(isTouching(movingrect,object2)){
  movingrect.shapeColor="red";
  object2.shapeColor="red";
  
  
  }
else{
  movingrect.shapeColor="yellow";
  object2.shapeColor="yellow";




}


  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2
    ){
   return true;
   
   }
   else{
    return false;



   }







}







