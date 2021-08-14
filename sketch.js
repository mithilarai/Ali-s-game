const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hunter,surviver,area;
var runningSurvivor,standingSurvivor,runningSurvivor2,standingSurvivor2;
var bgimage;
var robot;
var runningRobot,runningRobot2;
var walk2;
var brick;
var wall1;
var start;
var healthbar1;
var score=100;
var shieldScore=100;
var shieldFlag = 0
function preload(){
  runningSurvivor = loadAnimation ("images/surviver/tile000.png","images/surviver/tile001.png","images/surviver/tile002.png"
  ,"images/surviver/tile003.png","images/surviver/tile004.png")

standingSurvivor = loadAnimation("images/surviver/tile009.png")
walk = loadSound ("sound/mixkit-footsteps-in-woods-loop-533.wav")
bgimage = loadImage("images/bg.jpg")
runningSurvivor2 = loadAnimation ("images/surviver2/tile000 (1).png","images/surviver2/tile001 (2).png","images/surviver2/tile002 (1).png"
  ,"images/surviver2/tile003 (1).png","images/surviver2/tile004 (1).png")
  standingSurvivor2 = loadAnimation("images/surviver2/tile005.png")

runningRobot = loadAnimation ("images/robot/robot1.png",
"images/robot/robot2.png",
"images/robot/robot3.png",
"images/robot/robot4.png",
"images/robot/robot5.png",
"images/robot/robot6.png",
"images/robot/robot7.png",
"images/robot/robot8.png")
runningRobot2 = loadAnimation ("images/robot2/robot1.png",
"images/robot2/robot2.png",
"images/robot2/robot3.png",
"images/robot2/robot4.png",
"images/robot2/robot5.png",
"images/robot2/robot6.png",
"images/robot2/robot7.png",
"images/robot2/robot8.png")
walk2 = loadSound("sound/walk of robot.mp3")
brick =loadImage("images/wall2.jpg")

startImg = loadImage("images/space.png")

gun1 = loadImage("images/gun1.png")
gun1left = loadImage("images/gun1left.png")
gun2 = loadImage("images/gun2.png")
gun2right = loadAnimation("images/gun2right.png")
shoot =loadAnimation("images/surviver/tile005.png",
"images/surviver/tile006.png",
"images/surviver/tile007.png",
"images/surviver/tile008.png",
"images/surviver/tile009.png")


shootright = loadAnimation("images/surviver2/tile007.png",
"images/surviver2/tile008.png",
"images/surviver2/tile009.png")
}




