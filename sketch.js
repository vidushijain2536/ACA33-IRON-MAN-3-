
var bg, backgroundImg;
var ironman,man;
var rockImg,rockGroup;
var diamondGroup,diamondImg;
var score=0;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironman = loadImage("images/iron.png")
  rockImg = loadImage("images/stone.png");
  diamondImg= loadImage("images/diamond.png")

}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  man =createSprite(100,500)
  man.addImage(ironman)
  man.scale=0.3
  ground = createSprite(200,585,2000,10);
  ground.visible =false;
  man.setCollider("rectangle",10,10,300,300);
  rockGroup=new Group();
  diamondGroup=new Group();
  
 
}

function draw() {
     if (keyDown("up")){
     man.velocityY = -10;}
    if (keyDown("left")){
      man.x = man.x -7;
    }
    if (keyDown("right")){
      man.x = man.x+7;}

    
  man.velocityY = man.velocityY + 0.5
  
  man.collide(ground)
  bg.velocityY=-10;
  if (bg.y<200){
    bg.y=bg.width/4;}

   
    generateDiamonds();
    for(var i = 0 ; i < (diamondGroup).length;i++){
     temp=(diamondGroup).get(i);
    if(temp.isTouching(man)){
        score++;
        temp.destroy();
        temp=null;
      }

      
    }
    generaterock ();
for (var i = 0; i <rockGroup.length; i++){
      var temp = rockGroup.get(i);
      if(temp.isTouching(man)){
        man.collide(temp);
      }
    
  }
    
    drawSprites();
    textSize(20)
   text("diamonds collected"+score,500,50);
}
function generaterock(){
  if ( frameCount % 70 ===0){
    var rock = createSprite(120,120,40,10);
    rock.x=random(50,450);
    rock.addImage(rockImg);
    rock.scale =1;
    rock.velocityY= 5;
    rockGroup.add(rock);
    
  }

}
function generateDiamonds(){
  if (frameCount % 50 === 0) {
    var diamond = createSprite(1200,120,40,10);
    diamond.addImage(diamondImg)
    diamond.x = Math.round(random(80,400));
    diamond.scale = 0.5;
    diamond.velocityY= 3;
    diamond.lifetime = 1200;
    diamondGroup.add(diamond);
  }

}
