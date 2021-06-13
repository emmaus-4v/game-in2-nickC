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
var gameState = "Level 1";
var score = 0;

function setup() {
  createCanvas(1280, 720);
  textSize(20);
} // eind setup


function draw() {
  background(220);
  var currentTime = floor(millis()/1000);

  if(gameState == "Level 1"){
  	levelEen();
  }
  if(gameState == "Level 2"){
   	levelTwee(); 
  }
  if(gameState == "Level 3"){
   	levelDrie(); 
  }
  if(gameState == "Level 4"){
    levelComplete();
    spelStatus = CONGRATULATIONS;
    alert("CONGRATULATIONS");
    document.location.reload();
    }

    text(("Score: " + score), 640, 40, 640, 40);
  
    text(('Time: ' + currentTime), 500, 40, 640, 40);
}  // eind draw

function levelEen(){
  text("Level 1", 640, 600, 640, 600);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(1000, 400);
  	bally = random(1000, 400);
    score = score + 1;
  }
  
  if(score>= 15){
    gameState = "Level 2";
  }
  
  ellipse(ballx,bally, ballSize, ballSize);
  line(ballx,bally,mouseX,mouseY);
  
} // eind level 1

function levelTwee(){
  background(200,100,0);
  text("Level 2!", 640, 600, 640, 600);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(1000, 550);
  	bally = random(1000, 550);
    score = score + 1;
  }
  
  if(score>= 25){
   gameState = "Level 3";
  }
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
} // eind level 2

function levelDrie(){
  background(0,100,200);
  text("Level 3!", 640, 600, 640, 600);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   	ballx = random(1000, 550);
  	bally = random(1000, 550);
    score = score + 1;
    ballSize = ballSize - 3;
  }
  
  if(score>= 35){
      gameState = "Level 4"; 
  }
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
} // eind level 3

function levelComplete(){
    background(0,200,0);
    text("Congratulations!", 640, 600, 640, 600);
    
  }