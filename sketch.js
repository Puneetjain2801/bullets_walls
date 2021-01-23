var speed
var weight
var speed2
var speed3
var speed4
var weight2
var weight3
var weight4
var deformation
var car1
var car2
var car3
var car4
var wall1
var wall2
var wall3
var wall4



function setup(){
  createCanvas(600, 600)

  weight = random(400,1500)
  speed = random(55, 90)

  weight2 = random(400,1500)
  speed2 = random(55, 90)
  
  weight3 = random(400,1500)
  speed3 = random(55, 90)
  
  weight4 = random(400,1500)
  speed4 = random(55, 90)
  
  
  car1 = createSprite(50, 100, 10, 10)
  car1.velocityX = speed/10
  wall1 = createSprite(370, 100, 10, 50)

  //car2 = createSprite(50, 200, 10, 10)
  //car2.velocityX = speed2/10
  //wall2 = createSprite(370, 200, 10, 50)
  
  
  //car3 = createSprite(50, 300, 10, 10)
  //wall3 = createSprite(370, 300, 10, 50)
  //car3.velocityX = speed3/10

  //car4 = createSprite(50, 400, 10, 10)
  //wall4 = createSprite(370, 400,10, 50 )
  //car4.velocityX = speed4/ 10


}


function draw(){


  background("black")
  if (wall1.x - car1.x < (car1.width + wall1.width)/2) {
    deformation = Math.round(0.5 * speed * weight * speed/22500)
    car1.velocityX = 0
    if (deformation < 100){
      car1.shapeColor = "green"
    }
    if (deformation > 100 && deformation > 180){
      car1.shapeColor = "yellow"
    }
    if (deformation < 180){
      car1.shapeColor = "red"
    }

  
  }

 drawSprites()
}

