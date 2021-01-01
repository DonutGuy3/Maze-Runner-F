var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27;

var boy, boyImage;
var bully, bullyImage;
var bully1, bully1Image;
var treasure, treasureImage;
var lifetime = 100
var gameState = "play"





function preload(){
  
  boyImage = loadImage("Good Boy.png")
  bullyImage = loadImage("Bully.jpg")
  bully1Image = loadImage("Bully1.png")
  treasureImage = loadImage("Treasure.png")
}

function setup(){
  createCanvas(600, 600);
  
  wall1 = createSprite(300, 50, 500, 10);
  wall2 = createSprite(300, 500, 500, 10);
  wall3 = createSprite(550, 220, 10, 350);
  wall4 = createSprite(55, 100, 10, 100);
  wall5 = createSprite(55, 350, 10, 290);
  wall6 = createSprite(110, 200, 120, 10);
  wall7 = createSprite(170, 167, 10, 75);
  wall8 = createSprite(140, 134, 50, 10);
  wall9 = createSprite(240, 167, 10, 75);
  wall10 = createSprite(270, 200, 70, 10);
  wall11 = createSprite(300, 130, 10, 150);
  wall12 = createSprite(130, 350, 10, 150);
  wall13 = createSprite(155, 425, 60, 10);
  wall14 = createSprite(180, 465, 10, 70);
  wall15 = createSprite(200, 310, 10, 75);
  wall16 = createSprite(225, 350, 60, 10);
  wall17 = createSprite(250, 390, 10, 80);
  wall18 = createSprite(280, 430, 70, 10);
  wall19 = createSprite(310, 460, 10, 70);
  wall20 = createSprite(310, 350, 10, 160);
  wall21 = createSprite(280, 275, 50, 10);
  wall22 = createSprite(380, 280, 10, 300);
  wall23 = createSprite(410, 350, 60, 10);
  wall24 = createSprite(440, 420, 10, 150);
  wall25 = createSprite(510, 135, 70, 10);
  wall26 = createSprite(420, 210, 70, 10);
  wall27 = createSprite(510, 280, 70, 10);
  
  boy = createSprite(85, 165, 10, 1);
  boy.addImage(boyImage)
  boy.scale = 0.1;
  
  bully = createSprite(95, 450, 10, 10)
  bully.addImage(bullyImage)
  bully.scale = 0.12
  bully.velocityY = -3
  
  bully1 = createSprite(350, 450, 10, 10)
  bully1.addImage(bully1Image)
  bully1.scale = 0.12;
  bully1.velocityY = -2
  
  treasure = createSprite(530, 450, 10, 10)
  treasure.addImage(treasureImage)
  treasure.scale = 0.2
}

function draw(){
  background("white");
  
  text("Lifetime: " + lifetime, 500, 30)
  
  if (gameState === "play"){
    

  
  if (keyDown("UP")){
    boy.velocityY = -2
    boy.velocityX = 0
  }
  
  if (keyDown("DOWN")){
    boy.velocityY = 2
    boy.velocityX = 0
  }
  
  if (keyDown("LEFT")){
    boy.velocityX = -2
    boy.velocityY = 0
  }
  
  if (keyDown("RIGHT")){
    boy.velocityX = 2
    boy.velocityY = 0
  }
  
  if (boy.isTouching(wall1) || boy.isTouching(wall2)|| boy.isTouching(wall3) || boy.isTouching(wall4) || boy.isTouching(wall5) || boy.isTouching(wall6) || boy.isTouching(wall7) || boy.isTouching(wall8) || boy.isTouching(wall9) || boy.isTouching(wall10) || boy.isTouching(wall11) || boy.isTouching(wall12) || boy.isTouching(wall13) || boy.isTouching(wall14) || boy.isTouching(wall15) || boy.isTouching(wall16) || boy.isTouching(wall17) || boy.isTouching(wall18) || boy.isTouching(wall19) || boy.isTouching(wall20) || boy.isTouching(wall21) || boy.isTouching(wall22) || boy.isTouching(wall23) || boy.isTouching(wall24) || boy.isTouching(wall25) || boy.isTouching(wall26) || boy.isTouching(wall27)){
    boy.x = 85;
    boy.y = 165;
    lifetime = lifetime - 1
  }
  
  

  bully.bounceOff(wall6)
  bully.bounceOff(wall2)
  
  bully1.bounceOff(wall1)
  bully1.bounceOff(wall2)
    
  if(boy.isTouching(treasure)){
   bully.velocityY = 0
    
    bully1.velocityY = 0
    
    boy.velocityY = 0
    boy.x = 85
    boy.y = 165
    
    stroke("blue")
    fill("blue")
    textSize(50)
    text("CONGRATULATIONS YOU WIN", 150, 300)
  }
    
  if (lifetime === 0 || boy.isTouching(bully) || boy.isTouching(bully1)){
    gameState = "end"
  }
  
  drawSprites();
    
  }
  
  if (gameState === "end"){
        bully.velocityY = 0
    
    bully1.velocityY = 0
    
    boy.velocityY = 0
    boy.x = 85
    boy.y = 165
    
    stroke("red")
    fill("red")
    textSize(50)
    text("YOU LOSE ", 150, 300)
    
    }
  
}