
/* six sided die */
function rollDice6(){
var die1=  document.getElementById("die6");
/*var die2=  document.getElementById("die2");*/
var status= document.getElementById("status");
var d1= Math.floor(Math.random ()*6) +1;
/*var d2= Math.floor(Math.random ()*6) +1;*/
var diceTotal= d1/*+d2;*/
die1.innerHTML=d1;
/*die2.innerHTML=d2;*/
status.innerHTML= "You rolled" + diceTotal + ".";


}
/* 4 side die */
function rollDice4(){
var die1=  document.getElementById("die4");

var status= document.getElementById("status4");
var d4= Math.floor(Math.random ()*4) +1;

var diceTotal= d4/*+d2;*/
die1.innerHTML=d4;

status.innerHTML= "You rolled" + diceTotal + ".";

}

/* eight sided die*/
function rollDice8(){
var die8=  document.getElementById("die8");

var status= document.getElementById("status8");
var d8= Math.floor(Math.random ()*8) +1;

var diceTotal= d8/*+d2;*/
die8.innerHTML=d8;

status.innerHTML= "You rolled" + diceTotal + ".";
}

/* ten sided die */
function rollDice10(){
var die10=  document.getElementById("die10");

var status= document.getElementById("status10");
var d10= Math.floor(Math.random ()*10) +1;

var diceTotal= d10
die10.innerHTML=d10;

status.innerHTML= "You rolled" + diceTotal + ".";
}

/* twelve sided die*/
function rollDice12(){
var die12=  document.getElementById("die12");

var status= document.getElementById("status12");
var d12= Math.floor(Math.random ()*12) +1;

var diceTotal= d12
die12.innerHTML=d12;

status.innerHTML= "You rolled" + diceTotal + ".";
}

/* twenty sided die*/
function rollDice20(){
var die20=  document.getElementById("die20");

var status= document.getElementById("status20");
var d20= Math.floor(Math.random ()*20) +1;

var diceTotal= d20
die20.innerHTML=d20;

status.innerHTML= "You rolled" + diceTotal + ".";
}

/* percintile sided die*/
function rollDice100(){
var die100=  document.getElementById("die100");

var status= document.getElementById("status100");
var d100= Math.floor(Math.random ()*100) +1 ;

var diceTotal= d100
die100.innerHTML=Math.round(d100/10)*10;

status.innerHTML= "You rolled" + diceTotal + "."
}
