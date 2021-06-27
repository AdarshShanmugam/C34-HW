//Create variables here
var dog, happyDog, dogImg, database, foodS, foodStock;

function preload()
{
	//load images here
  dogHappy = loadImage ("images/dogImg1.png");
  dogImg = loadImage ("images/dogImg.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);


  dog = createSprite (400, 350, 20, 40);
  dog.addImage ("normal", dogImg);
  dog.addImage ("happy", dogHappy);
  dog.scale = 0.5;
}


function draw() {  
  background (46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeImage("happy", dogHappy);
  }


  drawSprites();
  //add styles here
  textSize(20);
  fill("white")
  stroke("white");
  text("Note: Press UP_ARROW to feed the dog", 200, 100);
  text("FoodStock: "+ foodS, 200, 50);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;

  }else{
    x=x-1;
  }


  database.ref('/').update({
    food: x
  })
 
}

 

