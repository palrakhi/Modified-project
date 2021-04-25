var mario, ground,tree,bg,brick1
var bgimage,marioimage,treeimage,brick1image,brick2image,brick3image
var score=0
var heart,heart1,heart2,heartimage,heart1image,heart2image
var bg 
var PLAY=1
var END=0
var brickgroup;
var gamestate=PLAY
function preload(){

    heart1image=loadImage("rakhi.png")
    heartimage=loadImage("rakhi.png")
    heart2image=loadImage("rakhi.png")
    bgimage=loadImage("bg.jpg")
    gameover1Img=loadImage("gameover1.jpg")
    marioimage=loadAnimation("harsh kumar1.png","rk.png","pk.png")
    brick1image=loadImage("hr.png")

}
function setup(){

createCanvas(1500,800)
bg=createSprite(0,height/2)
bg.addImage (bgimage)
bg .scale=4
bg.velocityX=-2
// ground=createSprite(750,780,1500,20)
 //ground.x = ground.width /2;
 //ground.velocityX = -(6 + 3*score/100);
 
 //gameOver = createSprite(300,100);
 //gameOver.addImage(gameover1Img);
 

mario=createSprite(100,650,50,50)
mario.addAnimation("mariorunning",marioimage)
mario.scale=0.5

heart=createSprite(1200,100,20,20)
heart.scale=0.05;
heart.addImage(heartimage);

heart1=createSprite(1300,100);
heart1.scale=0.05;
heart1.addImage(heart1image);
heart2=createSprite(1400,100,20,20);
heart2.scale=0.05;
heart2.addImage(heart2image);

brickgroup= new Group();



}


function draw(){
background("white")
score = Math.round(World.frameCount/4);
textSize(30)
fill("black")
text("Score: "+ score, 1300, 200);



if(gamestate===PLAY){
 //  if(keyDown("space")&& mario.y>=770){
   //     mario.velocityY=-10
  //  }
  //  mario.velocityY=mario.velocityY+0.8 
    
}

if(bg.x<100){
    bg.x=bg.width/2
}
if (keyDown("left") && mario.x >= 50)
{ mario.x= mario.x- 12}

if (keyDown("right") && mario.x <= 1400)
{ mario.x= mario.x+ 12}

if (keyDown("up") && mario.y >= 50)
{ mario.y= mario.y- 12}

if (keyDown("down") && mario.y <= 700)
{ mario.y= mario.y+ 12} 

if (brickgroup.isTouching(mario)){
    heart.destroy()
} 




spawnobstacles();
drawSprites();
}

function spawnobstacles()
{
    if(frameCount%40===0){
        brick1=createSprite(1500,730,50,50)
        var rand=Math.round(random(0,770))
        brick1.y=rand
        brick1.velocityX=-5
        brick1.lifetime = 300;
        //brick1.scale= 0.2
        brick1.scale=Math.round(random(0.2,0.6))
        brick1.addImage(brick1image)
        brickgroup.add(brick1);
    }
}