function setup(){
  createCanvas(displayWidth,displayHeight-40 );
    // engine = Engine.create();
    // world = engine.world;
   surviverBulletGroup= new Group();
    surviver = createSprite(870,675,50,50);
    

    surviver.addAnimation ("standing",standingSurvivor)
    surviver.addAnimation ("running",runningSurvivor)
    surviver.addAnimation ("standing2",standingSurvivor2)
    surviver.addAnimation ("running2",runningSurvivor2)
    surviver.addAnimation("shooting",shoot);
    surviver.addAnimation("shooting",shootright);
    surviver.scale = 0.5;
    surviver.alpha=0.5;
    robot = createSprite(50,350,50,50);
    robot.scale = 0.75;
    robot.velocityX = 0;
    robot2 = createSprite(850,100,50,50);
    robot2.scale = 0.75;
    robot2.velocityX = 0;
    robot3 = createSprite(1650,350,50,50);
    robot3.scale = 0.75;
    robot3.velocityX = 0;
    robot.addAnimation("right",runningRobot)
    robot.addAnimation("left",runningRobot2)
    robot2.addAnimation("running3",runningRobot)
    robot2.addAnimation("running4",runningRobot2)
    robot3.addAnimation("running3",runningRobot)
    robot3.addAnimation("running4",runningRobot2)
    wall1 = createSprite (1000-155 ,460,20,270);
    wall1.shapeColor = "brown";
    wall2 = createSprite(250,540,200,20);
    wall2.shapeColor = "brown";
    wall3 = createSprite(1440,540,200,20); 
    wall3.shapeColor = "brown";
    wall4 = createSprite(150,400,20,300);
    wall4.shapeColor = "brown";
    wall5 = createSprite(1540,400,20,300);
    wall5.shapeColor = "brown";
    wall6 = createSprite(500,350,20,300);
    wall6.shapeColor = "brown";
    wall7 = createSprite(1200,350,20,300);
    wall7.shapeColor = "brown";
    wall8 = createSprite(140,250,280,20);
    wall8.shapeColor = "brown";
    wall9 = createSprite(1550,250,280,20);
    wall9.shapeColor = "brown";
    wall10 = createSprite(700,300,20,200);
    wall10.shapeColor = "brown";
    wall11 = createSprite(1000,300,20,200);
    wall11.shapeColor = "brown";
    wall12 = createSprite(850,190,319,20);
    wall12.shapeColor = "brown";
    wall13 = createSprite(175,120,350,20);
    wall13.shapeColor = "brown";
    wall14 = createSprite(1510,120,350,20);
    wall14.shapeColor = "brown";
    //wall4.alpha=0.2;
  
    radar=createSprite(robot.x,robot.y,150,150)
    radar.setCollider("circle",0,0,75)
  
    radar.debug=true;
   radar.visible=false; 
    radar2=createSprite(robot2.x,robot2.y,150,150)
    radar2.setCollider("circle",0,0,75)
  
    radar2.debug=true;
    radar2.visible=false; 
    radar3=createSprite(robot3.x,robot3.y,150,150)
    radar3.setCollider("circle",0,0,75)
  
    radar3.debug=true;
    radar3.visible=false; 
    gameState = "serve";
    spritegun1=createSprite(robot.x+30,robot.y,50,50)
    spritegun1.addAnimation("right",gun2right)
    spritegun1.addAnimation("left",gun2)
    spritegun1.scale=0.1;     
    spritegun1.visible =false;
    spritegun2=createSprite(robot2.x+30,robot2.y,50,50)
    spritegun2.addAnimation("right",gun2right)
    spritegun2.addAnimation("left",gun2)
    spritegun2.scale=0.1;     
    spritegun2.visible =false;
    spritegun3=createSprite(robot3.x+30,robot3.y,50,50)
    spritegun3.addAnimation("right",gun2right)
    spritegun3.addAnimation("left",gun2)
    spritegun3.scale=0.1;     
    spritegun3.visible =false;
    surviver.debug=false;
    surviver.setCollider("rectangle",0,0,100,175)
    start2 = createSprite(840,365,1700,760)
    start2.shapeColor="white"
    start = createSprite(840,365,1700,760)
    start.addImage(startImg)
    start.scale=0.5;
    start.shapeColor="wihte"
    createEdgeSprites();
    //surviver.collide(edges)
camo2 =createSprite(870,720,260,150)
    camo2.visible = false;
  camo2.debug = true;
 healthbar=createSprite(1715,50,410,50)
healthbar.shapeColor="black"
bulletGroup = new Group();
bar1=createSprite(1895,50,40,40)
bar1.shapeColor="green"
bar2=createSprite(1855,50,40,40)
bar2.shapeColor="green"
bar3=createSprite(1815,50,40,40)
bar3.shapeColor="green"
bar4=createSprite(1775,50,40,40)
bar4.shapeColor="green"
bar5=createSprite(1735,50,40,40)
bar5.shapeColor="green"
bar6=createSprite(1695,50,40,40)
bar6.shapeColor="green"
bar7=createSprite(1655,50,40,40)
bar7.shapeColor="green"
bar8=createSprite(1615,50,40,40)
bar8.shapeColor="green"
bar9=createSprite(1575,50,40,40)
bar9.shapeColor="green"
bar10=createSprite(1535,50,40,40)
bar10.shapeColor="green"
shield=createSprite(surviver.x,surviver.y,70,110)
shield.setCollider("circle",0,0,50)
shield.debug=true;
shield.visible=false;

}

