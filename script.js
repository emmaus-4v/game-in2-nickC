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

const SPELEN = 1;
const CONGRATULATIONS = 2;
var spelStatus = SPELEN;
var ballx = 640;
var bally = 360;
var ballSize = 40;
var score = 0;
var gameState = "L1";


function setup() {
  createCanvas(1280, 720);
  textSize(20);
} // end of setup  ================================


function draw() {
  background(220);
  var currentTime = floor(millis()/1000);

  if(gameState == "L1"){
  	levelOne();
  }
  if(gameState == "L2"){
   	levelTwo(); 
  }
  if(gameState == "L3"){
   	levelThree(); 
  }
  if(gameState == "L4"){
    levelComplete();
    spelStatus = CONGRATULATIONS;
    alert("CONGRATULATIONS");
    document.location.reload();
    }

    text(("Score: " + score), 640, 40, 640, 40);
  
    text(('Time: ' + currentTime), 500, 40, 640, 40);
}// end of draw 

function levelOne(){
  text("Level 1", 640, 600, 640, 600);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(1000, 400);
  	bally = random(1000, 400);
    score = score + 1;
  }
  
  if(score>= 15){
    gameState = "L2";
  }
  
  ellipse(ballx,bally, ballSize, ballSize);
  line(ballx,bally,mouseX,mouseY);
  
} // end of level 1  

function levelTwo(){
  background(200,100,0);
  text("Level 2!", 640, 600, 640, 600);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(1000, 550);
  	bally = random(1000, 550);
    score = score + 1;
  }
  
  if(score>= 25){
   gameState = "L3";
  }
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
} // end of level 2  

function levelThree(){
  background(0,100,200);
  text("Level 3!", 640, 600, 640, 600);
  var distToBall = any(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(1000, 550);
  	bally = random(1000, 550);
    score = score + 1;
    ballSize = ballSize - 3;
  }
  
  if(score>= 35){
      gameState = "L4"; 
  }
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
} // end of level 3  

function levelComplete(){
    background(0,200,0);
    text("Congratulations!", 640, 600, 640, 600);
    
  }