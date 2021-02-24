var ob1,ob2;
var ob3,ob4;
function setup() {
  createCanvas(800,400);
  ob1=createSprite(400, 200, 50, 50);
  ob2=createSprite(300,100,30,30);
  ob3=createSprite(100,250,40,40);
  ob4=createSprite(300,250,20,70);
  ob3.velocityX=2;
  ob4.velocityX=-2;
  ob1.shapeColor="green";
  ob2.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  ob1.x=mouseX;
  ob1.y=mouseY;
 console.log(ob1.x-ob2.x);
 if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 && ob2.x-ob1.x<ob1.width/2+ob2.width/2 && ob1.y-ob2.y<ob1.height/2+ob2.height/2 && ob2.y-ob1.y<ob1.height/2+ob2.height/2){
  ob2.shapeColor="red";
  ob1.shapeColor="red";
 }else{  ob2.shapeColor="green";
 ob1.shapeColor="green";

 }

if(ob3.x-ob4.x<ob3.width/2+ob4.width/2 && ob4.x-ob3.x<ob3.width/2+ob4.width/2){
  ob3.velocityX=ob3.velocityX*-1;
  ob4.velocityX=ob4.velocityX*-1;
}
if(ob3.y-ob4.y<ob3.height/2+ob4.height/2 && ob4.y-ob3.y<ob3.height/2+ob4.height/2){
  ob3.velocityY=ob3.velocityY*-1;
  ob4.velocityY=ob4.velocityY*-1;
}


  drawSprites();
}