function draw(){
   background(bgimage);
 
 console.log("Sheild"+shieldFlag)
 if((keyWentDown("s"))&& shieldScore>0&&shieldFlag===0)
{
  shieldFlag = 1
}
else if((keyWentDown("s"))&&shieldFlag===1 && shieldScore>0)
{
  shieldFlag =0
}
else if(shieldScore<=0)
{
  shieldFlag=0  
}
  
 if( keyDown("q") &&  keyDown(RIGHT_ARROW)){
        surviver.changeAnimation("shooting",shootright)
  var bullet = createSprite(surviver.x +30,surviver.y-10,10,2);
  bullet.shapeColor = "white";
surviverBulletGroup.add(bullet)
bullet.lifetime = 100
bullet.velocityX=8

for (var i =0 ;i< bulletGroup.lenght;i++){

  bulletGroup.get(i).velocityX=5
}
}
if( keyDown("q") &&  keyDown(LEFT_ARROW)){
        
  surviver.changeAnimation("shooting",shoot);
  var bullet = createSprite(surviver.x -30,surviver.y-10,10,2);
  bullet.shapeColor = "white";
surviverBulletGroup.add(bullet)
bullet.lifetime = 100
bullet.velocityX=-8

for (var i =0 ;i< bulletGroup.lenght;i++){

  bulletGroup.get(i).velocityX=-8
}
}
//  if( surviver.x<=5||surviver.x>=1680){
//    surviver.velocityX=0;
//    surviver.velocityY=0; 
//  }

spritegun1.x=robot.x+30
spritegun1.y=robot.y+10
spritegun2.x=robot2.x+30
spritegun2.y=robot2.y+10
shield.x=surviver.x
shield.y=surviver.y
if(bulletGroup.isTouching(surviver)&& shieldFlag===0){
score--;
}
if(score<90&&score>80){
  bar1.shapeColor="black"
}
if(score<80&&score>70){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
}
if(score<70&&score>60){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
}
if(score<60&&score>50){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
  bar4.shapeColor="black"
}
if(score<50&&score>40){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
  bar4.shapeColor="black"
  bar5.shapeColor="black"
  bar6.shapeColor="yellow"
  bar7.shapeColor="yellow"
  bar8.shapeColor="yellow"
  bar9.shapeColor="yellow"
  bar10.shapeColor="yellow"
}
if(score<40&&score>30){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
  bar4.shapeColor="black"
  bar5.shapeColor="black"
  bar6.shapeColor="black"
  bar7.shapeColor="yellow"
  bar8.shapeColor="yellow"
  bar9.shapeColor="yellow"
  bar10.shapeColor="yellow"
}
if(score<30&&score>20){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
  bar4.shapeColor="black"
  bar5.shapeColor="black"
  bar6.shapeColor="black"
  bar7.shapeColor="black"
  bar8.shapeColor="red"
  bar9.shapeColor="red"
  bar10.shapeColor="red"
}
if(score<20&&score>10){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
  bar4.shapeColor="black"
  bar5.shapeColor="black"
  bar6.shapeColor="black"
  bar7.shapeColor="black"
  bar8.shapeColor="black"
  bar9.shapeColor="red"
  bar10.shapeColor="red"
}
if(score<10&&score>0){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
  bar4.shapeColor="black"
  bar5.shapeColor="black"
  bar6.shapeColor="black"
  bar7.shapeColor="black"
  bar8.shapeColor="black"
  bar9.shapeColor="black"
  bar10.shapeColor="red"
}
if(score<0){
  bar1.shapeColor="black"
  bar2.shapeColor="black"
  bar3.shapeColor="black"
  bar4.shapeColor="black"
  bar5.shapeColor="black"
  bar6.shapeColor="black"
  bar7.shapeColor="black"
  bar8.shapeColor="black"
  bar9.shapeColor="black"
  bar10.shapeColor="black"
 
}

// if(surviver.isTouching(radar)){
//  spritegun1.visible = true;
//   robot.x= surviver.x-90;
//   robot.y=surviver.y; }
// else{
//   spritegun1.visible=false;
// }

// if(surviver.isTouching(radar2)){
//   spritegun2.visible = true;
//   robot2.x= surviver.x-90;
//   robot2.y=surviver.y;
// }
// else{
//   spritegun2.visible=false;
// }
// if(surviver.isTouching(radar3)){
 
//   robot3.x= surviver.x-90;
//   robot3.y=surviver.y;
// }
//  if (surviver.isTouching(radar3)&&surviver.velocityX<-1){
//    robot3.x=surviver.x+90;
//  robot3.changeAnimation("running4",runningRobot2)
//  }
//  if (surviver.isTouching(radar3)&&surviver.velocityX>1){
//    robot3.x=surviver.x-90;
//   robot3.changeAnimation("running4",runningRobot2 )
//  }     

//  if (surviver.isTouching(radar2)&&surviver.velocityX<-1){
//    robot2.x=surviver.x+90;
//   // robot3.changeAnimation("running3",runningRobot)
//  }
//  if (surviver.isTouching(radar2)&&surviver.velocityX>1){
//    robot2.x=surviver.x-90;
//   //robot3.changeAnimation("running3",runningRobot)
//  }
//  if (surviver.isTouching(radar)&&surviver.velocityX === 8){
//   robot.velocityX=5 
//   robot.x=surviver.x-90;
//    spritegun1.visible = true
//   spritegun1.x=robot.x+30;
//   spritegun1.changeAnimation("right",gun2right)
//   // spritegun1.x=surviver.x+90;
//    robot.changeAnimation("running3",runningRobot)
//  }
//  if (surviver.isTouching(radar)&&surviver.velocityX===-8){
//   robot.velocityX=-5
//   robot.x=surviver.x+90;
//   spritegun1.x=robot.x-30;
//   spritegun1.visible = true;
//   spritegun1.changeAnimation("left",gun2)
   
//   robot.changeAnimation("running4",runningRobot2)
//  }

//robot animation
if(surviver.isTouching(radar)){
spawnBullet();

  if(surviver.velocityX ===0 && surviver.x>robot.x)
  {
    robot.x= surviver.x-70;
    robot.y=surviver.y;
    robot.velocityX =5
    for (var i =0 ;i< bulletGroup.lenght;i++){
   
      bulletGroup.get(i).velocityX=5
    }

    spritegun1.changeAnimation("right",gun2right)
    robot.changeAnimation("right",runningRobot)
    spritegun1.visible= true;
    spritegun1.x = robot.x +30;
    spritegun1.y = robot.y
  }
   
  if(surviver.velocityX ===0 && surviver.x<robot.x)
{
  robot.changeAnimation("left",runningRobot2)
robot.velocityX =-5
  robot.x= surviver.x+70;
    robot.y=surviver.y;
 spritegun1.visible= true;
  spritegun1.x = robot.x -30;
  spritegun1.y = robot.y
  spritegun1.changeAnimation("left",gun2)
  for (var i =0 ;i< bulletGroup.lenght;i++){
   
    bulletGroup.get(i).velocityX=-5
  }
}
  if( keyDown(RIGHT_ARROW) )
  {
    robot.changeAnimation("right",runningRobot)
    robot.x= surviver.x-70;
    robot.y=surviver.y;
    robot.velocityX =5

    spritegun1.visible= true;
    spritegun1.x = robot.x +30;
    spritegun1.y = robot.y
    spritegun1.changeAnimation("right",gun2right)
    for (var i =0 ;i< bulletGroup.lenght;i++){
   
      bulletGroup.get(i).velocityX=5
    }
  }
  
 if( keyDown(LEFT_ARROW) ){
  robot.changeAnimation("left",runningRobot2)
  robot.velocityX =-5

  robot.x= surviver.x+70;
    robot.y=surviver.y;
   spritegun1.visible= true;
    spritegun1.x = robot.x -30;
    spritegun1.y = robot.y
    spritegun1.changeAnimation("left",gun2)
    for (var i =0 ;i< bulletGroup.lenght;i++){
   
      bulletGroup.get(i).velocityX=-5
    }
  }
  

}
else{
  spritegun1.visible = false;

}

// robot2
if(surviver.isTouching(radar2)){
  spawnBullet2();
  if(surviver.velocityX ===0 && surviver.x>robot2.x)
  {
    robot2.x= surviver.x-70;
    robot2.y=surviver.y;
    robot2.velocityX =5
    for (var i =0 ;i< bulletGroup.lenght;i++){
   
      bulletGroup.get(i).velocityX=5
    }
    spritegun2.changeAnimation("right",gun2right)
    robot2.changeAnimation("right",runningRobot)
    spritegun2.visible= true;
    spritegun2.x = robot2.x +30;
    spritegun2.y = robot2.y
  }
  if(surviver.velocityX ===0 && surviver.x<robot2.x)
{
  robot2.changeAnimation("left",runningRobot2)
robot2.velocityX =-5
  robot2.x= surviver.x+70;
    robot2.y=surviver.y;
 spritegun2.visible= true;
  spritegun2.x = robot2.x -30;
  spritegun2.y = robot2.y
  spritegun2.changeAnimation("left",gun2)
  for (var i =0 ;i< bulletGroup.lenght;i++){
   
    bulletGroup.get(i).velocityX=-5
  }

}
  if( keyDown(RIGHT_ARROW) )
  {
    robot2.changeAnimation("right",runningRobot)
    robot2.x= surviver.x-70;
    robot2.y=surviver.y;
    robot2.velocityX =5
    for (var i =0 ;i< bulletGroup.lenght;i++){
   
      bulletGroup.get(i).velocityX=5
    }
    spritegun2.visible= true;
    spritegun2.x = robot2.x +30;
    spritegun2.y = robot2.y
    spritegun2.changeAnimation("right",gun2right)
  }
  
 if( keyDown(LEFT_ARROW) ){
  robot2.changeAnimation("left",runningRobot2)
  robot2.velocityX =-5

  robot2.x= surviver.x+70;
    robot2.y=surviver.y;
   spritegun2.visible= true;
    spritegun2.x = robot2.x -30;
    spritegun2.y = robot2.y
    spritegun2.changeAnimation("left",gun2)
    for (var i =0 ;i< bulletGroup.lenght;i++){
   
      bulletGroup.get(i).velocityX=-5
    }
  }
  

}
else{
  spritegun2.visible = false;
}
//robot3
if(surviver.isTouching(radar3)){

  if(surviver.velocityX ===0 && surviver.x>robot3.x)
  {
    robot3.x= surviver.x-70;
    robot3.y=surviver.y;
    robot3.velocityX =5

    spritegun3.changeAnimation("right",gun2right)
    robot3.changeAnimation("right",runningRobot)
    spritegun3.visible= true;
    spritegun3.x = robot3.x +30;
    spritegun3.y = robot3.y
  }
  if(surviver.velocityX ===0 && surviver.x<robot3.x)
{
  robot3.changeAnimation("left",runningRobot2)
robot3.velocityX =-5
  robot3.x= surviver.x+70;
    robot3.y=surviver.y;
 spritegun3.visible= true;
  spritegun3.x = robot3.x -30;
  spritegun3.y = robot3.y
  spritegun3.changeAnimation("left",gun2)

}
  if( keyDown(RIGHT_ARROW) )
  {
    robot3.changeAnimation("right",runningRobot)
    robot3.x= surviver.x-70;
    robot3.y=surviver.y;
    robot3.velocityX =5

    spritegun3.visible= true;
    spritegun3.x = robot3.x +30;
    spritegun3.y = robot3.y
    spritegun3.changeAnimation("right",gun2right)
  }
  
 if( keyDown(LEFT_ARROW) ){
  robot3.changeAnimation("left",runningRobot2)
  robot3.velocityX =-5

  robot3.x= surviver.x+70;
    robot3.y=surviver.y;
   spritegun3.visible= true;
    spritegun3.x = robot3.x -30;
    spritegun3.y = robot3.y
    spritegun3.changeAnimation("left",gun2)
  }
  

}
else{
  spritegun3.visible = false;
}
if (surviver.isTouching(radar)&&surviver.isTouching(camo2)){
  robot.x = 50
  robot.y=350;
  robot.velocityX=0;
  robot.velocityY=5;
  spritegun1.visible = false;

}
if (surviver.isTouching(radar2)&&surviver.isTouching(camo2)){
  robot2.x = 850
  robot2.y=100;
  robot2.velocityX=5;
  robot2.velocityY=0;
}
if (surviver.isTouching(radar3)&&surviver.isTouching(camo2)){
  robot3.x = 1650
  robot3.y=350;
  robot3.velocityX=0;
  robot3.velocityY=5;
}
   console.log(robot.y)
   radar.x=robot.x;
   radar.y=robot.y;
   radar2.x=robot2.x;
   radar2.y=robot2.y;
   radar3.x=robot3.x;
   radar3.y=robot3.y;
if(robot.velocityX===-5)
{
  robot.changeAnimation("left",runningRobot2)
}
if(robot.velocityX===5)
{
  robot.changeAnimation("right",runningRobot)
}
if(robot2.velocityX===-5)
{
  robot2.changeAnimation("running4",runningRobot2)
}
if(robot2.velocityX===5)
{
  robot2.changeAnimation("running3",runningRobot)
}
if(robot3.velocityX===-5)
{
  robot3.changeAnimation("running4",runningRobot2)
}
if(robot3.velocityX===5)
{
  robot3.changeAnimation("running3",runningRobot)
}
   surviver.collide(wall1)
   surviver.collide(wall2)
   surviver.collide(wall3)
   surviver.collide(wall4)
   surviver.collide(wall5)
   surviver.collide(wall6)
   surviver.collide(wall7)
   surviver.collide(wall8)
   surviver.collide(wall9)
   surviver.collide(wall10)
   surviver.collide(wall11)
  surviver.collide(wall12)
   surviver.collide(wall13)
   surviver.collide(wall14)
 
   
   
 // radar1.display();
   if(gameState === "serve"){
     textSize(60);
     fill("black")
     text("PRESS SPACE BAR TO START ",500,150)
   }
   if(keyDown("space") && gameState === "serve"){
    robot2.velocityX = 5; 
    robot.velocityY = 5;
    robot3.velocityY = 5; 
    gameState = "play"
  }
   if(score<=0)
   {
     background(0)
     gameState="end"
     textSize(80)
     fill("RED")
     text("GAMEOVER",800,500)
   }
   if(gameState==="end")
   {
    camo2.destroy();
    wall1.destroy()
    wall2.destroy()
    wall3.destroy()
    wall4.destroy()
    wall5.destroy();
    wall6.destroy()
    wall7.destroy()
    wall8.destroy()
    wall9.destroy()
    wall10.destroy();
    wall11.destroy()
    wall12.destroy()
    wall13.destroy()
    wall14.destroy()
    
   }
   if(gameState==="play"){
 start.visible=false;
 start2.visible=false;
  if(robot2.x === 1090 && robot2.y === 100 ){
    robot2.velocityX = 0;
    robot2.velocityY = 5;
  }
  // if (robot2.x === 1090&& robot2.y===583){
  //   robot2.velocityY = 0
  //   robot2.velocityX= -9
  //   robot2.changeAnimation("running4",runningRobot2)
  // }
  if (robot2.x === 1090&& robot2.y>=583){
    robot2.velocityY = 0
    robot2.velocityX= -5
    //robot2.changeAnimation("running4",runningRobot2)
  }
  if (robot2.x <= 930&& robot2.y>=583){
    robot2.velocityY = -5
    robot2.velocityX= 0
    //robot2.changeAnimation("running4",runningRobot2)
  }
  if(robot2.x===930&& robot2.y<=260&&robot2.y>=110){
    robot2.velocityY = 0;
    robot2.velocityX=-5;
  }
  if (robot2.x<=760&&robot2.y===260&&robot2.x>=590){
    robot2.velocityX=0;
    robot2.velocityY=5;
  }
  if (robot2.x===760&&robot2.y>=500){
    robot2.velocityY=0;
    robot2.velocityX=-5;
  }
  if(robot2.x<=580&&robot2.y===500){
    robot2.velocityX=0;
    robot2.velocityY=-5;
  }
  if(robot2.x===580&&robot2.y<=100){
    robot2.velocityY=0;
    robot2.velocityX=5
  }
  //of robot1 AI
  if(robot.x===50&&robot.y>=620){
    robot.velocityY=0;
    robot.velocityX=5;
  }
  if(robot.x>=400&&robot.y===620&&robot.x<=401){
    robot.velocityY=-5;
    robot.velocityX=0;
  }
  if(robot.x===400&&robot.y<=480&&robot.y>=100){
    robot.velocityY=0;
    robot.velocityX=-5;
  }
  if(robot.x<=200&&robot.y===480&&robot.x>=60){
    robot.velocityY=-5;
    robot.velocityX=0;
  }
  if(robot.x===200&&robot.y<=325&&robot.y>=210){
    robot.velocityY=0;
    robot.velocityX=5;
  }
  if(robot.x>=330&&robot.y===325&&robot.x<=540){
    robot.velocityY=-5;
    robot.velocityX=0;
  }
  if(robot.x===330&&robot.y<=180&&robot.y>=100){
    robot.velocityY=0;
    robot.velocityX=-5;
  }
  if(robot.x<-35){
    robot.x=0;
    robot.y=50;
    robot.velocityX=5;
  }
  if(robot.x>=560&&robot.y===50){
    robot.velocityX=0;
    robot.velocityY=5;
  }
  if(robot.x===560&&robot.y>=620){
    robot.velocityY=0
    robot.velocityX=-5;
  }


  //Ai for robot3 
if(robot3.x===1650&&robot3.y>=600){
  robot3.velocityX=-5;
  robot3.velocityY=0;
}
if(robot3.x<=1250&&robot3.y===600&&robot3.x>=1250){
  robot3.velocityX=0
  robot3.velocityY=-5;
}
if(robot3.x===1250&&robot3.y<=480&&robot3.y>60){
robot3.velocityY=0;
robot3.velocityX=5;
}
if(robot3.x>=1480&&robot3.y===480&&robot3.x<1640){
  robot3.velocityY=-5;
  robot3.velocityX=0;
}
if(robot3.x===1480&&robot3.y<=320&&robot3.y>190){
  robot3.velocityX=-5;
  robot3.velocityY=0;
}
if(robot3.x<=1300&&robot3.y===320&&robot3.x>1120){
  robot3.velocityY=-5;
  robot3.velocityX=0
}
if(robot3.x===1300&&robot3.y<=180&&robot3.y>=60){
  robot3.velocityY=0;
  robot3.velocityX=5
}
if(robot3.x>=1800&&robot3.y===180){
  robot3.x=1690;
  robot3.y=50;
  robot3.velocityX=-5;
  robot3.velocityY=0;
}
if(robot3.x<=1110&&robot3.y===50){
  robot3.velocityX=0;
  robot3.velocityY=5;
}
if(robot3.x===1110&&robot3.y>=600){
  robot3.velocityY=0;
  robot3.velocityX=5;
}
  // if(robot.x<=400&&robot.y===610&&robot.x<=550){
  //   robot.velocityY=-5;
  //   robot.velocityX=0;
  // }
  
  
  
  
   if (keyWentDown(RIGHT_ARROW)){

     if(shieldFlag===1)
      {   
        ellipse(surviver.x,surviver.y,80,110)
        if(bulletGroup.bounceOff(shield))
        {
        shieldScore=shieldScore-5
        }
      } 
       surviver.velocityX = 8;
       surviver.changeAnimation("running2",runningSurvivor2);
       walk.play();
   }
   if (keyWentUp(RIGHT_ARROW)){
    if(shieldFlag===1)
      {   
        ellipse(surviver.x,surviver.y,80,110)
        if(bulletGroup.bounceOff(shield))
        {
        shieldScore=shieldScore-5
        }
      } 
     
    surviver.velocityX = 0;
    surviver.changeAnimation("standing2",standingSurvivor2);
    walk.stop();
   }
   
   if (keyWentDown(LEFT_ARROW)){
    if(shieldFlag===1)
      {   
        ellipse(surviver.x,surviver.y,80,110)
        if(bulletGroup.bounceOff(shield))
        {
        shieldScore=shieldScore-5
        }
      } 
     
    surviver.velocityX =- 8;
    surviver.changeAnimation("running",runningSurvivor);
    walk.play();
   

}
if(keyWentUp(LEFT_ARROW)){
  if(shieldFlag===1)
      {   
        ellipse(surviver.x,surviver.y,80,110)
        if(bulletGroup.bounceOff(shield))
        {
        shieldScore=shieldScore-5
        }
      } 
     surviver.velocityX =0;
    surviver.changeAnimation("standing",standingSurvivor);
    walk.stop();
   }

   if (keyWentDown(UP_ARROW)){
    if(shieldFlag===1)
      {   
        ellipse(surviver.x,surviver.y,80,110)
        if(bulletGroup.bounceOff(shield))
        {
        shieldScore=shieldScore-5
        }
      } 
     
    surviver.velocityY = -8;
    surviver.changeAnimation("running2",runningSurvivor2);
    walk.play();
}
if (keyWentUp(UP_ARROW)){
  if(shieldFlag===1)
      {   
        ellipse(surviver.x,surviver.y,80,110)
        if(bulletGroup.bounceOff(shield))
        {
        shieldScore=shieldScore-5
        }
      } 
     surviver.velocityY = 0;
 surviver.changeAnimation("standing2",standingSurvivor2);
 walk.stop();
}
if (keyWentDown(DOWN_ARROW)){
  if(shieldFlag===1)
  {   
    ellipse(surviver.x,surviver.y,80,110)
    if(bulletGroup.bounceOff(shield))
    {
    shieldScore=shieldScore-5
    }
  } 
  surviver.velocityY = 8;
  surviver.changeAnimation("running2",runningSurvivor2);
  walk.play();
}
if (keyWentUp(DOWN_ARROW)){
  if(shieldFlag===1)
      {   
        ellipse(surviver.x,surviver.y,80,110)
        if(bulletGroup.bounceOff(shield))
        {
        shieldScore=shieldScore-5
        }
      } 
      
  surviver.velocityY = 0;
surviver.changeAnimation("standing2",standingSurvivor2);
walk.stop();
}

if(shieldFlag===1 && (surviver.velocityX===0||surviver.velocityY===0)){
  ellipse(surviver.x,surviver.y,80,110)
  if(bulletGroup.bounceOff(shield))
  {
  shieldScore=shieldScore-5
  }
}
}  
   fill(116,130,104,150)
   rectMode(CENTER)
   noStroke()
   rect(870,720,260,150)
   fill(100,210,50,100)
   noStroke()
   
 ellipse(robot.x,robot.y,150,150)
 ellipse(robot2.x,robot2.y,150,150)
 ellipse(robot3.x,robot3.y,150,150)
drawSprites();
fill("red")
textSize(25);
stroke(4)
text("Survivor Health",1700,20)
textSize(50)
fill("black")
  text (mouseX+":"+mouseY+":"+surviver.x+":"+surviver.y,720,70)
  textSize(50);
  stroke(4);
 text("score:"+score,100,70)
 text("Shield score:"+shieldScore,100,110)
}

