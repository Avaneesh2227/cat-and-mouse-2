
var bgImg, cat_move, catImg1, catImg2, mouse_move, mouseImg1, mouseImg2, cat, mouse, garden

function preload() {
    //load the images here

    bgImg = loadImage("images/garden.png") ;
   catImg1= loadImage("images/cat1.png");
   catImg2= loadImage("images/cat4.png");
   cat_move=loadAnimation("images/cat2.png","images/cat3.png");
   mouseImg1= loadImage("images/mouse1.png");
   mouseImg2= loadImage("images/mouse4.png");
   mouse_move=loadAnimation("images/mouse2.png","images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(200,180,400,20);
garden.addAnimation("BG",bgImg)

cat= createSprite(600,450,50,50);
cat.addAnimation("restingcat", catImg1);
cat.addAnimation("movingcat", cat_move);
cat.addAnimation("finalcat", catImg2);
cat.scale =0.15
cat.debug=true
cat.setCollider("rectangle",0,0,cat.width,cat.height);

mouse= createSprite(75,450,50,50);
mouse.addAnimation("restingmouse", mouseImg1);
mouse.addAnimation("movingmouse", mouse_move);
mouse.addAnimation("finalmouse", mouseImg2);
mouse.scale =0.1
mouse.debug=true

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x- mouse.x < cat.width/2 - mouse.width/2){
        cat.changeAnimation("finalcat")
        mouse.changeAnimation("finalmouse");
        cat.velocityX=0;
        cat.x= 150;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode === LEFT_ARROW){
    mouse.changeAnimation("movingmouse");
    cat.changeAnimation("movingcat");
    cat.velocityX=-4

}


}
