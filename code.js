//countdown function
currTime = 50;
var timeOut = 5000;

function runTimer(x) {
    
}

let x = document.getElementById("DisplayCountdown");
 setTimeout(function(){
     x.innerHTML = currTime;
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
  
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
  
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
  
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
  
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
  
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
  
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
  
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
 
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;
 
 
 setTimeout(function(){
     x.innerHTML = currTime
     currTime = currTime-5;
 }, timeOut);
 timeOut = timeOut + 5000;

 setTimeout(function(){
     x.innerHTML = "Blast Off"
 }, timeOut);

 //Craps Function
 function play() {
    var die1 =Math.ceil(Math.random()*6);
    
    var die2 =Math.ceil(Math.random()*6);
    
    var sum = die1+die2
    
    
    document.write("Die 1 = " + die1) 
    document.write("<br/>") 
    document.write("Die 2 = " + die2) 
    document.write("<br/>") 
    document.write("Sum = " + sum)
    document.write("<br/>") 
    if (sum == 7 || sum == 11) 
    { 
    
    document.write("CRAPS - you lose") 
    document.write("<br/>") 
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win") 
    document.write("<br/>") 
    }
    
    }