function keyPressed(){
 if (keyCode===65){
   surviver.changeAnimation("shooting",shoot)
   
 }
}


function spawnBullet(){
  if (frameCount % 20 === 0){


if(surviver.velocityX ===0 && surviver.x>robot.x)
{
  robot.x= surviver.x-70;
  robot.y=surviver.y;
  robot.velocityX =5
  
  spritegun1.changeAnimation("right",gun2right)
  robot.changeAnimation("right",runningRobot)
  spritegun1.visible= true;
  spritegun1.x = robot.x +30;
  spritegun1.y = robot.y
  var bullet = createSprite(spritegun1.x +30,spritegun1.y-10,10,2);
  bullet.shapeColor = "white";
  bulletGroup.add(bullet)
  bullet.lifetime = 100
  bullet.velocityX=5

}
 
if(surviver.velocityX ===0 && surviver.x<robot.x)
{
robot.changeAnimation("left",runningRobot2)
robot.velocityX =-5
robot.x= surviver.x+70;
  robot.y=surviver.y;
spritegun1.visible= true;
spritegun1.x = robot.x -30;
spritegun1.y = robot.y
spritegun1.changeAnimation("left",gun2)
var bullet = createSprite(spritegun1.x -30,spritegun1.y-10,10,2);
bullet.shapeColor = "white";
bulletGroup.add(bullet)
bullet.lifetime = 100
bullet.velocityX=-5
}
if( keyDown(RIGHT_ARROW) )
{
  robot.changeAnimation("right",runningRobot)
  robot.x= surviver.x-70;
  robot.y=surviver.y;
  robot.velocityX =5

  spritegun1.visible= true;
  spritegun1.x = robot.x +30;
  spritegun1.y = robot.y
  spritegun1.changeAnimation("right",gun2right)
  var bullet = createSprite(spritegun1.x +30,spritegun1.y-10,10,2);
  bullet.shapeColor = "white";
bulletGroup.add(bullet)
bullet.lifetime = 100
bullet.velocityX=5  
}

if( keyDown(LEFT_ARROW) ){
robot.changeAnimation("left",runningRobot2)
robot.velocityX =-5

robot.x= surviver.x+70;
  robot.y=surviver.y;
 spritegun1.visible= true;
  spritegun1.x = robot.x -30;
  spritegun1.y = robot.y
  spritegun1.changeAnimation("left",gun2)
  var bullet = createSprite(spritegun1.x +30,spritegun1.y-10,10,2);
  bullet.shapeColor = "white";
bulletGroup.add(bullet)
bullet.lifetime = 100
bullet.velocityX=-5

}

}

}
function spawnBullet2(){
  if (frameCount % 20 === 0){


if(surviver.velocityX ===0 && surviver.x>robot2.x)
{
  robot2.x= surviver.x-70;
  robot2.y=surviver.y;
  robot2.velocityX =5
  
  spritegun2.changeAnimation("right",gun2right)
  robot2.changeAnimation("right",runningRobot)
  spritegun2.visible= true;
  spritegun2.x = robot2.x +30;
  spritegun2.y = robot2.y
  var bullet2 = createSprite(spritegun2.x +30,spritegun2.y-10,10,2);
  bullet2.shapeColor = "white";
  bulletGroup.add(bullet2)
  bullet2.lifetime = 100
  bullet2.velocityX=5

}
 
if(surviver.velocityX ===0 && surviver.x<robot2.x)
{
robot2.changeAnimation("left",runningRobot2)
robot2.velocityX =-5
robot2.x= surviver.x+70;
  robot2.y=surviver.y;
spritegun2.visible= true;
spritegun2.x = robot2.x -30;
spritegun2.y = robot2.y
spritegun2.changeAnimation("left",gun2)
var bullet2 = createSprite(spritegun2.x -30,spritegun2.y-10,10,2);
bullet2.shapeColor = "white";
bulletGroup.add(bullet2)
bullet2.lifetime = 100
bullet2.velocityX=-5
}
if( keyDown(RIGHT_ARROW) )
{
  robot2.changeAnimation("right",runningRobot)
  robot2.x= surviver.x-70;
  robot2.y=surviver.y;
  robot2.velocityX =5

  spritegun2.visible= true;
  spritegun2.x = robot2.x +30;
  spritegun2.y = robot2.y
  spritegun2.changeAnimation("right",gun2right)
  var bullet2 = createSprite(spritegun2.x +30,spritegun2.y-10,10,2);
  bullet2.shapeColor = "white";
bulletGroup.add(bullet2)
bullet2.lifetime = 100
bullet2.velocityX=5  
}

if( keyDown(LEFT_ARROW) ){
robot2.changeAnimation("left",runningRobot2)
robot2.velocityX =-5

robot2.x= surviver.x+70;
  robot2.y=surviver.y;
 spritegun2.visible= true;
  spritegun2.x = robot2.x -30;
  spritegun2.y = robot2.y
  spritegun2.changeAnimation("left",gun2)
  var bullet2 = createSprite(spritegun2.x +30,spritegun2.y-10,10,2);
  bullet2.shapeColor = "white";
bulletGroup.add(bullet2)
bullet2.lifetime = 100
bullet2.velocityX=-5

}

}

}

