var ball,img,paddle;
function preload() {
  ballpic= loadImage("ball.png");
  paddlepic= loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(10,100,20,20);
  ball.addImage (ballpic); 
  ball.velocityX=6;  
  paddle=createSprite(150,250,20,100);
  paddle.addImage(paddlepic);
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();

    ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+10;
  }
  drawSprites();
  
}

function randomVelocity()
{
 
  ball.velocityY=random(-15,15); 
}

