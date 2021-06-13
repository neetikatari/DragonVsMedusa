var medusa,medusaImage
var dragon,dragonImage
var demon,demonImage
var form
var gameState = 0

function preload (){
  medusaImage = loadAnimation("Images/Medusa/Attack1.png","Images/Medusa/Attack2.png",
  "Images/Medusa/Attack3.png","Images/Medusa/Attack5.png","Images/Medusa/Attack6.png")

  dragonImage = loadAnimation("Images/Dragon/Attack1.png","Images/Dragon/Attack2.png",
  "Images/Dragon/Attack3.png","Images/Dragon/Attack4.png")

  fireImage = loadAnimation("Images/Dragon/Fire_Attack1.png","Images/Dragon/Fire_Attack2.png"
  ,"Images/Dragon/Fire_Attack3.png","Images/Dragon/Fire_Attack4.png","Images/Dragon/Fire_Attack5.png")

  demonImage = loadAnimation("Images/Demon/Attack1.png","Images/Demon/Attack2.png",
  "Images/Demon/Attack3.png","Images/Demon/Attack4.png")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  medusa = createSprite(400, 200, 50, 50);
  medusa.addAnimation("mnsakj",medusaImage)
  medusa.scale = 3

  dragon = createSprite(600,400,50,50)
  dragon.addAnimation("kjk",dragonImage)

  form = new Form()
  
}

function draw() {
  background(255,255,255);
  if(gameState === 0){
    form.display();
  } 
  else if(gameState === 1){
    //play game
    if(keyDown("space")){
      throwFire();
    }
    dragon.x = 400
    dragon.y = mouseY 
    spawnDemon();
    drawSprites();
  }
  else if(gameState === 2){
    //story

  }
  else if (gameState === 3){
    //how to play

  }
  else if (gameState === 2){
    //select bg

  }
  
}

function throwFire(){
  fire = createSprite(dragon.x,dragon.y,30,30)
  fire.addAnimation("jkhjk",fireImage)
  fire.velocityX =6
}
function spawnDemon(){
  if(frameCount %40 ===0){
  demon = createSprite(600,400,30,30)
  demon.y = Math.round(random(50,800))
  demon.addAnimation("jkhjk",demonImage)
  demon.velocityX = -6
  }
}