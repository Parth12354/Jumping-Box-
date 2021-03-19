var canvas;
var music;
var block1,block2,block3,block4
var ball
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
    block1=createSprite(20,580,150,20)
    block2=createSprite(180,580,150,20)
    block3=createSprite(340,580,150,20)
    block4=createSprite(500,580,150,20)
    ball=createSprite(300,399,50,50)
    block1.shapeColor="olive"
    block2.shapeColor="blue"
    block3.shapeColor="yellow"
    block4.shapeColor="orange"
    ball.shapeColor="white"
    ball.velocityX=4
    ball.velocityY=5
    ball.x=Math.round(random(50,550))
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("red");
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if (block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColor=block1.shapeColor
        music.play()


    }
    if (block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor=block2.shapeColor
        music.stop()
        ball.velocityX=0
        ball.velocityY=0

    }
    if (block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor=block3.shapeColor
       

    }
    if (block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor=block4.shapeColor
       


    }



    //create edgeSprite
    

    //add condition to check if box touching surface and make it box
    drawSprites()
}
