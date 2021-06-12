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

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
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
  }
  
  text(("Score: " + score),width/2,40);
  
  text('time: ' + currentTime, 200, 40);
} // end of draw ===================================

function levelOne(){
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(width);
  	bally = random(height);
    score = score + 1;
  }
  
  if(score>= 15){
    gameState = "L2";
  }
  
  ellipse(ballx,bally, ballSize, ballSize);
  line(ballx,bally,mouseX,mouseY);
  
} // end of level 1  ===============================

function levelTwo(){
  background(200,100,0);
  text("Level 2!", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(width);
  	bally = random(height);
    score = score + 1;
  }
  
  if(score>= 25){
   gameState = "L3";
  }
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
} // end of level 2  ===============================

function levelThree(){
  background(0,100,200);
  text("Level 3!", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(width);
  	bally = random(height);
    score = score + 1;
    ballSize = ballSize - 3;
  }
  
  if(score>= 35){
      gameState = "L4"; 
  }
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
} // end of level 3  ===============================

function levelComplete(){
    background(0,200,0);
    text("Congratulations!", width/2, height-20);
    
  }