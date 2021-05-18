
function preload() {
    //load the images here
cat1=loadanimation("cat1.png")
cat2=loadanimation("cat2.png")
cat3=loadanimation("cat3.png")
cat4=loadanimation("cat4.png")
garden=loadImage("garden.png")
mousel=loadanimation("mouse1.png")
mouse2=loadanimation("mouse2.png")
mouse3=loadanimation("mouse3.png")
mouse4=loadanimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat.createSprite()
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width/2)){

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===left_arrow){
    mouse.addAnimation("mouse2,png")
    mouse.changeAnimation(mouseTeasing)
    mouse.framedelay=25
}


}
