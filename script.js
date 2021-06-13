/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

var gameFinish = new Audio('.sound/Mario Kart 64 Finish Line Sound Effect.mp3')
var levelUp = new Audio('.sound/Mario-coin-sound.mp3');
var ballx = 640;
var bally = 360;
var ballSize = 40;
var gameState = "Level 1";
var score = 0;

function setup() {
  createCanvas(1280, 720);
} // eind setup


function draw() {
  background(155,155,155);
  var currentTime = floor(millis()/1000);

  if(gameState == "Level 1"){
    levelEen();
    levelUp.play();
  }
  if(gameState == "Level 2"){
    levelTwee();
    levelUp.play();
  }
  if(gameState == "Level 3"){
    levelDrie();
    levelUp.play();    
  }
  if(gameState == "Level 4"){
    levelComplete();
    gameFinish.play();
    // @ts-ignore
    levelCompleteText();
    }

    textSize(25);
    // @ts-ignore
    text(("Score: " + score), 960, 48);
  
    textSize(25);
    // @ts-ignore
    text(("Time: " + currentTime), 220, 48);


}  // eind draw

function levelEen(){
    textSize(30);
  // @ts-ignore
    text("Level 1", width/2,height-24);
  // @ts-ignore
     var distToBall = dist(ballx,bally,mouseX,mouseY);
     if(distToBall < ballSize/2){
   	// @ts-ignore
   	ballx = random(width);
  	// @ts-ignore
  	bally = random(height);
    score = score + 5;
  }
  
  if(score>= 50){
    gameState = "Level 2";
  }
  
  ellipse(ballx,bally, ballSize, ballSize);
  line(ballx,bally,mouseX,mouseY);

  
} // eind level 1

function levelTwee(){
  background(200,100,0);
  textSize(30);
  // @ts-ignore
  text("Level 2!", width/2,height-24);
  // @ts-ignore
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	// @ts-ignore
   	ballx = random(width);
  	// @ts-ignore
  	bally = random(height);
    score = score + 10;
  }
  
  if(score>= 200){
   gameState = "Level 3";
  }
  
  ellipse(ballx,bally, ballSize, ballSize);

  
} // eind level 2

function levelDrie(){
  background(0,100,200);
  textSize(30);
  // @ts-ignore
  text("Level 3!", width/2,height-24);
  // @ts-ignore
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	// @ts-ignore
   	ballx = random(width);
  	// @ts-ignore
  	bally = random(height);
    score = score + 50;
    ballSize = ballSize - 5;
  }
  
  if(score>= 600){
      gameState = "Level 4"; 
  }
  
  ellipse(ballx,bally, ballSize, ballSize);


  
} // eind level 3

function levelComplete(){
    background(0,200,0);
    textSize(50)
    // @ts-ignore
    text("Congratulations!", 480, 360)
}


// eind game (restart)

 