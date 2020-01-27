
//Setting the Bomb and Rainbow locations
var randomBomb = Math.floor(Math.random() * 24)
var randomRainbow = Math.floor(Math.random() * 24)
var randomBomb2 = Math.floor(Math.random() * 24)
//Making sure that Bomb and Rainbow locations are different
while (randomBomb === randomRainbow) {
    var randomBomb = Math.floor(Math.random() * 24)
}
while (randomBomb === randomBomb2) {
    var randomBomb = Math.floor(Math.random() * 24)
}
while (randomBomb2 === randomRainbow) {
    var randomBomb2 = Math.floor(Math.random() * 24)
}

//Setting the counter to 0
var count=0

//Setting the game
function treasurehunt(id){

    if (id===randomBomb) {
        document.getElementById(id).innerHTML="🙅"
        setTimeout(function(){ alert("Another boring female human..."); }, 500);

        setTimeout(function(){ restart(); }, 600);
}
    else if (id===randomBomb2) {
        document.getElementById(id).innerHTML="🤦"
        setTimeout(function(){ alert("Another boring male human..."); }, 500);

        setTimeout(function(){ restart(); }, 600);
}
    else if (id===randomRainbow) {
        document.getElementById(id).innerHTML="👽"
        setTimeout(function(){ alert("You found THEM!!!"); }, 500);
        setTimeout(function(){ restart(); }, 600);
}
    else {
        //Adding the count only when the box becomes a tree
        if(document.getElementById(id).innerHTML === "💽")
        {
            count++;
        }
            document.getElementById(id).innerHTML="🤖"
        document.getElementById("count").innerHTML=count
}

}


//Resetting the game
function restart(){
    randomBomb = Math.floor(Math.random() * 24)
    randomRainbow = Math.floor(Math.random() * 24)
    randomBomb2 = Math.floor(Math.random() * 24)
    while (randomBomb === randomRainbow) {
         randomBomb = Math.floor(Math.random() * 24)
}
    while (randomBomb === randomBomb2) {
         randomBomb = Math.floor(Math.random() * 24)
}
    while (randomBomb2 === randomRainbow) {
        randomBomb2 = Math.floor(Math.random() * 24)
}
document.getElementById("0").innerHTML="💽"
document.getElementById("1").innerHTML="💽"
document.getElementById("2").innerHTML="💽"
document.getElementById("3").innerHTML="💽"
document.getElementById("4").innerHTML="💽"
document.getElementById("5").innerHTML="💽"
document.getElementById("6").innerHTML="💽"
document.getElementById("7").innerHTML="💽"
document.getElementById("8").innerHTML="💽"
document.getElementById("9").innerHTML="💽"
document.getElementById("10").innerHTML="💽"
document.getElementById("11").innerHTML="💽"
document.getElementById("12").innerHTML="💽"
document.getElementById("13").innerHTML="💽"
document.getElementById("14").innerHTML="💽"
document.getElementById("15").innerHTML="💽"
document.getElementById("16").innerHTML="💽"
document.getElementById("17").innerHTML="💽"
document.getElementById("18").innerHTML="💽"
document.getElementById("19").innerHTML="💽"
document.getElementById("20").innerHTML="💽"
document.getElementById("21").innerHTML="💽"
document.getElementById("22").innerHTML="💽"
document.getElementById("23").innerHTML="💽"

 count=0;
 document.getElementById("count").innerHTML = count;
}
